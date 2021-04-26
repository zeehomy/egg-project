/*
 * @Date: 2021-04-26 15:03:25
 * @LastEditTime: 2021-04-26 15:05:02
 * @Description: 
 * @FilePath: /egg-example/app/controller/news.js
 */
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;