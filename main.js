// Prabhat Sagar — Personal Portfolio Logic

// 1. Projects Data
const projects = [
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
    image: "images/astha.png",
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
    image: "images/mockpros.png",
    liveDemo: "https://mockpros.com",
    gitHub: "https://github.com/prabhatsagar/mockpros"
  },
  {
    id: "dressly",
    title: "Dressly",
    subtitle: "Premium Fashion E-Commerce",
    description: "A minimal, high-performance boutique ecommerce platform showcasing luxury garments with real-time checkout and stock management.",
    problem: "Traditional e-commerce platforms suffer from bloated client bundles, leading to slow page loads, cart abandonment, and poor SEO visibility on mobile devices.",
    solution: "Designed a clean, light-weight client interface leveraging server-rendered microservices. Implemented an optimized edge-cached static product catalog with dynamic transactional updates.",
    features: [
      "Instant cart updates with optimistic UI updates",
      "Secure checkout flow with multiple providers",
      "Real-time stock reservation and sync engine",
      "Optimized media compression and responsive image delivery"
    ],
    techStack: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS", "Vite"],
    image: "images/dressly.png",
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
    image: "images/ruvelle.png",
    liveDemo: "#",
    gitHub: "https://github.com/prabhatsagar/ruvelle"
  }
];

// 2. Design Showcase Data
const designs = [
  {
    id: 1,
    title: "Neo-Brutalist Circle",
    category: "Illustrator (AI)",
    image: "images/design_1.png",
    description: "A study of bold dark teal geometry overlapping structural layout grids."
  },
  {
    id: 2,
    title: "Editorial Typography Layout",
    category: "Photoshop (PS)",
    image: "images/design_2.png",
    description: "A clean editorial spread design emphasizing structured vertical alignment and whitespace."
  },
  {
    id: 3,
    title: "Sagar Studio Identity",
    category: "Illustrator (AI)",
    image: "images/design_3.png",
    description: "Corporate identity guidelines sheet outlining color systems and mark proportions."
  },
  {
    id: 4,
    title: "Bauhaus Grid Composition",
    category: "Illustrator (AI)",
    image: "images/design_4.png",
    description: "An asymmetric graphic composition utilizing flat geometry in a balanced grid."
  },
  {
    id: 5,
    title: "Scandinavian Landscape",
    category: "Illustrator (AI)",
    image: "images/design_5.png",
    description: "Vector landscape drawing featuring layered mountains rendered with clean shading."
  },
  {
    id: 6,
    title: "Details Make Design",
    category: "Photoshop (PS)",
    image: "images/design_6.png",
    description: "A bold, modern typography poster highlighting micro-details in visual structures."
  },
  {
    id: 7,
    title: "Minimal Mobile UI Kit",
    category: "Figma (UI)",
    image: "images/design_7.png",
    description: "Clean mobile widget interfaces designed for high contrast and fast readability."
  },
  {
    id: 8,
    title: "Abstract Network Nodes",
    category: "Illustrator (AI)",
    image: "images/design_8.png",
    description: "Intricate connecting nodes representing interactive data flows and server grids."
  },
  {
    id: 9,
    title: "Modern Architectures Cover",
    category: "Photoshop (PS)",
    image: "images/design_9.png",
    description: "High-contrast serif cover design displaying architectural structural layouts."
  },
  {
    id: 10,
    title: "Studio Stationery mockup",
    category: "Photoshop (PS)",
    image: "images/design_10.png",
    description: "Stationery branding mockup showing layout integration across files and cards."
  }
];

