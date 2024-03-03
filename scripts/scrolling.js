let lastScrollTop = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.opacity = ".9";
    document.getElementById("navbar").style.zIndex = "1000";
    document.getElementById("navbar").style.minHeight = "15%";
    document.getElementById("logo").style.width = "20%";
    document.getElementById("logo").style.padding = "auto";
    document.getElementById("logo").style.margin = "0";
    document.getElementById("logo").getElementsByTagName('img')[0].src = "assets/landing-page-imgs/logo-footer.png";

  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("logo").style.margin = "10px";
    document.getElementById("logo").style.width = "auto";
    
    document.getElementById("logo").getElementsByTagName('img')[0].src = "./assets/landing-page-imgs/logo-light.png";
    

  }
}