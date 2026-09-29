---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories: [work]
horizontal: false
---

<!-- pages/projects.md -->
<div class="publications projects-list">
{% assign projects_by_year = site.projects | group_by: "year" | sort: "name" | reverse %}
{% for group in projects_by_year %}
  <h2 class="bibliography">{{ group.name }}</h2>
  <ol class="bibliography">
    {% assign sorted_projects = group.items | sort: "importance" %}
    {% for project in sorted_projects %}
      {% include projects_list.liquid %}
    {% endfor %}
  </ol>
{% endfor %}
</div>
