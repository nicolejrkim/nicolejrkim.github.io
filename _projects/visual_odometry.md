---
layout: page
title: Visual Odometry
description: Monocular visual odometry pipeline for real-time camera pose estimation, evaluated on KITTI.
img: assets/img/projects/vo_kitti_final.jpg
importance: 3
category: work
github: https://github.com/nicolejrkim/va25_project
---

Developed a monocular Visual Odometry pipeline for real-time camera pose estimation using KLT feature tracking, PnP-based localization, and landmark triangulation.

Enhanced the baseline system with:

- **Local Bundle Adjustment** for improved trajectory accuracy
- **Ground plane scale correction** using SAM3 segmentation
- **Sim(3)-based loop detection and closure**

The system was evaluated on the KITTI dataset.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/vo_kitti_100x.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>
<div class="caption">
    Full pipeline running live on a KITTI sequence (100&times; speed-up): tracked features on the current frame, landmark counts, relative trajectory error, and the estimated full trajectory.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/vo_kitti_final.jpg" title="Final estimated trajectory on KITTI" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Final state of the run: the completed KITTI trajectory estimated with KLT tracking and Local Bundle Adjustment.
</div>

Code: [github.com/nicolejrkim/va25_project](https://github.com/nicolejrkim/va25_project)
