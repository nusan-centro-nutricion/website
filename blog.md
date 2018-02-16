---
title: Blog
layout: default
language: es
---

<ul class="grid">
{% assign posts = site.posts | where: 'language', page.language %}
{% for post in posts %}
<li>
  {% include post-excerpt.html %}
</li>
{% endfor %}
</ul>
