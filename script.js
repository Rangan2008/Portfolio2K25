document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.querySelector('.loader');
  
  // Hide loader after page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1000);
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.querySelector('.hamburger');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Animate skill progress bars
  const progressBars = document.querySelectorAll('.progress-bar');
  
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level + '%';
    });
  };

  // Initialize GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.animated-text', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
  });

  gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
  });

  gsap.from('.cta-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.9
  });

  // Section animations
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  });

  // About section specific animations
  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  // Skills progress bars animation
  ScrollTrigger.create({
    trigger: ".skills",
    start: "top 80%",
    onEnter: animateProgressBars,
    once: true
  });

  // Project cards animation
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // Timeline items animation
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      duration: 0.8,
      delay: i * 0.2,
      ease: 'power3.out'
    });
  });

  // Contact cards animation
  gsap.utils.toArray('.contact-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.2,
      ease: 'power3.out'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check local storage or system preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    darkModeToggle.classList.add('active');
  }
  
  // Toggle dark mode
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('active');
    
    // Save to local storage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbot = document.getElementById('chatbot');
  const closeChatbot = document.querySelector('.close-chatbot');

  chatbotToggle.addEventListener('click', function () {
    chatbot.classList.toggle('active');
  });

  closeChatbot.addEventListener('click', function () {
    chatbot.classList.remove('active');
  });

  const chatInput = document.getElementById('chat-input');
  const sendButton = document.getElementById('sendButton');
  const chatBody = document.getElementById('chatBody');

  const responses = {
    "hi": "Hey! 👋 I'm RanganBot. Ask me about my projects, skills, academics, or how to contact me!",
    "about": "I'm Rangan Das, a BCA student passionate about Web Dev, Blockchain & AI.",
    "skills": "I work with HTML, CSS, JavaScript, Python, Java, C++, SQL, GitHub, and Blockchain (Solidity & XDC).",
    "projects": "Some of my notable projects: Mindpal (mental wellness), DeFi Lending Platform, Amazon Clone, and more.",
    "mindpal": "Mindpal is a wellness platform integrating mindfulness tools and a chatbot-based support system.",
    "defi": "The DeFi platform uses XDC, Solidity, and smart contracts to enable decentralized lending.",
    "amazon": "My Amazon Clone is a responsive e-commerce landing page built with HTML and CSS.",
    "contact": "Email: ranganiembca2026@gmail.com | Phone: +91 9433903038 | LinkedIn: https://www.linkedin.com/in/rangandas2008/",
    "github": "Check out my code here: https://github.com/Rangan2008",
    "linkedin": "Here's my LinkedIn: https://www.linkedin.com/in/rangandas2008/",
    "academics": "I'm studying BCA at IEM Kolkata (CGPA 9.18). My previous education includes 12th (70.5%) and 10th (80.5%).",
    "achievements": "Achievements include 3rd in 3MST at eHaCON 2025, SWOC 2024 contributor, and multiple hackathon participations.",
  };

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, 'user-message');
      chatInput.value = '';

      setTimeout(() => {
        const reply = getBotReply(message.toLowerCase());
        addMessage(reply, 'bot-message');
      }, 700);
    }
  }

  function getBotReply(msg) {
    for (let key in responses) {
      if (msg.includes(key)) {
        return responses[key];
      }
    }
    return "I'm not sure how to answer that. Try asking about my skills, projects, or how to contact me!";
  }

  function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = text;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  sendButton.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});
