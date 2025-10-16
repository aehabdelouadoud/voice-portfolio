// Soft scroll fade-in for each section
const sections = document.querySelectorAll(".fade-in");

const revealSections = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// ----------------------------
// EmailJS Contact Form Handling
// ----------------------------
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
      }, (error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  });
}
