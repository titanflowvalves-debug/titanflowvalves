// Navbar scroll effect
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Counter animation
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

document.querySelectorAll("a.scroll-down").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const brandScroll = document.getElementById("brandScroll");
let scrollPosition = 0;
const scrollStep = brandScroll.clientWidth; // Scroll by visible width
const maxScroll = brandScroll.scrollWidth - brandScroll.clientWidth;

function autoScrollBrands() {
  if (scrollPosition >= maxScroll) {
    scrollPosition = 0;
  } else {
    scrollPosition += scrollStep;
  }
  brandScroll.style.transform = `translateX(-${scrollPosition}px)`;
}

setInterval(autoScrollBrands, 3000); // Slide every 3 seconds


// about code is here 
// Example: Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#blogs .card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});

