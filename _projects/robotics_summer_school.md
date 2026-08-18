---
layout: page
title: Robotics Summer School — Autonomous Navigation
description: Winner of the robot competition at the 2026 ETH Robotics Summer School — long-range navigation with FAR Planner on a quadruped robot, as part of team "38° of Freedom".
img: assets/img/projects/summerschool_far_thumb.jpg
importance: 3
category: work
---

Team project at the **Robotics Summer School** at ETH Zurich (2026), as part of team *38° of Freedom* — **winner of the robot competition** 🏆.

Our team built an autonomous navigation stack for a quadruped robot: LiDAR-inertial state estimation (DLIO, later RESPLE for stable and accurate pose estimates), terrain analysis, and long-range path planning.

**My part** was the long-range planner, [FAR Planner](https://github.com/MichaelFYang/far_planner) — analyzing its failure modes and tuning it until it navigated our challenge scenarios reliably:

- Diagnosed known issues: the visibility graph is short-lived, the planner can get stuck in corners, and increasing pointcloud retention time worsens performance.
- Tuned the planner in two stages — first in simulation on representative maze scenarios, then online on the robot — together with smoothing the terrain analysis (larger voxel size, longer update time for temporal consistency).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/summerschool_far_nav.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>
<div class="caption">
    Navigation result: the tuned FAR Planner guiding the quadruped through a maze scenario — MuJoCo simulation (left) and the visibility graph and pointcloud in RViz (right).
</div>

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/summerschool_far_scenario.png" title="Simulation test scenario" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    One of the representative simulation scenarios used for planner tuning.
</div>

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/summerschool_winners.jpg" title="Team 38° of Freedom with winner certificates" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Team 38° of Freedom with our winner certificates from the 2026 ETH Robotics Summer School robot competition.
</div>
