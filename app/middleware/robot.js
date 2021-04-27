/*
 * @Date: 2021-04-27 10:18:45
 * @LastEditTime: 2021-04-27 14:01:43
 * @Description: 
 * @FilePath: /egg-example/app/middleware/robot.js
 */

// options === app.config.robot
module.exports = (options, app) => {

  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  }
};