// 3. Render Projects
const renderProjects = () => {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projects.map((project, idx) => {
    const isEven = idx % 2 === 0;
    const isDarkBg = idx % 2 === 0; // Alternating card background: idx 0 (Astha) is dark, idx 1 (MockPros) is light, idx 2 (Dressly) is dark, idx 3 (Ruvelle) is light
    const hasLiveDemo = idx < 2; // First 2 have live demo link, last 2 only have github

    // Alternate background container classes
    const cardBgClass = isDarkBg 
      ? 'bg-[#0A0A0A] border border-[#1C1C1C] text-white shadow-medium' 
      : 'bg-white border border-[#EAEAEA] text-black shadow-soft';

    // Subtitle & Title & Desc typography coloring based on background theme
    const subtitleColor = isDarkBg ? 'text-neutral-400' : 'text-[#5F6368]';
    const titleColor = isDarkBg ? 'text-white' : 'text-[#111111]';
    const descColor = isDarkBg ? 'text-neutral-300' : 'text-[#5F6368]';

    // Problem/Solution wrapper styling
    const borderCol = isDarkBg ? 'border-neutral-800' : 'border-[#EAEAEA]';
    const probSolHeaderColor = isDarkBg ? 'text-white' : 'text-[#111111]';
    const probSolTextColor = isDarkBg ? 'text-neutral-400' : 'text-[#5F6368]';

    // Key Features list color
    const listTextColor = isDarkBg ? 'text-neutral-400' : 'text-[#5F6368]';
    const listCheckSvg = isDarkBg 
      ? `<svg class="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>`
      : `<svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>`;

    // Tech Badge style
    const badgeStyle = isDarkBg 
      ? 'bg-[#121212] border border-[#222] text-neutral-300' 
      : 'bg-white border border-[#EAEAEA] text-[#5F6368]';

    // Links style
    const liveDemoLinkStyle = isDarkBg ? 'text-white hover:text-neutral-200' : 'text-[#000000] hover:text-[#222222]';
    const gitHubLinkStyle = isDarkBg ? 'text-neutral-400 hover:text-white' : 'text-[#5F6368] hover:text-[#111111]';

    // Browser Mockup dark-mode override style attributes
    const browserStyle = isDarkBg ? 'border-color: #222; background: #161616; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5)' : '';
    const browserBarStyle = isDarkBg ? 'background: #111; border-bottom-color: #222;' : '';
    const browserAddressStyle = isDarkBg ? 'background: #0A0A0A; border-color: #222; color: #888;' : '';
    const browserImageBg = isDarkBg ? 'bg-[#121212]' : 'bg-[#FAFAFA]';

    return `
      <div class="project-card-wrap flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-10 lg:gap-16 p-6 sm:p-8 lg:p-12 rounded-3xl reveal reveal-slide-up card-lift-transition ${cardBgClass}">
        <!-- Image Container wrapped in Browser Mockup -->
        <div class="w-full lg:w-1/2 flex items-center justify-center">
          <div class="browser-mockup w-full" style="${browserStyle}">
            <!-- Browser Top Bar -->
            <div class="browser-bar" style="${browserBarStyle}">
              <div class="browser-dot browser-dot-red"></div>
              <div class="browser-dot browser-dot-yellow"></div>
              <div class="browser-dot browser-dot-green"></div>
              <div class="browser-address" style="${browserAddressStyle}">${project.id}.io</div>
            </div>
            <!-- Image Area -->
            <div class="aspect-[16/10] w-full overflow-hidden ${browserImageBg}">
              <img src="${project.image}" alt="${project.title} Interface" class="project-card-image w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" loading="lazy" />
            </div>
          </div>
        </div>
        <!-- Content Container -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center">
          <span class="text-xs font-bold uppercase tracking-wider ${subtitleColor} mb-2">${project.subtitle}</span>
          <h3 class="text-2xl lg:text-3xl font-extrabold ${titleColor} mb-4 leading-tight">${project.title}</h3>
          <p class="${descColor} text-sm lg:text-base mb-6 leading-relaxed">${project.description}</p>
          
          <div class="space-y-4 mb-6 border-l-2 ${borderCol} pl-4">
            <div>
              <h4 class="text-xs font-bold ${probSolHeaderColor} uppercase tracking-wider mb-0.5">Problem</h4>
              <p class="${probSolTextColor} text-xs lg:text-sm leading-relaxed">${project.problem}</p>
            </div>
            <div>
              <h4 class="text-xs font-bold ${probSolHeaderColor} uppercase tracking-wider mb-0.5">Solution</h4>
              <p class="${probSolTextColor} text-xs lg:text-sm leading-relaxed">${project.solution}</p>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-xs font-bold ${isDarkBg ? 'text-white' : 'text-[#111111]'} uppercase tracking-wider mb-2">Key Features</h4>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs lg:text-sm ${listTextColor}">
              ${project.features.map(f => `
                <li class="flex items-start gap-2">
                  ${listCheckSvg}
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-6">
            ${project.techStack.map(tech => `
              <span class="px-2.5 py-0.5 rounded-full text-xs shadow-sm ${badgeStyle}">${tech}</span>
            `).join('')}
          </div>

          <div class="flex items-center gap-6">
            ${hasLiveDemo ? `
              <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-xs lg:text-sm font-semibold ${liveDemoLinkStyle} transition-colors underline-hover">
                Live Demo
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
              </a>
            ` : ''}
            <a href="${project.gitHub}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-xs lg:text-sm font-semibold ${gitHubLinkStyle} transition-colors underline-hover">
              GitHub
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// 4. Render Design Showcase (Dense Bento Grid Layout)
const renderDesigns = () => {
  const container = document.getElementById('designs-container');
  if (!container) return;

  container.innerHTML = designs.map((design, idx) => {
    // Determine bento grid spans based on index
    let gridClass = "col-span-1 row-span-1";
    if (idx === 1 || idx === 5 || idx === 9) {
      gridClass = "col-span-1 sm:col-span-2 row-span-1";
    } else if (idx === 2 || idx === 8) {
      gridClass = "col-span-1 row-span-2";
    }

    return `
      <div class="design-card-wrap relative group cursor-pointer border border-[#EAEAEA] bg-white rounded-2xl shadow-soft overflow-hidden reveal reveal-scale card-lift-transition ${gridClass}" data-id="${design.id}">
        <div class="w-full h-full overflow-hidden bg-[#FAFAFA]">
          <img src="${design.image}" alt="${design.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
        <!-- Hover Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span class="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1.5">${design.category}</span>
          <h4 class="text-base font-bold text-white mb-1">${design.title}</h4>
          <p class="text-white/70 text-[11px] leading-relaxed mb-4">${design.description}</p>
          <span class="text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
            Expand Art
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </span>
        </div>
      </div>
    `;
  }).join('');
};

// 5. Design Showcase Modal Logic
const setupDesignModal = () => {
  const modal = document.getElementById('design-modal');
  if (!modal) return;

  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDescription = document.getElementById('modal-description');
  
  const modalClose = document.getElementById('modal-close');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');

  let currentIdx = 0;

  const openModal = (idx) => {
    currentIdx = idx;
    const item = designs[currentIdx];
    if (!item) return;

    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category;
    modalDescription.textContent = item.description;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    let newIdx = currentIdx - 1;
    if (newIdx < 0) newIdx = designs.length - 1;
    openModal(newIdx);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    let newIdx = currentIdx + 1;
    if (newIdx >= designs.length) newIdx = 0;
    openModal(newIdx);
  };

  // Bind clicks to dynamically generated cards
  document.querySelectorAll('.design-card-wrap').forEach((card) => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const idx = designs.findIndex(d => d.id === id);
      if (idx !== -1) openModal(idx);
    });
  });

  // Event Listeners
  modalClose.addEventListener('click', closeModal);
  modalPrev.addEventListener('click', handlePrev);
  modalNext.addEventListener('click', handleNext);

  // Close when clicking overlay backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') handlePrev(e);
    if (e.key === 'ArrowRight') handleNext(e);
  });
};

