let lastScrollTop = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // scrolling down
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.opacity = ".9";
    document.getElementById("navbar").style.zIndex = "1000";
    document.getElementById("logo").style.width = "25%";

  } else {
    // scrolling up
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("logo").style.width = "auto";

  }
}