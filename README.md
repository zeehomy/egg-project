<!--
 * @Date: 2021-04-26 14:00:06
 * @LastEditTime: 2021-04-27 13:55:37
 * @Description: 
 * @FilePath: /egg-example/README.md
-->
# one egg

my first egg

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

controller service中可以this访问ctx
middleware中通常通过参数传入ctx
ctx 
ctx.body
ctx.query.page
ctx.service.news.list();
ctx.render()
ctx.get('user-agent')
ctx.status = 403;
ctx.message = 'Go away, robot.';
this.ctx.curl();

this.config一般会在service中使用，或在middleware中通过options形式参数替代使用