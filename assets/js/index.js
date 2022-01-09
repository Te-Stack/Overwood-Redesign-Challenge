const toggleButton = document.querySelector('#menu_toggle');
const mobileNav = document.querySelector('.mobile-nav');
const productSubMenu = document.querySelector('.mobile-sub-menu');
const arrow = document.querySelector('.arrow'); 

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


mybutton.addEventListener('click',function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  

toggleButton.addEventListener('click', function() {

    toggleButton.classList.toggle('active');
    mobileNav.classList.toggle('active');

})

arrow.addEventListener('click', () => {
  arrow.classList.toggle('active');
  productSubMenu.classList.toggle('active');


})




