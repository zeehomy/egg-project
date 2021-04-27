/*
 * @Date: 2021-04-27 13:47:47
 * @LastEditTime: 2021-04-27 13:48:05
 * @Description: 
 * @FilePath: /egg-example/app/service/some.js
 */
const Service = require('egg').Service;

class SomeService extends Service {
  async list() {
    const rule = this.config.robot.ua;
  }
}

module.exports = SomeService;