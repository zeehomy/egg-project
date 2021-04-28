/*
 * @Date: 2021-04-28 09:53:52
 * @LastEditTime: 2021-04-28 10:10:46
 * @Description: 
 * @FilePath: /egg-example/test/index.test.js
 */
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/index.test.js', () => {

  it('should GET / with iOS', () => {
    return app.httpRequest()
      .get('/')
      .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
      .expect(200)
      .expect('hi, eggss. isIOS: true');
  });

  it('should GET / with non iOS', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect('hi, eggss. isIOS: false');
  });

});