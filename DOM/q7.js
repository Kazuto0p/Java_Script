window.addEventListener("scroll", function () {
    var parallax = document.querySelector(".parallax");
    var scrollTop = window.scrollY;  // Get scroll position using window.scrollY
  
    parallax.style.transform = "translate(-50%, -50%) translateY(" + scrollTop * 0.5 + "px)";
  });
  