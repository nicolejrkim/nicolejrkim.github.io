// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-personal",
          title: "personal",
          description: "Things I enjoy outside of research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "M.S. student in Robotics, Systems, and Control at ETH Zurich. A PDF version is available via the button below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-from-kaist-with-a-b-s-in-computer-science-amp-amp-electrical-and-electronic-engineering-summa-cum-laude-mortar-board",
          title: 'Graduated from KAIST with a B.S. in Computer Science &amp;amp;amp; Electrical and Electronic...',
          description: "",
          section: "News",},{id: "news-started-my-m-s-in-robotics-systems-and-control-at-eth-zurich-and-joined-the-computational-robotics-lab-as-a-research-assistant-working-on-motion-retargeting-and-whole-body-control-for-humanoids-sparkles",
          title: 'Started my M.S. in Robotics, Systems, and Control at ETH Zurich, and joined...',
          description: "",
          section: "News",},{id: "news-started-a-semester-project-at-the-eth-robotic-systems-lab-on-whole-body-tactile-sensing-for-rl-based-dynamic-locomotion-on-the-anymal-quadruped-robot-robot",
          title: 'Started a semester project at the ETH Robotic Systems Lab on whole-body tactile...',
          description: "",
          section: "News",},{id: "news-our-team-38-of-freedom-won-the-robot-competition-at-the-2026-eth-robotics-summer-school-trophy",
          title: 'Our team 38° of Freedom won the robot competition at the 2026 ETH...',
          description: "",
          section: "News",},{id: "projects-dcase-2020-task-2",
          title: 'DCASE 2020 Task 2',
          description: "Unsupervised anomalous machine sound detection for condition monitoring.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dcase2020_task2/";
            },},{id: "projects-dense-temporal-motion-retargeting-for-legged-robots",
          title: 'Dense Temporal Motion Retargeting for Legged Robots',
          description: "Retargets human motion to legged robots by jointly optimizing timing and control with sampling-based MPC, so each robot follows the motion at a timing its own dynamics can execute.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dtmr/";
            },},{id: "projects-real-to-sim-6-dof-object-pose-estimation",
          title: 'Real-to-Sim 6-DoF Object Pose Estimation',
          description: "6-DoF object pose tracking from a single egocentric RGB video, generating simulation-ready trajectories for Isaac Sim. 3D Vision course project at ETH Zurich (Spring 2026).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/real2sim_6dpose/";
            },},{id: "projects-robotics-summer-school-autonomous-navigation",
          title: 'Robotics Summer School — Autonomous Navigation',
          description: "Winner of the robot competition at the 2026 ETH Robotics Summer School — long-range navigation with FAR Planner on a quadruped robot, as part of team &quot;38° of Freedom&quot;.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robotics_summer_school/";
            },},{id: "projects-whole-body-tactile-representations-for-motion-control",
          title: 'Whole-Body Tactile Representations for Motion Control',
          description: "Benchmarking tactile representations for RL-based dynamic locomotion, deployed on an ANYmal-D quadruped with an FBG-based tactile skin. Semester project at the ETH Robotic Systems Lab (Spring 2026).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tactile_rl/";
            },},{id: "projects-visual-odometry",
          title: 'Visual Odometry',
          description: "Monocular visual odometry pipeline for real-time camera pose estimation, evaluated on KITTI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/visual_odometry/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/2026_CV_JaeryeongKim.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%65%72%6B%69%6D@%73%74%75%64%65%6E%74.%65%74%68%7A.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nicolejrkim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jaeryeong-kim", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
