    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Smooth scrolling behavior
            });
        });
    }); 
    document.querySelectorAll('.cta-button a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Smooth scrolling behavior
            });
        });
    }); 