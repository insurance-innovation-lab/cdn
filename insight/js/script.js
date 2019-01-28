
// dropdown

var mobileMenuOpen = document.getElementsByClassName("mobileMenu_icon__open");
    mobileMenuClose = document.getElementsByClassName("mobileMenu_icon__close");
    mobileMenu = document.getElementsByClassName("navigation");

function toggleMobileMenu () {
  if(mobileMenuOpen[0].classList.contains("mobileMenu_icon__show")) {
    mobileMenuOpen[0].classList.remove("mobileMenu_icon__show");
    mobileMenuOpen[0].classList.add("mobileMenu_icon__hide");
    mobileMenuClose[0].classList.remove("mobileMenu_icon__hide");
    mobileMenuClose[0].classList.add("mobileMenu_icon__show");
  }
  else {
    mobileMenuClose[0].classList.remove("mobileMenu_icon__show");
    mobileMenuClose[0].classList.add("mobileMenu_icon__hide");
    mobileMenuOpen[0].classList.remove("mobileMenu_icon__hide");
    mobileMenuOpen[0].classList.add("mobileMenu_icon__show");
  }
  mobileMenu[0].classList.toggle("show");
}
