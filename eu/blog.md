---
title: Blog
layout: page
language: eu
permalink: /eu/bloga
---

<ul class="grid">
{% assign posts = site.posts | where: 'language', page.language %}
{% for post in posts %}
<li>
  {% include post-excerpt.html %}
</li>
{% endfor %}
</ul>
