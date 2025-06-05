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

// Navbar scroll behavior
let lastScrollTop = 0;
const navbar = document.getElementById('mainNavbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;

    if (scrollTop === 0) {
        navbar.classList.remove('navbar-scrolled');
    } else if (scrollTop > lastScrollTop) {
        // scrolling down
        navbar.style.top = "-80px"; // hide navbar
    } else {
        // scrolling up
        navbar.style.top = "0";
        navbar.classList.add('navbar-scrolled');
    }

    lastScrollTop = scrollTop;
});
document.addEventListener('DOMContentLoaded', function () {
  const searchToggle = document.getElementById('searchToggle');
  const searchForm = document.getElementById('searchForm');
  let searchOpen = false;

  searchToggle.addEventListener('click', () => {
    if (!searchOpen) {
      searchForm.style.display = 'flex';
      gsap.fromTo(searchForm, { width: 0, opacity: 0 }, { width: 200, opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(searchForm, { width: 0, opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => {
        searchForm.style.display = 'none';
      }});
    }
    searchOpen = !searchOpen;
  });

  const menuDropdown = document.getElementById('menuDropdown');
  const dropdown = document.getElementById('customDropdown');
  const closeDropdown = document.getElementById('closeDropdown');
  let isDropdownVisible = false;

  menuDropdown.addEventListener('click', function (e) {
    e.preventDefault();
    if (!isDropdownVisible) {
      dropdown.style.display = 'flex';
      gsap.fromTo(dropdown, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    } else {
      gsap.to(dropdown, { opacity: 0, duration: 0.5, onComplete: () => dropdown.style.display = 'none' });
    }
    isDropdownVisible = !isDropdownVisible;
  });

  closeDropdown.addEventListener('click', () => {
    if (isDropdownVisible) {
      gsap.to(dropdown, { opacity: 0, duration: 0.5, onComplete: () => dropdown.style.display = 'none' });
      isDropdownVisible = false;
    }
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !menuDropdown.contains(e.target)) {
      if (isDropdownVisible) {
        gsap.to(dropdown, { opacity: 0, duration: 0.5, onComplete: () => dropdown.style.display = 'none' });
        isDropdownVisible = false;
      }
    }
  });

  const contentMap = {
    academics: {
      title: 'Academics →',
      description: 'Learning at Bergen Tech can happen for every type of learner, at any phase of life.',
      links: ['Degree programs →', 'Professional and Lifelong Learning', 'BT Online', 'BT Schools →']
    },
    campus: {
      title: 'Campus →',
      description: 'Explore student life, activities, clubs, and housing on campus.',
      links: ['Clubs', 'Athletics', 'Dining & Housing']
    },
    focus: {
      title: 'In Focus →',
      description: 'Spotlights on BT achievements, innovation, and community impact.',
      links: ['Spotlights', 'Events', 'Student Stories']
    },
    faculty: {
      title: 'Faculty →',
      description: 'Learn more about our amazing faculty that helps our students prosper and grow.',
      links: [
      { text: "Staff List", url: "{% url 'staff' %}"}
      ]
    },
    about: {
      title: { text: 'About →'},
      description: 'Get to know Bergen Tech’s mission, history, and values.',
      links: [
        { text: 'About Us', url: "{% url 'about' %}" }
      ]
    },
    news: {
      title: 'News →',
      description: 'Catch up on the latest happenings at Bergen Tech.',
      links: ['Announcements', 'BT Times', 'Student Blogs']
    }
  };

  const detailPanel = document.getElementById('dropdownDetails');
  const headerLinks = document.querySelectorAll('.dropdown-link');

  headerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      headerLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const section = link.getAttribute('data-section');
      const content = contentMap[section];

      if (content) {
        let html = `<h5><strong>`;
        if (typeof content.title === 'object') {
          html += `<a href="${content.title.url}" class="title-link">${content.title.text}</a>`;
        } else {
          html += content.title;
        }
        html += `</strong></h5>`;
        html += `<p>${content.description}</p>`;
        html += `<ul class="sub-links">`;
        html += (content.links || []).map(link =>
          typeof link === 'string' ? `<li>${link}</li>` : `<li><a href="${link.url}">${link.text}</a></li>`
        ).join('');
        html += `</ul>`;
        detailPanel.innerHTML = html;

        const lines = detailPanel.querySelectorAll('p, .sub-links li');
        gsap.fromTo(lines, { opacity: 0, y: 10 }, {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    });
  });
});