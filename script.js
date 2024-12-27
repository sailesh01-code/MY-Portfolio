// Smooth Scroll for Navigation Links
document.querySelectorAll('nav .navigation a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Scroll Progress Indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.style.position = 'fixed';
scrollIndicator.style.top = '0';
scrollIndicator.style.left = '0';
scrollIndicator.style.height = '4px';
scrollIndicator.style.backgroundColor = '#ff4500';
scrollIndicator.style.zIndex = '1000';
document.body.appendChild(scrollIndicator);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollIndicator.style.width = `${scrollPercentage}%`;
});

// Contact Form Validation
const contactForm = document.querySelector('.right-contact form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = this.querySelector('input[placeholder="Your name"]').value.trim();
    const phone = this.querySelector('input[placeholder="Your phone"]').value.trim();
    const email = this.querySelector('input[placeholder="Your e-mail"]').value.trim();
    const message = this.querySelector('input[placeholder="Message"]').value.trim();

    if (!name || !phone || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Please enter a valid name.');
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});
