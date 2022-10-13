function diffLogo(img) 
{
    if (confirm("Are you sure you want to switch logos?")) {
        if(img.src.match("images/squirrel-logo.png")) img.src = "images/logo-removebg-preview.png";
        else img.src = "images/squirrel-logo.png";
    } else {
        console.log("#SAD");
      }

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}