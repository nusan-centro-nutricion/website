---
title: Blog
layout: page
language: es
---

<section class="section--grid">
{% assign posts = site.posts | where: 'language', page.language | sort: 'date' %}
{% for post in posts %}
  {% include post-excerpt.html %}
{% endfor %}
</section>
