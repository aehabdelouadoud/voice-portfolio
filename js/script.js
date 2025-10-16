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
