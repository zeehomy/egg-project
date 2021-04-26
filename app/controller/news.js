/*
 * @Date: 2021-04-26 15:03:25
 * @LastEditTime: 2021-04-26 16:55:44
 * @Description: 
 * @FilePath: /egg-example/app/controller/news.js
 */
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'this is news 1', url: '/news/1' },
    //     { id: 2, title: 'this is news 2', url: '/news/2' }
    //   ]
    // };
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;