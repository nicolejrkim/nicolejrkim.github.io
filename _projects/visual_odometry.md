---
layout: page
title: Visual Odometry
description: Monocular visual odometry pipeline for real-time camera pose estimation, evaluated on KITTI.
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

Code: [github.com/nicolejrkim/va25_project](https://github.com/nicolejrkim/va25_project)
