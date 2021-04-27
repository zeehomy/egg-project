/*
 * @Date: 2021-04-27 14:08:04
 * @LastEditTime: 2021-04-27 14:18:09
 * @Description: 
 * @FilePath: /egg-example/test/app/middleware/robot.test.js
 */
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {

  it('should block robot', () => {

    return app.httpRequest()
      .get('/')
      .set('User-Agent', "Baiduspider")
      .expect(403);
  });

});