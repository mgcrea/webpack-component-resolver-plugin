
import expect from 'expect';
import path from 'path';
import fs from 'fs';

import ComponentResolverPlugin from './../src';
const fixturesPath = path.resolve(__dirname, 'fixtures/');

const mockResolverFactory = (request, done) => ({
  join: ::path.join,
  fileSystem: fs,
  plugin: (source, callback) => {
    callback(request, done);
  },
  doResolve: done
});

describe('ComponentResolverPlugin', () => {
  it('should properly expose a function', () => {
    expect(ComponentResolverPlugin).toBeA('function');
  });
  it('should properly have source and target keys', () => {
    const resolverPlugin = new ComponentResolverPlugin('existing-directory', 'undescribed-raw-file', {});
    expect(resolverPlugin).toBeA('object');
    expect(resolverPlugin).toIncludeKeys(['source', 'target']);
  });
  it('should properly resolve a component file based on dirname', (done) => {
    const resolverPlugin = new ComponentResolverPlugin('existing-directory', 'undescribed-raw-file', {});
    const requestPath = path.join(fixturesPath, 'FooComponent');
    const mockResolver = mockResolverFactory({path: requestPath}, (target, request) => {
      expect(request.path).toEqual(path.join(requestPath, 'FooComponent.js'));
      done();
    });
    resolverPlugin.apply(mockResolver);
  });
  it('should properly prioritize an index file resolve', (done) => {
    const resolverPlugin = new ComponentResolverPlugin('existing-directory', 'undescribed-raw-file', {});
    const requestPath = path.join(fixturesPath, 'BarComponent');
    const mockResolver = mockResolverFactory({path: requestPath}, (target, request) => {
      expect(request).toBe(undefined);
      done();
    });
    resolverPlugin.apply(mockResolver);
  });
});
