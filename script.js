const mobileBreakpoint = 1100;
const scrollContainer = document.querySelector(".snap-container");
const stage = document.querySelector(".story-stage");
const panels = [...document.querySelectorAll(".story-panel")];
const techChips = [...document.querySelectorAll("[data-tech-step]")];
const siteHeader = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const scrollLinks = [...document.querySelectorAll("[data-scroll-link]")];
const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const navSections = navLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const desktopSnap = window.matchMedia("(min-width: 768px)");
const experienceSection = document.querySelector("#experience");
const aboutSection = document.querySelector("#about");
const counters = [...document.querySelectorAll("[data-counter]")];
const aboutCounter = document.querySelector("[data-about-counter]");
const certificateModal = document.querySelector("[data-certificate-modal]");
const certificateOpenButton = document.querySelector("[data-certificate-open]");
const certificateCloseButton = document.querySelector("[data-certificate-close]");
const certificatePanel = document.querySelector("[data-certificate-panel]");
const faqRows = [...document.querySelectorAll("[data-faq-row]")];

const state = {
  step: 0,
  ticking: false,
  counterObserver: null,
  aboutCounterObserver: null,
};

const basePanelClasses = [
  "opacity-0",
  "pointer-events-none",
];

const activePanelClasses = [
  "opacity-100",
  "pointer-events-auto",
];

function setPanelState(panel, active) {
  panel.classList.remove(...(active ? basePanelClasses : activePanelClasses));
  panel.classList.add(...(active ? activePanelClasses : basePanelClasses));
}

function syncTechStack(step) {
  techChips.forEach((chip) => {
    chip.classList.toggle("is-active", Number(chip.dataset.techStep) === step);
  });
}

function syncPanels(step) {
  const isMobile = window.innerWidth <= mobileBreakpoint;

  panels.forEach((panel) => {
    const panelStep = Number(panel.dataset.step);
    if (isMobile) {
      panel.classList.toggle("hidden", panelStep !== 0);
      setPanelState(panel, panelStep === 0);
      syncTechStack(0);
      return;
    }

    panel.classList.remove("hidden");
    setPanelState(panel, panelStep === step);
  });

  syncTechStack(step);
}

function getHeaderOffset() {
  return Math.round((siteHeader?.getBoundingClientRect().height || 0) + 18);
}

function getScrollTop() {
  return desktopSnap.matches && scrollContainer ? scrollContainer.scrollTop : window.scrollY;
}

function getSectionTop(section) {
  if (desktopSnap.matches && scrollContainer) {
    return section.offsetTop;
  }

  return section.getBoundingClientRect().top + window.scrollY;
}

function scrollToSection(target) {
  if (desktopSnap.matches && scrollContainer) {
    scrollContainer.scrollTo({
      top: target.offsetTop,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    });
    return;
  }

  const top = target.id === "home" ? 0 : getSectionTop(target) - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
  });
}

function setActiveNav(sectionId) {
  if (state.activeSection === sectionId) {
    return;
  }

  state.activeSection = sectionId;

  navLinks.forEach((link) => {
    const isActive = link.hash === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setMobileMenu(open) {
  if (!mobileMenuToggle || !mobileMenu) {
    return;
  }

  mobileMenuToggle.classList.toggle("is-open", open);
  mobileMenu.classList.toggle("is-open", open);
  mobileMenuToggle.setAttribute("aria-expanded", String(open));
  mobileMenuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
}

function closeMobileMenu() {
  setMobileMenu(false);
}

function updateActiveNav() {
  const marker = getScrollTop() + getHeaderOffset() + 24;
  const current =
    [...navSections]
      .reverse()
      .find((section) => marker >= getSectionTop(section)) || navSections[0];

  if (current) {
    setActiveNav(current.id);
  }
}

function updateStory() {
  if (window.innerWidth <= mobileBreakpoint) {
    state.step = 0;
    syncPanels(0);
    return;
  }

  const viewportHeight =
    desktopSnap.matches && scrollContainer ? scrollContainer.clientHeight : window.innerHeight;
  const scrollable = stage.offsetHeight - viewportHeight;
  if (scrollable <= 1) {
    state.step = 0;
    syncPanels(0);
    return;
  }

  const scrolledThroughStage =
    desktopSnap.matches && scrollContainer
      ? scrollContainer.scrollTop - stage.offsetTop
      : -stage.getBoundingClientRect().top;

  const progress = Math.min(
    1,
    Math.max(0, scrolledThroughStage / Math.max(1, scrollable)),
  );

  const step = Math.min(3, Math.floor(progress * 4));

  if (step !== state.step) {
    state.step = step;
    syncPanels(step);
  }
}

function setCounterValue(counter, value) {
  counter.textContent = String(Math.round(value));
}

function resetCounters() {
  counters.forEach((counter) => {
    counter.dataset.animated = "false";
    counter.dataset.runId = "reset";
    setCounterValue(counter, 0);
  });
}

function animateCounter(counter) {
  if (counter.dataset.animated === "true") {
    return;
  }

  counter.dataset.animated = "true";

  const target = Number(counter.dataset.target || 0);
  const duration = prefersReducedMotion.matches ? 0 : 1500;
  const startedAt = performance.now();
  const runId = `${startedAt}-${target}`;
  counter.dataset.runId = runId;

  function tick(now) {
    if (counter.dataset.runId !== runId) {
      return;
    }

    if (duration === 0) {
      setCounterValue(counter, target);
      return;
    }

    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCounterValue(counter, target * eased);

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  }

  window.requestAnimationFrame(tick);
}

function animateCounters() {
  counters.forEach(animateCounter);
}

function setupCounterObserver() {
  state.counterObserver?.disconnect();

  if (!experienceSection || counters.length === 0) {
    return;
  }

  state.counterObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        resetCounters();
        animateCounters();
      } else {
        resetCounters();
      }
    },
    {
      root: desktopSnap.matches ? scrollContainer : null,
      threshold: 0.55,
    },
  );

  state.counterObserver.observe(experienceSection);
}

