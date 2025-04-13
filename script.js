// Force scroll to top on reload
window.addEventListener("load", function () {
  // Check if there's a hash in the URL
  if (window.location.hash) {
    // Replace the current URL without the hash
    history.replaceState(null, null, window.location.pathname);
    // Force scroll to top
    window.scrollTo(0, 0);
  }
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});

if (!savedTheme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

// Navigation behavior
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navbarLinks = document.querySelector(".navbar-links");
  const navLinks = document.querySelectorAll(".navbar-links a");

  // Scroll effect on navbar
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Hamburger toggle
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navbarLinks.classList.toggle("active");
  });

  // Custom scroll and remove hash from URL
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, null, " ");
      }
      hamburger.classList.remove("active");
      navbarLinks.classList.remove("active");
    });
  });
});

// Projects scroll logic
document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.querySelector(".projects-container");
  const prevButton = document.querySelector(".nav-prev");
  const nextButton = document.querySelector(".nav-next");
  const currentPageElement = document.querySelector(".current-page");
  const totalPagesElement = document.querySelector(".total-pages");
  const projectCards = document.querySelectorAll(".project-card");
  const totalProjects = projectCards.length;
  totalPagesElement.textContent = totalProjects;
  let currentIndex = 0;

  function scrollToProject(index) {
    if (index < 0) index = 0;
    if (index >= totalProjects) index = totalProjects - 1;
    currentIndex = index;
    currentPageElement.textContent = currentIndex + 1;
    projectCards[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  prevButton.addEventListener("click", () => scrollToProject(currentIndex - 1));
  nextButton.addEventListener("click", () => scrollToProject(currentIndex + 1));

  let isScrolling;
  projectsContainer.addEventListener("scroll", () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      const containerRect = projectsContainer.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      projectCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      currentIndex = closestIndex;
      currentPageElement.textContent = currentIndex + 1;
    }, 100);
  });

  //scrollToProject(0);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") scrollToProject(currentIndex - 1);
    else if (e.key === "ArrowRight") scrollToProject(currentIndex + 1);
  });

  let touchStartX = 0;
  let touchEndX = 0;

  projectsContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  projectsContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold)
      scrollToProject(currentIndex + 1);
    else if (touchEndX > touchStartX + swipeThreshold)
      scrollToProject(currentIndex - 1);
  });
});


window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, 10);
});
