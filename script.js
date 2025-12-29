/**
 * Initialize Typing Effect and Page Logic
 * Updated for Ashwini Kumar's Portfolio
 */

$(function(){
    // 1. TYPING ANIMATION (Chirag Samal Style Logic with Ashwini's Info)
    $("#about-me").typed({
        strings: [
            "Project Manager @ Avalara Pune.",
            "Managing $10M+ Global Portfolios.",
            "Physique: 5'10\" | Fair Complexion | Born 1999.",
            "IIIT Naya Raipur Alumnus.",
            "Expert in AI-driven Enterprise Solutions.",
            "Son of an IAF Veteran."
        ],
        typeSpeed: 30, // Speed matches original reference
        backDelay: 1500, // Time before deleting the text
        loop: true, // Continuous loop
    });
});

/**
 * 2. SECTION SWITCHING LOGIC (Requirement: No scrolling between pages)
 * This function hides all sections and shows only the one clicked.
 */
function openPage(pageId) {
    // Hide every container with the class 'page-content' immediately
    // This ensures other pages do not appear on scrolling down
    $(".page-content").hide();
    
    // Show only the specific section requested (home, education, family, or contact)
    // Uses 'animated fadeIn' for a smooth transition effect
    $("#" + pageId).show().addClass('animated fadeIn');
    
    // Requirement: Mobile Screen Compatibility
    // Automatically collapses the hamburger menu after a user clicks a link
    if ($(".navbar-toggle").is(":visible")) {
        $(".navbar-collapse").collapse('hide');
    }
}
