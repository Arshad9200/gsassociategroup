// Simple typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".typewriter");
  if (text) {
    let txt = text.innerHTML;
    text.innerHTML = "";
    let i = 0;
    function type() {
      if (i < txt.length) {
        text.innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }
    type();
  }
});


// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById("hamburger");
//   const navLinks = document.getElementById("nav-links");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("show");
//   });
// });


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
