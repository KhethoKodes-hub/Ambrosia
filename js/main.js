// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav && nav.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Animate stats counting
    const stats = document.querySelectorAll('.stat__number');
    
    if (stats.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    const target = parseInt(stat.getAttribute('data-count'));
                    const duration = 2000;
                    const start = 0;
                    const increment = target / (duration / 16);
                    
                    let current = start;
                    const timer = setInterval(() => {
                        current += increment;
                        stat.textContent = Math.floor(current);
                        
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        }
                    }, 16);
                    
                    observer.unobserve(stat);
                }
            });
        }, { threshold: 0.5 });
        
        stats.forEach(stat => {
            observer.observe(stat);
        });
    }
    
    // Initialize animations with GSAP
    if (typeof gsap !== 'undefined') {
        // Hero section animation
        gsap.from('.hero__title, .hero__subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
        
        gsap.from('.hero__buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.4,
            ease: 'power3.out'
        });
        
        gsap.from('.hero__image', {
            duration: 1,
            x: 100,
            opacity: 0,
            delay: 0.2,
            ease: 'power3.out'
        });
        
        // Service cards animation
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services',
                start: 'top 80%'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
        
        // About section animation
        gsap.from('.about__content', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%'
            },
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.about__image', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%'
            },
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power3.out'
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact__form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Fixed header spacing adjustment
    function adjustHeaderSpacing() {
        const header = document.querySelector('.header');
        if (header) {
            const headerHeight = header.offsetHeight;
            document.body.style.paddingTop = headerHeight + 'px';
            
            // Adjust page-hero spacing if exists
            const pageHero = document.querySelector('.page-hero');
            if (pageHero) {
                pageHero.style.paddingTop = (headerHeight + 40) + 'px';
            }
        }
    }
    
    // Run on load and resize
    adjustHeaderSpacing();
    window.addEventListener('resize', adjustHeaderSpacing);
    
    // Your existing JavaScript...
});