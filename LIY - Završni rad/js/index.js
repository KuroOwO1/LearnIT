// mobile navigation menu, when clicking the 3 bars, check if the menu is displayed or not to toggle it on and off.
function mobileMenu(){

    const hamburger = document.getElementById("links");

    if(hamburger.style.display === "block"){
        hamburger.style.display = "none";
    }
    else{
        hamburger.style.display = "block";
    }
}



