// ============================================================
//  THIS IS THE ONLY FILE YOU EDIT.
//  Update it daily after your GitHub push — nothing else changes.
// ============================================================

export const profile = {
  name: "Akshaya Niveditha",
  role: "Machine Learning Engineer · in training",
  // The one-sentence pitch under your name. Keep it under ~2 lines.
  tagline:
    "Final-year B.E (AI & ML). On a full-time, structured path from classical ML to deployed systems — every algorithm I learn ships to GitHub the same day.",
  email: "akshayaniveditha548@gmail.com",
  github: "AkshayaNiveditha",               // GitHub username
  linkedin: "akshaya-niveditha",
  location: "Chikkaballapura, Karnataka, India",
  // One line, shown under your tagline.
  education: "B.E in Artificial Intelligence & Machine Learning · Sri Siddhartha Institute of Technology · Class of 2027 · 8.83 CGPA",
  // Path to your resume PDF. Put resume.pdf inside the project's `public`
  // folder and leave this as "/resume.pdf". Set to "" to hide the button
  // until your resume is ready.
  resumeUrl: "/resume.pdf",
};

// The three live counters. Bump daily — takes 10 seconds.
// visible: false hides the whole strip. Flip to true once the numbers
// tell a good story (e.g. Day 15+, several projects shipped, real streak).
export const status = {
  visible: false,
  day: 1,        // study day number
  shipped: 0,    // algorithms / mini-projects pushed
  streak: 0,     // consecutive days with a commit
};

// ============================================================
//  PROJECTS — the shipping log. Newest first.
//  status: "building" (amber dot) or "shipped" (green dot)
//  Add an entry the day a project lands. Delete nothing — the
//  growing list IS the story.
// ============================================================
export const projects = [
  {
    name: "ml-algorithms-portfolio",
    description:
      "One mini-project per algorithm — from-scratch NumPy build + library version, a distinct real dataset each time (fraud, churn, disease risk, segmentation), honest metrics, plain-language READMEs.",
    tags: ["Python", "NumPy", "scikit-learn"],
    status: "building",
    date: "Jul 2026 →",
    link: "https://github.com/AkshayaNiveditha/ml-algorithms-portfolio",
  },
  // ---- TEMPLATE: copy, fill, paste at the TOP of this list ----
  // {
  //   name: "knn-heart-disease",
  //   description: "KNN from scratch vs sklearn on the UCI heart-disease dataset — why feature scaling changed ROC-AUC from 0.61 to 0.87.",
  //   tags: ["KNN", "NumPy", "healthcare"],
  //   status: "shipped",
  //   date: "Jul 2026",
  //   link: "https://github.com/AkshayaNiveditha/ml-algorithms-portfolio/tree/main/01-knn-heart-disease",
  // },
];

// ============================================================
//  SKILLS — only what's real. Move items from "building" to
//  "solid" when you'd be happy to be interviewed on them.
// ============================================================
export const skills = {
  solid: ["Python", "Git / GitHub"],
  building: ["SVM & KNN in depth", "Math for ML"],
};
