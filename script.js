// Navigation toggle for mobile
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

// Scroll to section when clicking on nav links
const scrollToSection = () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      // Close mobile menu if open
      const nav = document.querySelector(".nav-links");
      const burger = document.querySelector(".burger");

      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
      }
    });
  });
};

// Navbar scroll effect
const navbarScroll = () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.padding = "15px 5%";
      navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.padding = "20px 5%";
      navbar.style.boxShadow = "none";
    }
  });
};

// Form submission
const handleFormSubmission = () => {
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the data to a server
      console.log("Form submitted:", { name, email, message });

      // Reset form
      form.reset();

      // Show success message (you could create a more sophisticated notification)
      alert("Message sent successfully!");
    });
  }
};

// Initialize all functions
const init = () => {
  navSlide();
  scrollToSection();
  navbarScroll();
  handleFormSubmission();
};

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);

// Initialize AOS Animation Library
AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: 100,
  delay: 100,
});

// DOM Elements
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const backToTopBtn = document.querySelector(".back-to-top");
const burgerMenu = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".nav-links");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectTiles = document.querySelectorAll(".project-tile");
const form = document.getElementById("form");
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  // Navbar shrink on scroll
  if (window.scrollY > 100) {
    navbar.style.padding = "0.8rem 0";
    navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.padding = "1.2rem 0";
    navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.05)";
  }

  // Back to top button visibility
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }

  // Active nav link based on scroll position
  const sections = document.querySelectorAll("section");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Mobile Navigation Toggle
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("toggle");
  navLinksContainer.classList.toggle("nav-active");

  // Animate Links
  const navLinks = document.querySelectorAll(".nav-links li");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinksContainer.classList.contains("nav-active")) {
      burgerMenu.classList.remove("toggle");
      navLinksContainer.classList.remove("nav-active");
    }
  });
});

// Project Filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    projectTiles.forEach((tile) => {
      if (
        filterValue === "all" ||
        tile.getAttribute("data-category") === filterValue
      ) {
        tile.style.display = "block";

        // Re-trigger AOS animation
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      } else {
        tile.style.display = "none";
      }
    });
  });
});

// Form Submission
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the data to a server
    console.log("Form submitted:", { name, email, subject, message });

    // Show success message (you could create a more sophisticated notification)
    alert("Message sent successfully!");

    // Reset form
    form.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Initialize any interactive elements when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set initial active nav link
  const currentSection = window.location.hash || "#welcome-section";
  document
    .querySelector(`a[href="${currentSection}"]`)
    ?.classList.add("active");

  // Refresh AOS for better animations
  setTimeout(() => {
    AOS.refresh();
  }, 500);
});
