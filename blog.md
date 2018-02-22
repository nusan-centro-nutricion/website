---
title: Blog
layout: page
lang: es
image: /assets/images/uploads/blog.jpg
---

{% t Monday %}
<section class="section--grid">
{% assign posts = site.posts | where: 'lang', page.lang | sort: 'date' %}
{% for post in posts %}
  {% include post-excerpt.html %}
{% endfor %}
</section>
