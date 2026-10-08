---
title: Random things
---

# {{ title }}

This is a place to put things that need to be on the web for one reason or another.



## Contents

<ol class="toc">
{%- for chapter in collections.chapters %}
<li><time datetime="{{ chapter.date.toISOString().slice(0,10) }}">{{ chapter.date.toISOString().slice(0,10) }}</time><a href="{{ chapter.url }}">{{ chapter.data.title }}</a>{% if chapter.data.description %}<p class="dek">{{ chapter.data.description }}</p>{% endif %}</li>
{%- endfor %}
</ol>
