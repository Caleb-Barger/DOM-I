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

const navStrings = Object.values(siteContent["nav"]);

const aTags = document.querySelectorAll("nav a");
for (let i = 0; i < aTags.length; i++) {
  aTags[i].textContent = navStrings[i];
}

const domIsAwesome = document.querySelector(".cta-text h1");
domIsAwesome.textContent = siteContent["cta"]["h1"];
const getStartedButton = document.querySelector(".cta-text button");
getStartedButton.textContent = siteContent["cta"]["button"];
const ctaImage = document.querySelector(".cta img");
ctaImage.src = siteContent["cta"]["img-src"]; 

const mainContentHeaders = document.querySelectorAll(".main-content h4");
const featuresHeader = mainContentHeaders[0];
featuresHeader.textContent = siteContent["main-content"]["features-h4"];
const aboutHeader = mainContentHeaders[1];
aboutHeader.textContent = siteContent["main-content"]["about-h4"];
const servicesHeader = mainContentHeaders[2];
servicesHeader.textContent = siteContent["main-content"]["services-h4"];
const productHeader = mainContentHeaders[3];
productHeader.textContent = siteContent["main-content"]["product-h4"];
const visionHeader = mainContentHeaders[4];
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

const mainContentTexts = document.querySelectorAll(".main-content p");
const featuresText = mainContentTexts[0];
featuresText.textContent = siteContent["main-content"]["features-content"];
const aboutText = mainContentTexts[1];
aboutText.textContent = siteContent["main-content"]["about-content"];
const servicesText = mainContentTexts[2];
servicesText.textContent = siteContent["main-content"]["services-content"];
const productText = mainContentTexts[3];
productText.textContent = siteContent["main-content"]["product-content"];
const visionText = mainContentTexts[4];
visionText.textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];


const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];
const contactStuff = document.querySelectorAll(".contact p");
const contactAddr = contactStuff[0];
contactAddr.textContent = siteContent["contact"]["address"];
const contactNum = contactStuff[1];
contactNum.textContent = siteContent["contact"]["phone"];
const contactMail = contactStuff[2];
contactMail.textContent = siteContent["contact"]["email"];

const copyrightStatement = document.querySelector("footer p");
copyrightStatement.textContent = siteContent["footer"]["copyright"];

