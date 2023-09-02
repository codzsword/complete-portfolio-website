// Toggle visibility of navbar when button clicked

const navToggle = document.querySelector("");
navToggle.addEventListener("click", function () {
  document.querySelector("").classList.toggle("");
});

// Tab interface for different section of resume

const resumeHeading = document.querySelector("");
const resumeItems = document.querySelectorAll("");
const resumeTabs = document.querySelectorAll("");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeItems.forEach((item) => {
      item.classList.remove("");
    });
    event.target.parentElement.classList.add("");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("");
  }
};

// Navbar header sticky while scrolling

function stickyNav() {
  var headerHeight = document.querySelector("").offsetHeight / 2;
  var navbar = document.querySelector("");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("");
  }
}

window.addEventListener("scroll", stickyNav);

// Active link on page scroll

const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(
      `header .portfolio-navbar a[href*="#${id}"]`
    );
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active-link");
    } else {
      currentNavLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollTracker);

// Dark and Light Theme Toggle

function isLight() {
  return localStorage.getItem("dark-mode");
}

function toggleRootClass() {
  document.querySelector("body").classList.toggle("dark");
}

function toggleLocalStorageItem() {
  if (isLight()) {
    localStorage.removeItem("dark-mode");
  } else {
    localStorage.setItem("dark-mode", "set");
  }
}

if (isLight()) {
  toggleRootClass();
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorageItem();
  toggleRootClass();
});

// Scroll to top

const limit = 200;
const scrollTopBtn = document.querySelector("#scroll-top-btn");
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  scrollTopBtn.classList.toggle("visible", window.scrollY >= limit);
});

// Scroll reveal

const sr = ScrollReveal({
  // reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".about-intro, .project-slider", {
  origin: "left",
});
sr.reveal(
  ".resume-heading,.contact-info,.footer-contact,.testimonial-heading",
  {
    origin: "bottom",
  }
);
sr.reveal(".service-row", {
  origin: "bottom",
  interval: 800,
});
sr.reveal(".resume-body", {
  origin: "top",
});
