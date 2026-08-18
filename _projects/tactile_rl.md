---
layout: page
title: Whole-Body Tactile Representations for Motion Control
description: Benchmarking tactile representations for RL-based dynamic locomotion, deployed on an ANYmal-D quadruped with an FBG-based tactile skin. Semester project at the ETH Robotic Systems Lab (Spring 2026).
img: assets/img/projects/tactilerl_dodge_frames.jpg
importance: 1
category: work
---

Semester project at the **ETH Robotic Systems Lab** (Spring 2026), supervised by Dr. Andrei Cramariuc and Dr. Robert Baines.

Learning-based controllers for legged robots perceive contact only indirectly, through proprioception and 3D perception. Whole-body tactile sensing would supply the contact signal directly — but the representation in which it should be fed to a learned policy is unresolved, and no benchmark existed to compare candidates.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactilerl_dodge_frames.jpg" title="The dodging task" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The dodging benchmark task: a quadruped tracks an end-effector target with one foot while evading balls launched at its shank.
</div>

**The benchmark.** I designed the *dodging task*, in which a quadruped must track an end-effector target with one foot while evading balls launched at its shank, scored by six metrics. Under one identical training recipe I compared proprioceptive-history baselines, an idealized single-point contact observation (FPB), and two taxel-grid representations matched to an FBG-based tactile skin: a single-cell map and **TaxelKV**, which derives a multi-cell activation from the ball–shank penetration geometry.

**In simulation**, the presence of tactile sensing matters far more than its representation: against the proprioceptive baseline, TaxelKV cuts the impulse per contact from 1.30 N·s to 0.45 N·s, the end-effector tracking error from 0.027 m to 0.011 m, and the clearance time from 0.26 s to 0.18 s.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactilerl_deploy_stills.jpg" title="Hardware deployment" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Deployment on ANYmal-D: policies reacting to kicks and pushes on the tactile-sensorized shank.
</div>

**On hardware**, the representations separate sharply. Deployed on an **ANYmal-D** quadruped carrying the FBG-based tactile skin, the proprioceptive policy ignores shoves altogether; FPB responds but inherits the CNN's localization error; TaxelKV, whose multi-cell activation stays closest to what the real sensor delivers, is robust to that single-point noise. The takeaway: closing the sim-to-real gap means modeling the representation on what the sensor delivers, not on the idealized quantities a simulator provides.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactilerl_fbg_leg.jpg" title="FBG tactile skin on the ANYmal shank" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The FBG-based tactile skin mounted on the ANYmal-D shank.
</div>
