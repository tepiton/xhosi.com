---
title: Random things
---

# {{ title }}

This is a place to put things that need to be on the web for one reason or another.



## Contents

<ol class="toc">
{%- for chapter in collections.chapters %}
<li><a href="{{ chapter.url }}">{{ chapter.data.title }}</a></li>
{%- endfor %}
</ol>
