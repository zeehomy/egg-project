/*
 * @Date: 2021-04-26 15:39:53
 * @LastEditTime: 2021-04-26 17:29:49
 * @Description: 
 * @FilePath: /egg-example/app/service/news.js
 */
const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;  

    // use build-in http client to GET hacker-news api
    // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {      // https://hacker-news.firebaseio.com/v0/topstories.json
    //   data: {
    //     orderBy: '"$key"',
    //     startAt: `"${pageSize * (page - 1)}"`,
    //     endAt: `"${pageSize * page - 1}"`,
    //   },
    //   dataType: 'json',
    // });;

    const idList = [
      26939292,
      26938515,
      26938945,
      26938100,
    ]
    // parallel GET detail
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        // return this.ctx.curl(url, { dataType: 'json' });
        return {
          "by": "pabs3",
          "descendants": 6,
          "id": 26938945,
          "kids": [
              26940699,
              26939858,
              26939725,
              26940144
          ],
          "score": 74,
          "time": 1619407409,
          "title": "Gisgraphy – open-source geocoder based on open data",
          "type": "story",
          "url": "https://www.gisgraphy.com/index.php"
        };
      })
    );

    // return newsList.map(res => res.data);
    return newsList;
  }
}

module.exports = NewsService;