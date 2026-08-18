---
layout: page
title: Real-to-Sim 6-DoF Object Pose Estimation
description: 6-DoF object pose tracking from a single egocentric RGB video, generating simulation-ready trajectories for Isaac Sim. 3D Vision course project at ETH Zurich (Spring 2026).
img: assets/img/projects/real2sim_summary.png
importance: 2
category: work
github: https://github.com/3dv-fs26-real2sim/RGBTrack-3DV-
---

Course project for **3D Vision** at ETH Zurich (Spring 2026), with Jihwan Shin and Hugo De la Riva Fernandez.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/real2sim_summary.png" title="Real-to-Sim pipeline overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pipeline overview: kinematic replay reconstructs the demonstration from RGB video and robot proprioception, then a dynamic replay in simulation recovers physically consistent object trajectories with rich information (contact forces, segmentation, multi-view renders).
</div>

The project estimates 6-degree-of-freedom object pose from a single egocentric RGB video stream — no depth sensor required. The system tracks the object's pose through a complete manipulation sequence (grasping, carrying, dropping) and generates simulation-ready trajectories for replay in **Isaac Sim**.

The pipeline combines:

- Object segmentation paired with monocular depth estimation
- A refined pose anchor established at frame 0
- In-hand tracking using gripper kinematics constraints
- Post-release 6D refinement with outlier rejection and smoothing
- Trajectory composition into per-frame 4×4 transformation matrices

**My contribution:** I implemented the dynamics-consistent trajectory replay and the **residual RL pipeline** for recovering a dynamically feasible rollout. Since neither the estimated object trajectory nor the recorded robot trajectory is physically valid in isolation (occlusion, depth ambiguity, sensor latency), a residual policy emits bounded corrections on the nominal robot configuration — applied as PD joint-position targets — to jointly refine the robot trajectory explicitly and the object trajectory implicitly through simulated contact dynamics in Isaac Sim, inspired by ManipTrans (Li et al., CVPR 2025).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/real2sim_filmroll.png" title="Simulation rollout vs. real recording" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RL-refined simulation rollout (top) reproducing the recorded real-world manipulation sequence (bottom).
</div>

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/real2sim_training_farm.png" title="GPU-parallelized RL training" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Residual policy training across 64 GPU-parallelized Isaac Sim environments.
</div>

**Project page:** [hudela390.github.io/real2sim-6dpose](https://hudela390.github.io/real2sim-6dpose/)

**Code:** [RGBTrack-3DV-](https://github.com/3dv-fs26-real2sim/RGBTrack-3DV-) (pose estimation) · [ManipTrans_isaacsim](https://github.com/3dv-fs26-real2sim/ManipTrans_isaacsim) (residual RL refinement)
