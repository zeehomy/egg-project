/*
 * @Date: 2021-04-26 14:00:06
 * @LastEditTime: 2021-04-26 14:45:51
 * @Description: 
 * @FilePath: /egg-example/app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggss';
  }
}

module.exports = HomeController;
