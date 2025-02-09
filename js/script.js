//    ========================basculer la barre de navigation de l'icône===========================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// lien actif de la section de défilement
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //    ========================barre de navigation collante===========================
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //    ===========supprimer l'icône à bascule et la barre de navigation en cliquant sur la barre de navigation(scroller)===============
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// faire défiler et révéler
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(" .home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  " .home-img, .services-container,.portfolio-box, .contact form",
  { origin: "bottom" }
);

ScrollReveal().reveal(" .home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(" .home-content p,.about-content", { origin: "right" });

// =======================================typed js=================================

let typed = new Typed(".multiple-text", {
  strings: ["Developpeur web."],

  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 80,
  loop: true,
});
