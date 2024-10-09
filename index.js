//Hamburger Navbar Menu Mobile
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//Smooth Scrolling
const links = document.querySelectorAll(".nav-menu ul li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

//Project Filtering
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const selectedCategory = this.getAttribute("data-category");

    const projects = document.querySelectorAll(".project-card");

    projects.forEach((project) => {
      const projectCategory = project.querySelector("h6").textContent;

      if (selectedCategory === "All" || projectCategory === selectedCategory) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});

//Form Validation
function formValidation(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 4) {
    alert("Name must be at least 4 characters long.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (subject.length < 4) {
    alert("Please enter a subject.");
    return false;
  }

  if (message.length < 10) {
    alert("Please enter a message.");
    return false;
  }

  alert("Form submitted successfully!");
  event.target.form.submit();
}

//Modal
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLiveDemo = document.getElementById("modal-live-demo");
const modalRepo = document.getElementById("modal-repo");

document
  .querySelector(".projects-grid")
  .addEventListener("click", function (e) {
    const projectCard = e.target.closest(".project-card");

    if (projectCard) {
      const projectImage = projectCard.querySelector("img").src;
      const projectTitle = projectCard.querySelector("h3").textContent;
      const projectDescription = projectCard.querySelector("p").textContent;
      const projectLiveDemo = projectCard.querySelectorAll("a")[0].href;
      const projectRepo = projectCard.querySelectorAll("a")[1].href;

      modalImage.src = projectImage;
      modalTitle.textContent = projectTitle;
      modalDescription.textContent = projectDescription;
      modalLiveDemo.href = projectLiveDemo;
      modalRepo.href = projectRepo;

      modal.style.display = "flex";
    }
  });

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//Scroll to top
window.addEventListener("scroll", function () {
  const scrollToTopButton = document.querySelector(".scrolltotop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.querySelector(".scrolltotop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Dynamic Year in Footer
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").innerHTML = new Date().getFullYear();
});


