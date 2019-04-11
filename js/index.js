const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Navigation
const navAnchors = document.querySelectorAll('nav a');
const navText = siteContent.nav;

navAnchors[0].textContent = siteContent.nav['nav-item-1'];
navAnchors[1].textContent = siteContent.nav['nav-item-2'];
navAnchors[2].textContent = siteContent.nav['nav-item-3'];
navAnchors[3].textContent = siteContent.nav['nav-item-4'];
navAnchors[4].textContent = siteContent.nav['nav-item-5'];
navAnchors[5].textContent = siteContent.nav['nav-item-6'];


// CTA
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];

const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent.cta['img-src'];

// Top content
const topContentH4s = document.querySelectorAll('.top-content h4');
topContentH4s[0].textContent = siteContent['main-content']['features-h4'];
topContentH4s[1].textContent = siteContent['main-content']['about-h4'];

const topContentPs = document.querySelectorAll('.top-content p');
topContentPs[0].textContent = siteContent['main-content']['features-content'];
topContentPs[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
