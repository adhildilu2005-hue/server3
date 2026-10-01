// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


// Close mobile menu when a link is clicked

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


// =========================
// PACKAGE SELECTION
// =========================

const packageButtons = document.querySelectorAll(".package-btn");
const serviceSelect = document.getElementById("service");

packageButtons.forEach(button => {

  button.addEventListener("click", () => {

    const selectedPackage = button.dataset.package;

    // Set package in booking form
    serviceSelect.value = selectedPackage;

    // Scroll to booking section
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });

  });

});


// =========================
// BOOKING FORM
// =========================

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;
  const time = document.getElementById("time").value;

  if (!name || !date || !service || !time) {

    formMessage.style.color = "#b45c50";
    formMessage.textContent =
      "Please complete all required fields.";

    return;
  }

  formMessage.style.color = "#4d8064";

  formMessage.textContent =
    `Thank you, ${name}! Your ${service} appointment request for ${date} at ${time} has been received.`;

  bookingForm.reset();

});


// =========================
// SET MINIMUM DATE
// =========================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow =
      "0 5px 25px rgba(40, 60, 50, 0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

});

