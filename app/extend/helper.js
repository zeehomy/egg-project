/*
 * @Date: 2021-04-27 10:02:48
 * @LastEditTime: 2021-04-27 10:04:01
 * @Description: 
 * @FilePath: /egg-example/app/extend/helper.js
 */
const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();