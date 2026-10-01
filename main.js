const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

const smoothLinks = document.querySelectorAll('.smooth-link');
smoothLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
        
        if(navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
        }
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projects.forEach(project => {
            if(filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

const messageInput = document.getElementById('message');
const charCountDisplay = document.getElementById('char-count');

messageInput.addEventListener('input', () => {
    const currentLength = messageInput.value.length;
    charCountDisplay.textContent = currentLength;
});

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const msgError = document.getElementById('msg-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if(nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if(messageInput.value.trim() === '') {
        msgError.style.display = 'block';
        isValid = false;
    } else {
        msgError.style.display = 'none';
    }

    if(isValid) {
        alert('Gửi tin nhắn thành công!');
        form.reset();
        charCountDisplay.textContent = '0';
    }
});

const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});

const yearSpan = document.getElementById('current-year');
yearSpan.textContent = new Date().getFullYear();