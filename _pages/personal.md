---
layout: page
title: personal
permalink: /personal/
description: Things I enjoy outside of research.
nav: true
nav_order: 4

# Each hobby becomes a card. `image` is optional: put photos in assets/img/personal/
# and give the path from assets/, e.g. img/personal/climbing.jpg
hobbies:
  - title: Hobby one (placeholder)
    text: A couple of sentences about this hobby — how you got into it and what you like about it.
    image:
  - title: Hobby two (placeholder)
    text: A couple of sentences about this hobby — how you got into it and what you like about it.
    image:
  - title: Hobby three (placeholder)
    text: A couple of sentences about this hobby — how you got into it and what you like about it.
    image:
---

<div class="fn-hobbies">
  {% for hobby in page.hobbies %}
    <article class="fn-hobby">
      {% if hobby.image %}
        <div class="fn-hobby-media">
          <img src="{{ hobby.image | prepend: 'assets/' | relative_url }}" alt="{{ hobby.title }}" loading="lazy">
        </div>
      {% endif %}
      <h3>{{ hobby.title }}</h3>
      <p>{{ hobby.text }}</p>
    </article>
  {% endfor %}
</div>
