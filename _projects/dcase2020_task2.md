---
layout: page
title: DCASE 2020 Task 2
description: Unsupervised anomalous machine sound detection for condition monitoring.
img: assets/img/projects/dcase_tsne_after.png
importance: 5
category: work
github: https://github.com/nicolejrkim/ee488_DCASE2020-Task2
---

Developed models for detecting anomalous machine sounds using unsupervised learning for condition monitoring.

Implemented advanced architectures (e.g., **NoisyArcMix**, **SpecNet**) and applied feature normalization and model ensembling, improving AUC by **2.14%**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/dcase_tsne_before.png" title="t-SNE before" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/dcase_tsne_after.png" title="t-SNE after" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    t-SNE visualization of learned embeddings for the fan machine type, before (left) and after (right) applying our feature refinement — machine IDs separate into clearly distinct clusters.
</div>

Code: [github.com/nicolejrkim/ee488_DCASE2020-Task2](https://github.com/nicolejrkim/ee488_DCASE2020-Task2)
