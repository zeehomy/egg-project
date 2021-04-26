/*
 * @Date: 2021-04-26 14:00:06
 * @LastEditTime: 2021-04-26 15:06:05
 * @Description: 
 * @FilePath: /egg-example/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
};
