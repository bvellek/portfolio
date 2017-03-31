var navLinks = document.querySelector("nav");

navLinks.addEventListener('click', scroll)

function scroll(e) {
  e.preventDefault();
  var scrollTarget = document.querySelector(e.target.hash);
  scrollTarget.scrollIntoView({block: "start", behavior: "smooth"});
}
