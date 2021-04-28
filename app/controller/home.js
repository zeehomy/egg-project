/*
 * @Date: 2021-04-26 14:00:06
 * @LastEditTime: 2021-04-28 10:07:01
 * @Description: 
 * @FilePath: /egg-example/app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { isIOS } = ctx;
    ctx.body = `hi, eggss. isIOS: ${isIOS}`;
  }
}

module.exports = HomeController;
