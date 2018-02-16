---
title: Blog
layout: default
lang: es
---

<ul>
{% assign posts = site.posts | where: 'language', page.lang %}
{% for posts in posts %}
<li>
  {% include post-excerpt.html %}
</li>
{% endfor %}
</ul>
