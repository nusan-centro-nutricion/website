---
title: Blog
layout: page
language: eu
permalink: /eu/bloga
---

<section class="section--grid">
{% assign posts = site.posts | where: 'language', page.language %}
{% for post in posts %}
  {% include post-excerpt.html %}
{% endfor %}
</section>
