const revealElements = document.querySelectorAll('.fancy, .card');
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

const reveal = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) el.classList.add('show');
  });
};
window.addEventListener('scroll', reveal);
reveal();

// Typing animation with glow effect
const textEl = document.getElementById("subtitle");
const phrases = [
  "A Web Developer",
  "A 12th Grade Student",
  "A LifeLong Learner",
  "A Future Software Engineer",
  "A Future AI Engineer",
  "A 12th Grade Student",
  "A Master Builder!"
];

let i = 0, j = 0, isDeleting = false;
const typeSpeed = 100, deleteSpeed = 60, delay = 2000;

function type() {
  const fullPhrase = phrases[i];

  if (!isDeleting) {
    j++;
    if (j > fullPhrase.length) {
      isDeleting = true;
      setTimeout(type, delay);
      return;
    }
  } else {
    j--;
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      setTimeout(type, 500);
      return;
    }
  }

  textEl.textContent = fullPhrase.substring(0, j);
  setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
}

type();

// menu btn 
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");

  // Toggle icon between bars and close
  if (menuBtn.classList.contains("active")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

 // Close menu when any nav a tag is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuBtn.classList.remove("active");

      // Reset icon to bars
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