function resetAboutCounter() {
  if (!aboutCounter) {
    return;
  }

  aboutCounter.dataset.animated = "false";
  aboutCounter.dataset.runId = "reset";
  setCounterValue(aboutCounter, 0);
}

function animateAboutCounter() {
  if (!aboutCounter || aboutCounter.dataset.animated === "true") {
    return;
  }

  aboutCounter.dataset.animated = "true";

  const target = Number(aboutCounter.dataset.target || 100);
  const duration = prefersReducedMotion.matches ? 0 : 1200;
  const startedAt = performance.now();
  const runId = `${startedAt}-${target}-about`;
  aboutCounter.dataset.runId = runId;

  function tick(now) {
    if (aboutCounter.dataset.runId !== runId) {
      return;
    }

    if (duration === 0) {
      setCounterValue(aboutCounter, target);
      return;
    }

    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCounterValue(aboutCounter, target * eased);

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  }

  window.requestAnimationFrame(tick);
}

function setupAboutCounterObserver() {
  state.aboutCounterObserver?.disconnect();

  if (!aboutSection || !aboutCounter) {
    return;
  }

  state.aboutCounterObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        resetAboutCounter();
        animateAboutCounter();
      } else {
        resetAboutCounter();
      }
    },
    {
      root: desktopSnap.matches ? scrollContainer : null,
      threshold: 0.45,
    },
  );

  state.aboutCounterObserver.observe(aboutSection);
}

function openCertificateModal() {
  if (!certificateModal) {
    return;
  }

  certificateModal.classList.remove("hidden");
  certificateModal.classList.add("flex");
  document.body.style.overflow = "hidden";
  certificateCloseButton?.focus();
}

function closeCertificateModal() {
  if (!certificateModal) {
    return;
  }

  certificateModal.classList.add("hidden");
  certificateModal.classList.remove("flex");
  document.body.style.overflow = "";
  certificateOpenButton?.focus();
}

function setFaqRow(row, open) {
  const trigger = row.querySelector("[data-faq-trigger]");
  const content = row.querySelector("[data-faq-content]");
  const icon = row.querySelector("[data-faq-icon]");

  trigger?.setAttribute("aria-expanded", String(open));
  row.classList.toggle("border-slate-300", open);
  row.classList.toggle("bg-white", open);
  row.classList.toggle("shadow-[0_18px_44px_rgba(15,23,42,0.08)]", open);
  row.classList.toggle("border-slate-200/80", !open);
  row.classList.toggle("bg-white/70", !open);
  content?.classList.toggle("grid-rows-[1fr]", open);
  content?.classList.toggle("opacity-100", open);
  content?.classList.toggle("grid-rows-[0fr]", !open);
  content?.classList.toggle("opacity-0", !open);
  icon?.classList.toggle("rotate-180", open);
}

syncPanels(0);
updateStory();
updateActiveNav();
setupCounterObserver();
setupAboutCounterObserver();

certificateOpenButton?.addEventListener("click", openCertificateModal);
certificateCloseButton?.addEventListener("click", closeCertificateModal);
certificateModal?.addEventListener("click", closeCertificateModal);
certificatePanel?.addEventListener("click", (event) => {
  event.stopPropagation();
});

mobileMenuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true";
  setMobileMenu(!isOpen);
});

document.addEventListener("click", (event) => {
  if (!siteHeader?.contains(event.target)) {
    closeMobileMenu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && certificateModal && !certificateModal.classList.contains("hidden")) {
    closeCertificateModal();
  }

  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

faqRows.forEach((row, index) => {
  function openRow() {
    faqRows.forEach((currentRow) => {
      setFaqRow(currentRow, currentRow === row);
    });
  }

  function closeRows() {
    faqRows.forEach((currentRow) => {
      setFaqRow(currentRow, false);
    });
  }

  row.querySelector("[data-faq-trigger]")?.addEventListener("click", () => {
    const isOpen = row.querySelector("[data-faq-trigger]")?.getAttribute("aria-expanded") === "true";

    faqRows.forEach((currentRow) => {
      setFaqRow(currentRow, false);
    });

    if (!isOpen) {
      setFaqRow(row, true);
    } else if (index === 0) {
      setFaqRow(row, false);
    }
  });

  row.addEventListener("mouseenter", openRow);
  row.addEventListener("mouseleave", closeRows);
  row.querySelector("[data-faq-trigger]")?.addEventListener("focus", openRow);
  row.querySelector("[data-faq-trigger]")?.addEventListener("blur", closeRows);
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.hash);

    if (!target) {
      return;
    }

    event.preventDefault();
    setActiveNav(target.id);
    closeMobileMenu();
    scrollToSection(target);
    window.history.pushState(null, "", link.hash);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }

  updateStory();
  updateActiveNav();
  setupCounterObserver();
  setupAboutCounterObserver();
});

function scheduleScrollUpdate() {
  if (state.ticking) {
    return;
  }

  state.ticking = true;
  window.requestAnimationFrame(() => {
    updateStory();
    updateActiveNav();
    state.ticking = false;
  });
}

window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
scrollContainer?.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
