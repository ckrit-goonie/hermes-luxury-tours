const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const leadForm = document.querySelector("#leadForm");
const formMessage = document.querySelector("#formMessage");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Thank you. Your request has been captured in this demo. Connect the form to your email or CRM to receive live submissions.";
  leadForm.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
