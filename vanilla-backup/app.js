// Reveal Animations on Scroll
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    // Trigger once on load
    reveal();

    // Blur Navbar on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger');
    const navLinksEl = document.getElementById('nav-links');
    if (hamburgerBtn && navLinksEl) {
      hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        navLinksEl.classList.toggle('open');
      });
      navLinksEl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburgerBtn.classList.remove('open');
          navLinksEl.classList.remove('open');
        });
      });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });

    // Booking Form → WhatsApp
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '⏳ Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          const name    = document.getElementById('f-name').value.trim();
          const phone   = document.getElementById('f-phone').value.trim();
          const device  = document.getElementById('f-device').value;
          const issue   = document.getElementById('f-issue').value.trim();
          const msg = `Hello Abule Tech! 👋\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Device:* ${device}\n*Problem:* ${issue}\n\nPlease help me fix my device. Thank you!`;
          
          window.open('https://wa.me/251954897133?text=' + encodeURIComponent(msg), '_blank');
          
          const successEl = document.getElementById('form-success');
          if (successEl) successEl.style.display = 'block';
          
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          bookingForm.reset();
        }, 1500);
      });
    }

    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    // Check local storage or system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if(moonIcon && sunIcon) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      }
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('theme', 'light');
          moonIcon.style.display = 'block';
          sunIcon.style.display = 'none';
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'block';
        }
      });
    }
