document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for all anchor links
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Smoothly scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust this value to offset the fixed header
                behavior: 'smooth'
            });

            // Optionally, highlight the clicked link (interactive feedback)
            highlightActiveLink(this);
        }
    }

    // Function to highlight the active navigation link
    function highlightActiveLink(link) {
        links.forEach(l => l.classList.remove('active')); // Remove active class from all links
        link.classList.add('active'); // Add active class to the clicked link
    }

    // Highlight the section in view as you scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjust to match the offset of the header
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Remove and add 'active' class based on the section in view
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
