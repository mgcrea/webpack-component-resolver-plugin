import path from 'path';

export default class ComponentResolverPlugin {
  constructor(source, target, {include}) {
    this.source = source;
    this.target = target;
    this.include = include;
  }
  apply(resolver) {
    const target = this.target;
    resolver.plugin(this.source, (request, callback) => {
      if (this.include && !request.path.startsWith(this.include)) {
        callback();
        return;
      }
      const rfs = resolver.fileSystem;
      const filename = `${path.basename(request.path)}.js`;
      const filePath = resolver.join(request.path, filename);
      rfs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
          callback();
          return;
        }
        const indexPath = resolver.join(request.path, 'index.js');
        rfs.stat(indexPath, (indexErr, indexStats) => {
          if (!indexErr && indexStats.isFile()) {
            callback();
            return;
          }
          const relativePath = request.relativePath && resolver.join(request.relativePath, filename);
          const nextRequest = Object.assign({}, request, {path: filePath, relativePath});
          resolver.doResolve(target, nextRequest, `using path: ${filePath}`, callback);
        });
      });
    });
  }
}

export function factory(opts = {}) {
  return new ComponentResolverPlugin('existing-directory', 'undescribed-raw-file', opts);
}
