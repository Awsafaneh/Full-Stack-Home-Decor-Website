// script.js

// Typing effect for headline
const text = "We are Premium Home Decor Experts";
const typingElement = document.getElementById("typing-text");
let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    typingElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 70); // typing speed in ms
  }
}

// Start typing after page load
window.addEventListener("DOMContentLoaded", typeText);

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Smooth scroll for anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Animate on Scroll (AOS) - optional setup
// If you include AOS library in your HTML, this will initialize it
if (typeof AOS !== "undefined") {
  AOS.init();
}

// Add focus effect to form inputs (optional enhancement)
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("ring-2", "ring-red-400");
  });
  input.addEventListener("blur", () => {
    input.classList.remove("ring-2", "ring-red-400");
  });
});

const backToTopBtn = document.getElementById('back-to-top');

// Show button when scrolling down 100px
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.add('opacity-100');
  } else {
    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.remove('opacity-100');
  }
});

// Smooth scroll to top on click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
