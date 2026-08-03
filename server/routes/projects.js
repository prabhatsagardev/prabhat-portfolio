import { Router } from 'express';

const router = Router();

const projectsData = [
  {
    id: "astha",
    title: "Astha Animation Institute",
    subtitle: "Educational Academy Portal",
    description: "A comprehensive digital school portal featuring course schedules, portfolio showcase, student enrollment systems, and academic dashboards.",
    problem: "The institute's manual onboarding, physical document tracking, and disjointed course timetables led to high operational overhead and administration errors.",
    solution: "Architected a unified digital management dashboard with automated student onboarding workflows, responsive student portals, and digital scheduling calendars.",
    features: [
      "Automated student enrollment and course registration workflows",
      "High-fidelity student portfolio visual gallery",
      "Interactive class schedules and instructor calendar management",
      "Secure student dashboard for grades and attendance tracking"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/astha.png",
    liveDemo: "https://asthaanimation.com",
    gitHub: "https://github.com/prabhatsagar/astha-animation"
  },
  {
    id: "mockpros",
    title: "MockPros",
    subtitle: "Professional Mock Testing Hub",
    description: "A scalable practice testing platform for professional licensing certifications, with real-time timers, test statistics, and personalized analytics.",
    problem: "Candidates lack realistic exam simulators and actionable analytics to pinpoint knowledge gaps, resulting in inefficient study routines.",
    solution: "Engineered a custom testing engine capable of handling timed tests, with immediate grading and detailed visual breakdowns of strengths and weaknesses.",
    features: [
      "Timed exam simulator with real-time status tracking",
      "Detailed visual performance dashboard and analytics charts",
      "Category-wise scoring and comparison matrices",
      "Automated question bank randomizer and revision tracker"
    ],
    techStack: ["Laravel", "PHP", "JavaScript", "MySQL", "Tailwind CSS"],
    image: "/images/mockpros.png",
    liveDemo: "https://mockpros.com",
    gitHub: "https://github.com/prabhatsagar/mockpros"
  },
  {
    id: "dressly",
    title: "Dressly",
    subtitle: "Premium Fashion E-Commerce",
    description: "A minimal, high-performance boutique ecommerce platform showcasing luxury garments with real-time checkout and stock management.",
    problem: "Traditional e-commerce platforms suffer from bloated client bundles, leading to slow page loads, cart abandonment, and poor SEO visibility on mobile devices.",
    solution: "Designed a clean, light-weight client interface leveraging server-rendered microservices. Implemented an edge-cached static product catalog with dynamic transactional updates.",
    features: [
      "Instant cart updates with optimistic UI updates",
      "Secure checkout flow with multiple providers",
      "Real-time stock reservation and sync engine",
      "Optimized media compression and responsive image delivery"
    ],
    techStack: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS", "Vite"],
    image: "/images/dressly.png",
    liveDemo: "#",
    gitHub: "https://github.com/prabhatsagar/dressly"
  },
  {
    id: "ruvelle",
    title: "Ruvelle",
    subtitle: "Luxury Skincare Boutique",
    description: "An immersive digital storefront featuring premium cosmetic products, custom scent formulation mixers, and seamless checkout flows.",
    problem: "High-end brands struggle to replicate the tactile, premium experience of a physical retail store in digital channels, resulting in lower conversion rates.",
    solution: "Created an immersive, narrative-driven visual UI. Leveraged micro-animations, structured imagery grids, and high-fidelity typography to establish brand prestige and emotional resonance.",
    features: [
      "Interactive scent formulation custom mixer interface",
      "Immersive parallax storytelling scroll layouts",
      "One-tap secure guest checkout",
      "Curated editorial-style visual product grids"
    ],
    techStack: ["JavaScript", "Tailwind CSS", "Vite", "HTML5"],
    image: "/images/ruvelle.png",
    liveDemo: "#",
    gitHub: "https://github.com/prabhatsagar/ruvelle"
  }
];

router.get('/', (req, res) => {
  res.json({ success: true, count: projectsData.length, data: projectsData });
});

export default router;
