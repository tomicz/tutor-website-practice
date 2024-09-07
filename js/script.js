// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function(){
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

    toggleButton.addEventListener("click", function(){
        mobileMenu.classList.toggle("active");
    });
});

// Change navbar background on scroll
window.addEventListener("scroll", function(){
    const scrollY = this.window.scrollY; 
    const navbar = this.document.querySelector(".navbar");

    if(scrollY > 0){
        navbar.classList.add("navbar-scroll");
    }
    else{
        navbar.classList.remove("navbar-scroll");
    }
});