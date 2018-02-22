---
title: Blog
layout: page
lang: eu
permalink: /eu/bloga
image: /assets/images/uploads/blog.jpg
---

<section class="section--grid">
{% assign posts = site.posts | where: 'lang', page.lang | sort: 'date' %}
{% for post in posts %}
  {% include post-excerpt.html %}
{% endfor %}
</section>
