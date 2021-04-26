<!--
 * @Date: 2021-04-26 14:57:53
 * @LastEditTime: 2021-04-26 14:58:03
 * @Description: 
 * @FilePath: /egg-example/app/view/news/list.tpl
-->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>