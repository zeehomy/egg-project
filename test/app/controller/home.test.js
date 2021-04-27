/*
 * @Date: 2021-04-26 14:00:06
 * @LastEditTime: 2021-04-27 14:22:11
 * @Description: 
 * @FilePath: /egg-example/test/app/controller/home.test.js
 */
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggss')
      .expect(200);
  });
});
