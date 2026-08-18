---
layout: page
title: Real-to-Sim 6-DoF Object Pose Estimation
description: 6-DoF object pose tracking from a single egocentric RGB video, generating simulation-ready trajectories for Isaac Sim. 3D Vision course project at ETH Zurich (Spring 2026).
importance: 1
category: work
github: https://github.com/3dv-fs26-real2sim/RGBTrack-3DV-
---

Course project for **3D Vision** at ETH Zurich (Spring 2026, Team 22).

The project estimates 6-degree-of-freedom object pose from a single egocentric RGB video stream — no depth sensor required. The system tracks the object's pose through a complete manipulation sequence (grasping, carrying, dropping) and generates simulation-ready trajectories for replay in **Isaac Sim**.

The pipeline combines:

- Object segmentation paired with monocular depth estimation
- A refined pose anchor established at frame 0
- In-hand tracking using gripper kinematics constraints
- Post-release 6D refinement with outlier rejection and smoothing
- Trajectory composition into per-frame 4×4 transformation matrices

**Project page:** [hudela390.github.io/real2sim-6dpose](https://hudela390.github.io/real2sim-6dpose/)

**Code:** [github.com/3dv-fs26-real2sim/RGBTrack-3DV-](https://github.com/3dv-fs26-real2sim/RGBTrack-3DV-)
