// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Check if user has a saved preference
const savedTheme = localStorage.getItem("theme");

// Apply saved theme or default to light
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    // Switch to light theme
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    // Switch to dark theme
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});

// Check for system preference if no saved preference
if (!savedTheme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');
  const navLinks = document.querySelectorAll('.navbar-links a'); // Add this line

  // Scroll effect on navbar
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navbarLinks.classList.toggle('active');
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navbarLinks.classList.remove('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const projectsContainer = document.querySelector('.projects-container');
  const prevButton = document.querySelector('.nav-prev');
  const nextButton = document.querySelector('.nav-next');
  const currentPageElement = document.querySelector('.current-page');
  const totalPagesElement = document.querySelector('.total-pages');
  
  const projectCards = document.querySelectorAll('.project-card');
  const totalProjects = projectCards.length;
  
  totalPagesElement.textContent = totalProjects;
  
  let currentIndex = 0;
  
  // Function to scroll to specific project
  function scrollToProject(index) {
    if (index < 0) index = 0;
    if (index >= totalProjects) index = totalProjects - 1;
    
    currentIndex = index;
    
    // Update pagination
    currentPageElement.textContent = currentIndex + 1;
    
    // Scroll to the project
    projectCards[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  
  // Event listeners for navigation buttons
  prevButton.addEventListener('click', () => {
    scrollToProject(currentIndex - 1);
  });
  
  nextButton.addEventListener('click', () => {
    scrollToProject(currentIndex + 1);
  });
  
  // Handle scroll events to update current page
  let isScrolling;
  projectsContainer.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    
    isScrolling = setTimeout(() => {
      // Find which project is most visible
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
      
      // Update current index and pagination without scrolling
      currentIndex = closestIndex;
      currentPageElement.textContent = currentIndex + 1;
    }, 100);
  });
  
  // Initialize pagination
  scrollToProject(0);
  
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      scrollToProject(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      scrollToProject(currentIndex + 1);
    }
  });
  
  // Add touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  
  projectsContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  projectsContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left
      scrollToProject(currentIndex + 1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right
      scrollToProject(currentIndex - 1);
    }
  }
});