// 6. Sticky Navbar Behavior
const setupNavbar = () => {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (!navbar) return;

  const handleScroll = () => {
    // Solid white background on scroll, border and shadow details
    if (window.scrollY > 40) {
      navbar.classList.add('bg-white', 'border-[#EAEAEA]', 'shadow-sm', 'py-4');
      navbar.classList.remove('bg-transparent', 'border-transparent', 'py-6');
    } else {
      navbar.classList.remove('bg-white', 'border-[#EAEAEA]', 'shadow-sm', 'py-4');
      navbar.classList.add('bg-transparent', 'border-transparent', 'py-6');
    }

    // Active Navigation Highlighting
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.remove('text-[#5F6368]');
        link.classList.add('text-[#000000]');
      } else {
        link.classList.remove('text-[#000000]');
        link.classList.add('text-[#5F6368]');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run initially
};

// 7. Responsive Mobile Menu
const setupMobileMenu = () => {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('#mobile-menu nav a');

  if (!openBtn || !closeBtn || !menu) return;

  const openMenu = () => {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
};

// 8. Interactive Workflow Tabs
const setupWorkflowTabs = () => {
  const steps = document.querySelectorAll('.workflow-step-btn');
  const details = document.querySelectorAll('.workflow-detail-content');

  if (!steps.length || !details.length) return;

  steps.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = btn.getAttribute('data-step');

      // Update button visual states
      steps.forEach(b => {
        const dot = b.querySelector('.workflow-dot');
        const text = b.querySelector('.workflow-text');
        
        b.classList.remove('bg-white', 'border-[#000000]');
        b.classList.add('bg-transparent', 'border-[#EAEAEA]');
        
        if (dot) {
          dot.classList.remove('bg-[#000000]', 'scale-125');
          dot.classList.add('bg-[#5F6368]/30');
        }
        if (text) {
          text.classList.remove('text-[#111111]', 'font-semibold');
          text.classList.add('text-[#5F6368]', 'font-medium');
        }
      });

      // Activate active button
      btn.classList.add('bg-white', 'border-[#000000]');
      btn.classList.remove('bg-transparent', 'border-[#EAEAEA]');
      const activeDot = btn.querySelector('.workflow-dot');
      const activeText = btn.querySelector('.workflow-text');
      if (activeDot) {
        activeDot.classList.add('bg-[#000000]', 'scale-125');
        activeDot.classList.remove('bg-[#5F6368]/30');
      }
      if (activeText) {
        activeText.classList.add('text-[#111111]', 'font-semibold');
        activeText.classList.remove('text-[#5F6368]', 'font-medium');
      }

      // Toggle content details
      details.forEach(card => {
        if (card.getAttribute('id') === `workflow-detail-${targetStep}`) {
          card.classList.remove('hidden');
          card.classList.add('block');
        } else {
          card.classList.add('hidden');
          card.classList.remove('block');
        }
      });
    });
  });
};

