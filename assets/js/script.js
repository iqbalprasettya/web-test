// nav shrink
window.onscroll = function() {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
    document.getElementById("navbar").style.backgroundColor = "#fff"
    document.getElementById("navbar").style.boxShadow ="0 .5rem 1rem rgba(0,0,0,.15)"
  } else {
    d
    document.getElementById("navbar").style.backgroundColor = "#fff"
    document.getElementById("navbar").style.boxShadow ="none"
  }
}
// end nav shrink

//HIDE Element

// end HIDE Element