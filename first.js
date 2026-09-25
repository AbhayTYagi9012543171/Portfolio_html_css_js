"use strict";

/* =========================================================
   ABHAY TYAGI — PREMIUM PORTFOLIO ENGINE
   Vanilla JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     HELPERS
     ======================================================= */

  const $ = (selector, parent = document) => {
    return parent.querySelector(selector);
  };

  const $$ = (selector, parent = document) => {
    return Array.from(parent.querySelectorAll(selector));
  };

  const createElement = (tag, className = "", html = "") => {
    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (html) {
      element.innerHTML = html;
    }

    return element;
  };

  const escapeHTML = (value) => {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  /* =======================================================
     DATA
     ======================================================= */

  const skills = [
    {
      category: "Frontend",
      icon: "◈",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Responsive UI",
        "Tailwind CSS"
      ]
    },
    {
      category: "Backend",
      icon: "⌘",
      items: [
        "Python",
        "Django",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication"
      ]
    },
    {
      category: "Database",
      icon: "◉",
      items: [
        "MySQL",
        "MongoDB",
        "Mongoose",
        "SQL",
        "Database Design"
      ]
    },
    {
      category: "Tools",
      icon: "✦",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Chrome DevTools",
        "Render"
      ]
    }
  ];

  const experiences = [
    {
      date: "2025 — Present",
      title: "MCA — Computer Applications",
      company: "KIET Deemed to be University",
      description:
        "Currently pursuing MCA with a focus on software development, web technologies, databases, algorithms, and modern application architecture."
    },
    {
      date: "2025",
      title: "Software Development Intern",
      company: "CSS Infotech Pvt. Ltd.",
      description:
        "Worked on practical web development tasks involving frontend interfaces, backend functionality, databases, APIs, and application improvements."
    },
    {
      date: "2025",
      title: "Project SEVA",
      company: "Social Internship",
      description:
        "Participated in a social internship initiative focused on understanding real-world community problems and contributing through practical activities."
    },
    {
      date: "Workshop",
      title: "Ethical Hacking Training",
      company: "IIT Delhi",
      description:
        "Participated in ethical hacking training and explored cybersecurity concepts, security awareness, and responsible testing practices."
    }
  ];

  const projects = [
    {
      id: 1,
      title: "ProblemLens",
      type: "AI / Full Stack",
      category: "Full Stack",
      description:
        "AI-powered problem discovery and opportunity intelligence platform designed to transform real-world evidence into structured problems, insights, opportunities, and solutions.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "FastAPI",
        "AI"
      ],
      featured: true,
      github: "https://github.com/AbhayTYagi9012543171",
      demo: "#"
    },
    {
      id: 2,
      title: "SyncDoc",
      type: "Collaboration Platform",
      category: "Full Stack",
      description:
        "Collaborative document platform focused on real-time editing, workspaces, comments, document versions, synchronization, and modern team workflows.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Socket.IO",
        "Yjs",
        "MongoDB"
      ],
      featured: true,
      github: "https://github.com/AbhayTYagi9012543171",
      demo: "#"
    },
    {
      id: 3,
      title: "FleetDash",
      type: "Fleet Management",
      category: "Full Stack",
      description:
        "Modern fleet management dashboard featuring vehicle tracking, driver management, analytics, alerts, maps, and role-based workflows.",
      tech: [
        "React",
        "TypeScript",
        "Redux",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Leaflet"
      ],
      featured: true,
      github: "https://github.com/AbhayTYagi9012543171",
      demo: "#"
    },
    {
      id: 4,
      title: "CollegeConnect",
      type: "College Management",
      category: "Full Stack",
      description:
        "Smart college management system connecting students, faculty, administrators, courses, departments, placements, and academic workflows.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST API"
      ],
      featured: false,
      github: "https://github.com/AbhayTYagi9012543171",
      demo: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      type: "Personal Portfolio",
      category: "Frontend",
      description:
        "Responsive developer portfolio built to present projects, technical skills, experience, education, and professional contact information.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design"
      ],
      featured: false,
      github: "https://github.com/AbhayTYagi9012543171",
      demo: "#"
    },
    {
      id: 6,
      title: "Short URL",
      type: "Web Application",
      category: "Backend",
      description:
        "URL shortening application focused on generating short links and providing a simple user experience for managing links.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Backend API"
      ],
      featured: false,
      github: "https://github.com/AbhayTYagi9012543171",
      demo: "#"
    }
  ];

  const services = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "End-to-end web applications with modern frontend interfaces, backend APIs, databases, authentication, and deployment-ready architecture.",
      tags: ["React", "Node.js", "Python"]
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "Responsive, accessible, polished interfaces designed for desktop, tablet, and mobile experiences.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      number: "03",
      title: "Backend & APIs",
      description:
        "Structured backend services with authentication, REST APIs, database integration, validation, and scalable application logic.",
      tags: ["Express", "Django", "REST"]
    },
    {
      number: "04",
      title: "Database Solutions",
      description:
        "Database modeling and integration for applications using SQL and NoSQL technologies.",
      tags: ["MySQL", "MongoDB", "Mongoose"]
    }
  ];

  /* =======================================================
     PAGE LOADER
     ======================================================= */

  const pageLoader = $("#page-loader");

  const hideLoader = () => {
    if (!pageLoader) return;

    window.setTimeout(() => {
      pageLoader.classList.add("is-hidden");

      window.setTimeout(() => {
        pageLoader.remove();
      }, 700);
    }, 450);
  };

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, {
      once: true
    });
  }

  /* =======================================================
     YEAR
     ======================================================= */

  const yearElement = $("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* =======================================================
     THEME
     ======================================================= */

  const html = document.documentElement;
  const themeToggle = $("#theme-toggle");
  const themeIcon = $("#theme-icon");

  const savedTheme = localStorage.getItem(
    "portfolio-theme"
  );

  if (savedTheme === "light" || savedTheme === "dark") {
    html.dataset.theme = savedTheme;
  }

  const updateThemeIcon = () => {
    if (!themeIcon) return;

    const currentTheme =
      html.dataset.theme || "dark";

    themeIcon.textContent =
      currentTheme === "dark" ? "☾" : "☀";
  };

  updateThemeIcon();

  themeToggle?.addEventListener("click", () => {
    const currentTheme =
      html.dataset.theme || "dark";

    const nextTheme =
      currentTheme === "dark"
        ? "light"
        : "dark";

    html.dataset.theme = nextTheme;

    localStorage.setItem(
      "portfolio-theme",
      nextTheme
    );

    updateThemeIcon();
  });

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuToggle = $("#menu-toggle");
  const siteNav = $("#site-nav");

  const closeMenu = () => {
    if (!siteNav || !menuToggle) return;

    siteNav.classList.remove("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );
  };

  const openMenu = () => {
    if (!siteNav || !menuToggle) return;

    siteNav.classList.add("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Close navigation"
    );
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen =
      siteNav?.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!siteNav || !menuToggle) return;

    if (
      siteNav.classList.contains("is-open") &&
      !siteNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      let target = null;

      try {
        target = $(targetId);
      } catch {
        return;
      }

      if (!target) return;

      event.preventDefault();

      const header = $(".site-header");

      const offset =
        (header?.offsetHeight || 80) + 8;

      const position =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top: Math.max(0, position),
        behavior: "smooth"
      });

      history.replaceState(
        null,
        "",
        targetId
      );
    });
  });

  /* =======================================================
     REVEAL ANIMATIONS
     IMPORTANT:
     This is declared BEFORE renderProjects()
     ======================================================= */

  let revealObserver = null;

  const observeReveals = () => {
    const elements = $$(".reveal");

    if (!elements.length) {
      return;
    }

    if (
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add(
          "is-visible"
        );
      });

      return;
    }

    if (!revealObserver) {
      revealObserver =
        new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );
            });
          },
          {
            threshold: 0.12,
            rootMargin:
              "0px 0px -50px 0px"
          }
        );
    }

    elements.forEach((element) => {
      if (
        !element.classList.contains(
          "is-visible"
        )
      ) {
        revealObserver.observe(element);
      }
    });
  };

  /* =======================================================
     SKILLS
     ======================================================= */

  const skillsGrid = $("#skills-grid");

  if (skillsGrid) {
    skillsGrid.innerHTML = skills
      .map(
        (skill, index) => `
          <article
            class="skill-card reveal"
            style="--delay:${index * 80}ms"
          >

            <div class="skill-card-top">

              <span class="skill-icon">
                ${escapeHTML(skill.icon)}
              </span>

              <span class="skill-number">
                ${String(index + 1).padStart(2, "0")}
              </span>

            </div>

            <h3>
              ${escapeHTML(skill.category)}
            </h3>

            <div class="tag-list">

              ${skill.items
                .map(
                  (item) => `
                    <span class="tag">
                      ${escapeHTML(item)}
                    </span>
                  `
                )
                .join("")}

            </div>

          </article>
        `
      )
      .join("");
  }

  /* =======================================================
     EXPERIENCE
     ======================================================= */

  const experienceList =
    $("#experience-list");

  if (experienceList) {
    experienceList.innerHTML =
      experiences
        .map(
          (item, index) => `
            <article
              class="timeline-item reveal"
              style="--delay:${index * 100}ms"
            >

              <div class="timeline-marker">
                <span></span>
              </div>

              <div class="timeline-content">

                <span class="timeline-date">
                  ${escapeHTML(item.date)}
                </span>

                <h3>
                  ${escapeHTML(item.title)}
                </h3>

                <strong>
                  ${escapeHTML(item.company)}
                </strong>

                <p>
                  ${escapeHTML(item.description)}
                </p>

              </div>

            </article>
          `
        )
        .join("");
  }

  /* =======================================================
     PROJECT FILTERS
     ======================================================= */

  const filterContainer =
    $("#project-filters");

  const projectsGrid =
    $("#projects-grid");

  const categories = [
    "All",
    ...new Set(
      projects.map(
        (project) => project.category
      )
    )
  ];

  let activeFilter = "All";

  /* =======================================================
     PROJECT MODAL ELEMENTS
     ======================================================= */

  const modal =
    $("#project-modal");

  const modalTitle =
    $("#modal-title");

  const modalType =
    $("#modal-type");

  const modalDescription =
    $("#modal-description");

  const modalTech =
    $("#modal-tech");

  const modalActions =
    $("#modal-actions");

  let lastFocusedElement = null;

  /* =======================================================
     CLOSE MODAL
     ======================================================= */

  const closeModal = () => {
    if (!modal) return;

    modal.classList.remove("is-open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

    if (
      lastFocusedElement &&
      typeof lastFocusedElement.focus ===
        "function"
    ) {
      lastFocusedElement.focus();
    }
  };

  /* =======================================================
     OPEN MODAL
     ======================================================= */

  const openModal = (projectId) => {
    if (!modal) return;

    const project = projects.find(
      (item) =>
        String(item.id) ===
        String(projectId)
    );

    if (!project) return;

    lastFocusedElement =
      document.activeElement;

    if (modalTitle) {
      modalTitle.textContent =
        project.title;
    }

    if (modalType) {
      modalType.textContent =
        `${project.category} — ${project.type}`;
    }

    if (modalDescription) {
      modalDescription.textContent =
        project.description;
    }

    if (modalTech) {
      modalTech.innerHTML =
        project.tech
          .map(
            (tech) => `
              <span class="tag">
                ${escapeHTML(tech)}
              </span>
            `
          )
          .join("");
    }

    if (modalActions) {
      const githubButton =
        project.github
          ? `
            <a
              class="button"
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          `
          : "";

      const demoButton =
        project.demo &&
        project.demo !== "#"
          ? `
            <a
              class="button button-ghost"
              href="${project.demo}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo ↗
            </a>
          `
          : "";

      modalActions.innerHTML =
        githubButton +
        demoButton;
    }

    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

    window.setTimeout(() => {
      $(".modal-close", modal)?.focus();
    }, 50);
  };

  /* =======================================================
     PROJECT RENDER
     ======================================================= */

  const renderProjects = () => {
    if (!projectsGrid) return;

    const filteredProjects =
      activeFilter === "All"
        ? projects
        : projects.filter(
            (project) =>
              project.category ===
              activeFilter
          );

    if (!filteredProjects.length) {
      projectsGrid.innerHTML = `
        <div class="empty-state">
          <p>No projects found.</p>
        </div>
      `;

      return;
    }

    projectsGrid.innerHTML =
      filteredProjects
        .map(
          (project, index) => `
            <article
              class="project-card reveal ${
                project.featured
                  ? "project-featured"
                  : ""
              }"
              style="--delay:${index * 80}ms"
              data-project-id="${project.id}"
            >

              <div class="project-card-top">

                <span class="project-type">
                  ${escapeHTML(project.type)}
                </span>

                <span class="project-index">
                  ${String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

              </div>

              <h3>
                ${escapeHTML(project.title)}
              </h3>

              <p>
                ${escapeHTML(
                  project.description
                )}
              </p>

              <div class="tag-list">

                ${project.tech
                  .slice(0, 5)
                  .map(
                    (tech) => `
                      <span class="tag">
                        ${escapeHTML(tech)}
                      </span>
                    `
                  )
                  .join("")}

              </div>

              <div class="project-footer">

                <button
                  type="button"
                  class="text-button project-details"
                  data-project="${project.id}"
                >
                  View details
                  <span>↗</span>
                </button>

                ${
                  project.github
                    ? `
                      <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link"
                        aria-label="Open ${escapeHTML(
                          project.title
                        )} GitHub"
                      >
                        GitHub ↗
                      </a>
                    `
                    : ""
                }

              </div>

            </article>
          `
        )
        .join("");

    /* IMPORTANT:
       renderProjects is called after
       observeReveals has been initialized.
    */
    observeReveals();

    initializeCardTilt(
      $$(".project-card")
    );
  };

  /* =======================================================
     RENDER FILTERS
     ======================================================= */

  const renderFilters = () => {
    if (!filterContainer) return;

    filterContainer.innerHTML =
      categories
        .map(
          (category) => `
            <button
              type="button"
              class="filter-button ${
                category === activeFilter
                  ? "is-active"
                  : ""
              }"
              data-filter="${escapeHTML(
                category
              )}"
            >
              ${escapeHTML(category)}
            </button>
          `
        )
        .join("");

    $$(".filter-button", filterContainer)
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            activeFilter =
              button.dataset.filter ||
              "All";

            renderFilters();
            renderProjects();
          }
        );
      });
  };

  /* =======================================================
     SERVICES
     ======================================================= */

  const servicesGrid =
    $("#services-grid");

  if (servicesGrid) {
    servicesGrid.innerHTML =
      services
        .map(
          (service, index) => `
            <article
              class="service-card reveal"
              style="--delay:${index * 80}ms"
            >

              <div class="service-number">
                ${escapeHTML(
                  service.number
                )}
              </div>

              <div class="service-content">

                <h3>
                  ${escapeHTML(
                    service.title
                  )}
                </h3>

                <p>
                  ${escapeHTML(
                    service.description
                  )}
                </p>

                <div class="tag-list">

                  ${service.tags
                    .map(
                      (tag) => `
                        <span class="tag">
                          ${escapeHTML(tag)}
                        </span>
                      `
                    )
                    .join("")}

                </div>

              </div>

              <span class="service-arrow">
                ↗
              </span>

            </article>
          `
        )
        .join("");
  }

  /* =======================================================
     MODAL EVENTS
     ======================================================= */

  document.addEventListener(
    "click",
    (event) => {
      const projectButton =
        event.target.closest(
          "[data-project]"
        );

      if (projectButton) {
        openModal(
          projectButton.dataset.project
        );

        return;
      }

      const closeButton =
        event.target.closest(
          "[data-close-modal]"
        );

      if (closeButton) {
        closeModal();
      }
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    }
  );

  /* =======================================================
     CONTACT FORM
     ======================================================= */

  const contactForm =
    $("#contact-form");

  const formStatus =
    $("#form-status");

  const setError = (
    input,
    message
  ) => {
    if (!input) return;

    const field =
      input.closest("label");

    if (!field) return;

    field.classList.add(
      "has-error"
    );

    const error =
      $(".error-msg", field);

    if (error) {
      error.textContent =
        message;
    }
  };

  const clearError = (input) => {
    if (!input) return;

    const field =
      input.closest("label");

    if (!field) return;

    field.classList.remove(
      "has-error"
    );

    const error =
      $(".error-msg", field);

    if (error) {
      error.textContent = "";
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );
  };

  contactForm?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const formData =
        new FormData(
          contactForm
        );

      const name =
        String(
          formData.get("name") || ""
        ).trim();

      const email =
        String(
          formData.get("email") || ""
        ).trim();

      const subject =
        String(
          formData.get("subject") ||
            ""
        ).trim();

      const message =
        String(
          formData.get("message") ||
            ""
        ).trim();

      const nameInput =
        contactForm.elements.name;

      const emailInput =
        contactForm.elements.email;

      const subjectInput =
        contactForm.elements.subject;

      const messageInput =
        contactForm.elements.message;

      [
        nameInput,
        emailInput,
        subjectInput,
        messageInput
      ].forEach(clearError);

      let valid = true;

      if (name.length < 2) {
        setError(
          nameInput,
          "Please enter your name."
        );

        valid = false;
      }

      if (!validateEmail(email)) {
        setError(
          emailInput,
          "Please enter a valid email."
        );

        valid = false;
      }

      if (subject.length < 3) {
        setError(
          subjectInput,
          "Please enter a subject."
        );

        valid = false;
      }

      if (message.length < 10) {
        setError(
          messageInput,
          "Message should contain at least 10 characters."
        );

        valid = false;
      }

      if (!valid) {
        if (formStatus) {
          formStatus.textContent =
            "Please fix the highlighted fields.";

          formStatus.classList.add(
            "error"
          );
        }

        return;
      }

      const recipient =
        "tyagiabhay2004@gmail.com";

      const mailSubject =
        encodeURIComponent(
          `${subject} — Portfolio`
        );

      const mailBody =
        encodeURIComponent(
          `Hello Abhay,

Name: ${name}
Email: ${email}

${message}

Sent from your portfolio.`
        );

      const mailto =
        `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

      if (formStatus) {
        formStatus.textContent =
          "Opening your email client…";

        formStatus.classList.remove(
          "error"
        );
      }

      window.location.href =
        mailto;
    }
  );

  /* =======================================================
     ACTIVE NAVIGATION
     ======================================================= */

  const sections = $$(
    "main section[id]"
  );

  const navLinks =
    $$(".nav-link");

  if (
    sections.length &&
    navLinks.length &&
    "IntersectionObserver" in window
  ) {
    const sectionObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              const id =
                entry.target.id;

              navLinks.forEach(
                (link) => {
                  link.classList.toggle(
                    "is-active",
                    link.getAttribute(
                      "href"
                    ) === `#${id}`
                  );
                }
              );
            }
          );
        },
        {
          threshold: 0.2,
          rootMargin:
            "-20% 0px -65% 0px"
        }
      );

    sections.forEach(
      (section) => {
        sectionObserver.observe(
          section
        );
      }
    );
  }

  /* =======================================================
     HEADER SCROLL STATE
     ======================================================= */

  const header =
    $(".site-header");

  const updateHeader =
    () => {
      if (!header) return;

      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 20
      );
    };

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

  updateHeader();

  /* =======================================================
     CARD TILT
     ======================================================= */

  const canHover =
    window
      .matchMedia(
        "(hover: hover) and (pointer: fine)"
      )
      .matches;

  const initializeCardTilt = (
    cards
  ) => {
    if (!canHover) return;

    cards.forEach((card) => {
      if (
        card.dataset.tiltReady ===
        "true"
      ) {
        return;
      }

      card.dataset.tiltReady =
        "true";

      card.addEventListener(
        "pointermove",
        (event) => {
          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left;

          const y =
            event.clientY -
            rect.top;

          const centerX =
            rect.width / 2;

          const centerY =
            rect.height / 2;

          if (
            centerX === 0 ||
            centerY === 0
          ) {
            return;
          }

          const rotateX =
            ((y - centerY) /
              centerY) *
            -2.5;

          const rotateY =
            ((x - centerX) /
              centerX) *
            2.5;

          card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-4px)
          `;
        }
      );

      card.addEventListener(
        "pointerleave",
        () => {
          card.style.transform = "";
        }
      );
    });
  };

  initializeCardTilt(
    $$(".skill-card")
  );

  initializeCardTilt(
    $$(".service-card")
  );

  /* =======================================================
     CURSOR GLOW
     ======================================================= */

  const cursorGlow =
    $("#cursor-glow");

  if (cursorGlow && canHover) {
    let cursorX = 0;
    let cursorY = 0;
    let glowX = 0;
    let glowY = 0;

    window.addEventListener(
      "pointermove",
      (event) => {
        cursorX =
          event.clientX;

        cursorY =
          event.clientY;
      },
      {
        passive: true
      }
    );

    const animateCursor =
      () => {
        glowX +=
          (cursorX - glowX) *
          0.12;

        glowY +=
          (cursorY - glowY) *
          0.12;

        cursorGlow.style.transform =
          `translate3d(${glowX}px, ${glowY}px, 0)`;

        requestAnimationFrame(
          animateCursor
        );
      };

    animateCursor();
  }

  /* =======================================================
     HERO ORB PARALLAX
     ======================================================= */

  const orbOne =
    $(".bg-orb-1") ||
    $(".orb-one");

  const orbTwo =
    $(".bg-orb-2") ||
    $(".orb-two");

  const orbThree =
    $(".bg-orb-3");

  if (
    canHover &&
    (orbOne ||
      orbTwo ||
      orbThree)
  ) {
    window.addEventListener(
      "pointermove",
      (event) => {
        const x =
          (event.clientX /
            window.innerWidth -
            0.5) *
          2;

        const y =
          (event.clientY /
            window.innerHeight -
            0.5) *
          2;

        if (orbOne) {
          orbOne.style.transform =
            `translate3d(${x * 18}px, ${y * 18}px, 0)`;
        }

        if (orbTwo) {
          orbTwo.style.transform =
            `translate3d(${x * -12}px, ${y * -12}px, 0)`;
        }

        if (orbThree) {
          orbThree.style.transform =
            `translate3d(${x * 8}px, ${y * -8}px, 0)`;
        }
      },
      {
        passive: true
      }
    );
  }

  /* =======================================================
     MAGNETIC BUTTON
     ======================================================= */

  if (canHover) {
    $$(".magnetic-btn").forEach(
      (button) => {
        button.addEventListener(
          "pointermove",
          (event) => {
            const rect =
              button.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left -
              rect.width / 2;

            const y =
              event.clientY -
              rect.top -
              rect.height / 2;

            button.style.transform =
              `translate(${x * 0.08}px, ${y * 0.08}px)`;
          }
        );

        button.addEventListener(
          "pointerleave",
          () => {
            button.style.transform = "";
          }
        );
      }
    );
  }

  /* =======================================================
     REDUCED MOTION
     ======================================================= */

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

  if (reduceMotion.matches) {
    document.documentElement.classList.add(
      "reduce-motion"
    );
  }

  reduceMotion.addEventListener?.(
    "change",
    (event) => {
      document.documentElement.classList.toggle(
        "reduce-motion",
        event.matches
      );
    }
  );

  /* =======================================================
     EXTERNAL LINK SAFETY
     ======================================================= */

  $$('a[target="_blank"]').forEach(
    (link) => {
      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );
    }
  );

  /* =======================================================
     INITIAL RENDER
     IMPORTANT:
     observeReveals is already initialized
     before renderProjects() is called.
     ======================================================= */

  renderFilters();

  renderProjects();

  /* Static + dynamically rendered elements */
  observeReveals();

  /* =======================================================
     MODAL FOCUS TRAP
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key !== "Tab" ||
        !modal ||
        !modal.classList.contains(
          "is-open"
        )
      ) {
        return;
      }

      const focusable =
        $$(
          'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
          modal
        );

      if (!focusable.length) {
        return;
      }

      const first =
        focusable[0];

      const last =
        focusable[
          focusable.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          last
      ) {
        event.preventDefault();
        first.focus();
      }
    }
  );

  /* =======================================================
     RESIZE
     ======================================================= */

  let resizeTimer = null;

  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(
        resizeTimer
      );

      resizeTimer =
        window.setTimeout(() => {
          if (
            window.innerWidth > 900
          ) {
            closeMenu();
          }
        }, 150);
    },
    {
      passive: true
    }
  );

  /* =======================================================
     DEBUG
     ======================================================= */

  console.log(
    "%cAbhay Tyagi Portfolio",
    "font-size:20px;font-weight:800;"
  );

  console.log(
    "%cPortfolio JavaScript initialized successfully.",
    "font-size:12px;"
  );
});