// 9. Scroll Animation Observers (Reveal classes)
const setupScrollAnimations = () => {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
};

// 10. Custom Cursor Follower Logic
const setupCustomCursor = () => {
  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');
  
  if (!dot || !ring) return;

  // Position cursor offscreen initially
  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isMoving = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isMoving) {
      isMoving = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }

    // Move the central dot instantly
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    isMoving = false;
  });

  // Smooth follow for the outer ring using interpolation (inertia lag)
  const animateRing = () => {
    if (isMoving) {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    }
    requestAnimationFrame(animateRing);
  };
  animateRing();

  // Attach scaling effects on click
  document.addEventListener('mousedown', () => {
    ring.style.width = '24px';
    ring.style.height = '24px';
    ring.style.borderColor = '#FFFFFF';
  });

  document.addEventListener('mouseup', () => {
    ring.style.width = '32px';
    ring.style.height = '32px';
    ring.style.borderColor = 'rgba(255, 255, 255, 0.6)';
  });

  // Attach hover triggers on clickable items
  const attachHoverListeners = () => {
    const clickables = document.querySelectorAll('a, button, [role="button"], .design-card-wrap, .workflow-step-btn');
    clickables.forEach(el => {
      if (el.dataset.hasCursorListener) return;
      el.dataset.hasCursorListener = 'true';

      el.addEventListener('mouseenter', () => {
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = '#FFFFFF';
        ring.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0)`;
      });

      el.addEventListener('mouseleave', () => {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        ring.style.backgroundColor = 'transparent';
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
      });
    });
  };

  // Run initial attachment
  attachHoverListeners();

  // Re-run periodically to cover dynamically rendered cards
  setTimeout(attachHoverListeners, 400);
  setTimeout(attachHoverListeners, 1000);
};

// Initialize All UI Elements on Load
window.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderDesigns();
  setupNavbar();
  setupMobileMenu();
  setupWorkflowTabs();
  setupDesignModal();
  setupCustomCursor();
  
  // Timeout ensures dynamically rendered elements are observed properly
  setTimeout(() => {
    setupScrollAnimations();
  }, 120);
});

