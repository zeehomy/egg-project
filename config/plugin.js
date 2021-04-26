/*
 * @Date: 2021-04-26 14:00:06
 * @LastEditTime: 2021-04-26 15:10:00
 * @Description: 
 * @FilePath: /egg-example/config/plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  }
};
