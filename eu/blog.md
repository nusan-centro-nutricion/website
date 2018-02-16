---
title: Blog
layout: default
lang: eu
permalink: /eu/bloga
---

<ul class="grid">
{% assign posts = site.posts | where: 'language', page.lang %}
{% for post in posts %}
<li>
  {% include post-excerpt.html %}
</li>
{% endfor %}
</ul>