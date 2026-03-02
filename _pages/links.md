---
layout: page
title: Links
permalink: /link/
nav: false
---

<div class="risorse-container">
  {% assign gruppi = site.risorse | group_by: "category" %}
  
  {% for gruppo in gruppi %}
    <h3 class="mt-4">{{ gruppo.name }}</h3>
    <div class="row">
      {% for pagina in gruppo.items %}
        <div class="col-sm-6 mt-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ pagina.title }}</h5>
              <p class="card-text small text-muted">{{ pagina.description }}</p>
              <a href="{{ pagina.url | relative_url }}" class="btn btn-outline-primary btn-sm">Visualizza Pagina</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>