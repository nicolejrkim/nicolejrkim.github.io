---
layout: page
title: Visual Odometry
description: Monocular VO pipeline with loop closure and bundle adjustment, evaluated on KITTI
importance: 1
category: course
github: https://github.com/nicolejrkim/va25_project
---

Developed a monocular Visual Odometry pipeline for real-time camera pose estimation using KLT feature tracking, PnP-based localization, and landmark triangulation.

Enhanced the baseline system with:
- **Local Bundle Adjustment** for refined pose and landmark estimates
- **Ground plane scale correction** using SAM3 segmentation
- **Sim(3)-based loop detection and closure** for global consistency

Evaluated on the KITTI dataset.
