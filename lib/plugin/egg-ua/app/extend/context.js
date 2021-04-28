/*
 * @Date: 2021-04-27 17:58:33
 * @LastEditTime: 2021-04-28 10:33:49
 * @Description: 
 * @FilePath: /egg-example/lib/plugin/egg-ua/app/extend/context.js
 */

module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipad|ipod/i;
    return iosReg.test(this.get('user-agent'));
  },
  get isAndroid() {
    const androidReg = /Galaxy|Pixel/i;
    return androidReg.test(this.get('user-agent'));
  }
};