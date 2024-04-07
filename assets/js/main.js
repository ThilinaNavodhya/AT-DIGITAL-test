/* full page carousel */


  /////////////// navbar /////////////////

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar1");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    
    const scrollThreshold = 50;

    if (scrollPosition > scrollThreshold) {
      navbar.classList.add("scrolled"); 
    } else {
      navbar.classList.remove("scrolled"); 
    }
  });
});



