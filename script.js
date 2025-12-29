$(function(){
    // Typing Effect for the About Page
    $("#about-me").typed({
        strings: [
            "Project Manager @ Avalara Pune.",
            "Managing $10M+ Global Portfolios.",
            "Physique: 5'10\" | Fair Complexion | Born 1999.",
            "IIIT Naya Raipur Alumnus.",
            "Expert in AI-driven Enterprise Solutions.",
            "Son of an IAF Veteran."
        ],
        typeSpeed: 30,
        backDelay: 1500,
        loop: true,
    });
});

/**
 * Switch between sections (About, Education, Family, Contact)
 * This ensures only ONE section is visible at a time.
 */
function openPage(pageId) {
    // 1. Hide every page container immediately to prevent scrolling
    $(".page-content").hide();
    
    // 2. Show only the specific section that was clicked with a Fade-In effect
    $("#" + pageId).show().addClass('animated fadeIn');
    
    // 3. Auto-close the mobile 'hamburger' menu after a selection is made
    if ($(".navbar-toggle").is(":visible")) {
        $(".navbar-collapse").collapse('hide');
    }
};
