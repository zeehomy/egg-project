/*
 * @Date: 2021-04-26 14:00:06
 * @LastEditTime: 2021-04-28 09:49:05
 * @Description: 
 * @FilePath: /egg-example/config/plugin.js
 */
'use strict';
const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  ua: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua'),
  }
};
