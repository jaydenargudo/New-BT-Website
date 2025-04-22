/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', function() {
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const verticalMenu = document.getElementById('verticalCollapseMenu');
        const menuButton = document.querySelector('[data-bs-target="#verticalCollapseMenu"]');
        
        // If the menu is open and click is outside the menu and not on the menu button
        if (verticalMenu.classList.contains('show') && 
            !verticalMenu.contains(event.target) && 
            event.target !== menuButton && 
            !menuButton.contains(event.target)) {
            
            // Create a new bootstrap collapse instance and hide it
            const bsCollapse = bootstrap.Collapse.getInstance(verticalMenu);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });

    // Ensure menu stays visible when scrolling
    const navHeight = document.getElementById('mainNav').offsetHeight;
    
    // Update the vertical menu position as you scroll
    function updateMenuPosition() {
        const verticalMenuContainer = document.querySelector('.vertical-menu-container');
        verticalMenuContainer.style.top = navHeight + 'px';
        verticalMenuContainer.style.maxHeight = `calc(100vh - ${navHeight}px)`;
    }
    
    // Initial position update
    updateMenuPosition();
    
    // Update position on scroll (useful if navbar height changes on scroll)
    window.addEventListener('scroll', updateMenuPosition);
    window.addEventListener('resize', updateMenuPosition);
});