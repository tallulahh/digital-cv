document.addEventListener('DOMContentLoaded', function() {
  $(document).scrollTop(0);
  initialAnim.play();
  gsap.set("canvas", {
    backgroundColor: "rgb(153, 255, 153)"
  });
  ScrollTrigger.create({
    trigger: ".hello",
    start: "top top",
    end: "+=1000px",
    // markers: true,
    scrub: true,
    animation: colorToBlue
  });
  ScrollTrigger.create({
    trigger: ".about",
    start: "top top+=200",
    end: "+=800px",
    // markers: true,
    scrub: true,
    animation: colorToPurple
  });
  ScrollTrigger.create({
    trigger: ".skills",
    start: "top top+=200px",
    end: "+=800px",
    // markers: true,
    scrub: true,
    animation: colorToPink
  });
  ScrollTrigger.create({
    trigger: ".education",
    start: "top top+=200px",
    end: "+=1000px",
    // markers: true,
    scrub: true,
    animation: colorToGreen
  });
  ScrollTrigger.create({
    trigger: ".projects",
    start: "top+=500px top+=200px",
    end: "+=1000px",
    // markers: true,
    scrub: true,
    animation: colorToYellow
  });

});

// GLOBAL VARIABLES
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

gsap.registerPlugin(ScrollTrigger);

// UNIVERSAL RESIZE - CHECK SCREEN DIMENSIONS AND CANVAS RESIZE
function checkWindowSize() {
  var isTabletPortrait = window.matchMedia('(min-width: 767px) and (max-width: 960px) and (orientation: portrait)');
  var isTabletLandscape = window.matchMedia('(min-width: 767px) and (max-width: 960px) and (orientation: landscape)');
  var isPhoneLandscape = window.matchMedia('(min-width: 320px) and (max-width: 767px) and (orientation: landscape)');
  var isPhonePortrait = window.matchMedia('(min-width: 320px) and (max-width: 767px) and (orientation: portrait)');
  var scrollable = window.matchMedia('(min-width: 960px)');
  if (isPhonePortrait.matches) {
    console.log("mobile portrait");
    $(".rotate").css("display", "none");
  } else if (isPhoneLandscape.matches) {
    console.log("mobile landscape");
    $(".rotate").css("display", "block");
  } else if (isTabletPortrait.matches) {
    console.log("tablet portrait");
    $("body").addClass("tablet");
    $(".rotate").css("display", "none");
  } else if (isTabletLandscape.matches) {
    console.log("tablet landscape");
    $(".rotate").css("display", "block");
  } else if (scrollable.matches) {
    console.log("desktop");
    gsap.from(".about .content p", {
      scrollTrigger: {
        trigger: ".about .content",
        start: "top+=300 80%",
        end: "+=500",
        scrub: 1,
        anticipatePin: 1,
        // markers: true,
        pin: ".about .heading",
        toggleActions: "play none reverse reset"
      },
      stagger: 0.3,
      duration: 0.3
    });
    gsap.from(".education .content", {
      scrollTrigger: {
        trigger: ".education .content",
        start: "top+=300 80%",
        end: "+=900",
        scrub: 1,
        anticipatePin: 1,
        // markers: true,
        pin: ".education .heading",
        toggleActions: "play none reverse reset"
      },
      stagger: 0.3,
      duration: 0.5
    });
    gsap.from(".projects .content p", {
      scrollTrigger: {
        trigger: ".projects .content",
        start: "top+=200px 80%",
        end: "+=200",
        scrub: 1,
        // markers: true,
        anticipatePin: 1,
        pin: ".projects .heading",
        toggleActions: "play none reverse reset"
      },
      y: 100,
      stagger: 0.3,
      opacity: 0,
      duration: 1
    });
    window.addEventListener("scroll", function() {
      bulletScroll();
    })
  }
}
var onresize = function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
}
$(window).on("load resize", function() {
  onresize();
  checkWindowSize();
});

//Loading page
var initialAnim = gsap.timeline({
  paused: true
});
initialAnim.to(".loading", {
    y: -800,
    duration: 2
  })
  .from(".side-nav", {
    x: -100,
    duration: .5,
  })
  .to(".loading", {
    autoAlpha: 0
  });

// Hamburger Menu
var burgerAnim = gsap.timeline({
  paused: true
});
gsap.set(".hamburger-list", {
  autoAlpha: 0.01,
  x: "-100vw"
});
burgerAnim.to(".scroll-content", {
  autoAlpha: 0.01,
  duration: 0
});
burgerAnim.to(".hamburger-list", {
  autoAlpha: 1,
  duration: 0.5,
  x: 0
}, "-0.5");
$(".hamburger-menu").on("click",
  function() {
    $(".hamburger-menu").toggleClass("open");
    if ($(".hamburger-menu").hasClass("open") === true) {
      burgerAnim.play();
    } else if ($(".hamburger-menu").hasClass("open") === false) {
      burgerAnim.reverse();
    }
  });

// UNIVERSAL COLOR TRANSITIONS
const colorToBlue = gsap.fromTo(canvas, {
  backgroundColor: "rgb(153, 255, 153)"
}, {
  backgroundColor: "rgb(153,153,255)"
});
const colorToPurple = gsap.fromTo(canvas, {
  backgroundColor: "rgb(153,153,255)"
}, {
  backgroundColor: "rgb(162, 101, 219)"
});
const colorToPink = gsap.fromTo(canvas, {
  backgroundColor: "rgb(162, 101, 219)"
}, {
  backgroundColor: "rgb(255, 153, 204)"
});
const colorToGreen = gsap.fromTo(canvas, {
  backgroundColor: "rgb(255, 153, 204)"
}, {
  backgroundColor: "rgb(153, 255, 153)"
});
const colorToYellow = gsap.fromTo(canvas, {
  backgroundColor: "rgb(153, 255, 153)"
}, {
  backgroundColor: "rgb(255, 255, 102)"
});

// About Section
gsap.from(".about .char", {
  scrollTrigger: {
    trigger: ".about",
    start: "top-=50 80%",
    end: "+=100",
    scrub: 1,
    // markers: true,
    toggleActions: "play none reverse reset"
  },
  rotation: 180,
  transformOrigin: "50% 100%",
  opacity: 0,
  duration: 0.5
});

// Skills Section
gsap.from(".skills .char", {
  scrollTrigger: {
    trigger: ".skills",
    start: "-=50 80%",
    end: "+=100px",
    // markers: true,
    scrub: 1,
    toggleActions: "play none reverse reset"
  },
  rotation: 180,
  transformOrigin: "50% 100%",
  opacity: 0,
  duration: 0.3
});
gsap.from(".skills .wrapper li", {
  scrollTrigger: {
    trigger: ".skills .wrapper",
    start: "100px 80%",
    end: "+=300",
    scrub: 1,
    // markers: true,
    toggleActions: "play none reverse reset"
  },
  y: 50,
  stagger: 0.3,
  opacity: 0,
  duration: 1.5
});

// Education Section
gsap.from(".education .char", {
  scrollTrigger: {
    trigger: ".education",
    start: "-=50 80%",
    end: "+=100px",
    // markers: true,
    scrub: 1,
    toggleActions: "play none reverse none"
  },
  rotation: 180,
  transformOrigin: "50% 100%",
  opacity: 0,
  // stagger: 0.05,
  duration: 0.3
});
gsap.from(".education .content h2", {
  scrollTrigger: {
    trigger: ".education .content",
    start: "80px 80%",
    end: "+=300",
    scrub: 1,
    // markers: true,
    toggleActions: "play none reverse reset"
  },
  y: 100,
  stagger: 0.3,
  opacity: 0,
  duration: 1
});
gsap.from(".education .content p", {
  scrollTrigger: {
    trigger: ".education .content",
    start: "100px 80%",
    end: "+=300",
    scrub: 1,
    // markers: true,
    toggleActions: "play none reverse reset"
  },
  y: 100,
  stagger: 0.3,
  opacity: 0,
  duration: 1
});

// Projects Sections
gsap.from(".projects .char", {
  scrollTrigger: {
    trigger: ".projects",
    start: "-=50 80%",
    end: "+=100px",

    pinSpacing: false,
    // markers: true,
    scrub: 1,
    toggleActions: "play none reverse reset"
  },
  rotation: 180,
  transformOrigin: "50% 100%",
  opacity: 0,
  duration: 0.3
});
gsap.from(".project-list li", {
  scrollTrigger: {
    trigger: ".project-list",
    start: "100px 80%",
    end: "+=400",
    scrub: 1,
    // markers: true,
    toggleActions: "play none reverse reset"
  },
  y: 100,
  stagger: 0.3,
  opacity: 0,
  duration: 1
});

//Contact Section
gsap.from(".contact .main", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top-=200px 80%",
    end: "+=600px",
    pin: ".additional .heading",
    // markers: true,
    scrub: 1,
    toggleActions: "play none reverse none"
  },
  opacity: 0,
  duration: 0.5
});
var email = gsap.timeline({
  scrollTrigger: {
    trigger: ".email",
    start: "top 80%",
    end: "+=300px",
    // markers: true,
    scrub: 1,
    toggleActions: "play none reverse none"
  }
});
email.to("#email", {
  textFillColor: "black",
  duration: 0.5
});
email.to("#email", {
  textFillColor: "transparent",
  duration: 0.5
});

//Skills Sections
// gsap.set('.wrapper',{xPercent:-50,yPercent:-50});
var boxWidth = 600,
  totalWidth = boxWidth * 6, //  * n of boxes
  no01 = document.querySelectorAll("#n01 li"),
  no02 = document.querySelectorAll("#n02 li"),
  no03 = document.querySelectorAll("#n03 li"),
  no04 = document.querySelectorAll("#n04 li"),
  dirFromLeft = "+=" + totalWidth,
  dirFromRight = "-=" + totalWidth;
var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction) {
  gsap.set(which, {
    x: function(i) {
      return i * boxWidth;
    }
  });
  var action = gsap.timeline()
    .to(which, {
      x: direction,
      modifiers: {
        x: x => mod(parseFloat(x)) + "px"
      },
      duration: time,
      ease: 'none',
      repeat: -1,
    });
  return action
}
var master = gsap.timeline()
  .add(marquee(no01, 50, dirFromLeft), 1)
  .add(marquee(no02, 50, dirFromRight), 1)
  .add(marquee(no03, 50, dirFromLeft), 1)
  .add(marquee(no04, 50, dirFromRight), 1)

//Check if is in viewport
$.fn.isInViewport = function() {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

// Language Selection/Hover
function changeLanguage(language) {
  var currentLanguage = $(".language-active p").html();
  if(currentLanguage === language){
    console.log("do nothing");
  } else {
    $(".language-options").toggleClass("show");
    $(".language-active p").html(language);
    switch (language) {
      case 'ES':
        $(".lang-en, .lang-ca").hide();
        $(".lang-es, span.lang-es").toggle();
        break;
      case 'EN':
        $(".lang-es, .lang-ca").hide();
        $(".lang-en, span.lang-en").toggle();
        break;
      case 'CA':
        $(".lang-es, .lang-en").hide();
        $(".lang-ca, span.lang-ca").toggle();
        break;
      default:
    }
  }
}
$(".language-select i").on("mouseover mouseout", function() {
  // $(".cursor").css("opacity", "0");
  $(".language-select").toggleClass("hover");
});
$(".language-select i").on("click", function() {
  // $(".cursor").css("opacity", "1");
  $(".language-options").toggleClass("show");
})
$(".language-options p").on("click", function() {
  let language = $(this).html();
  changeLanguage(language);
});

//Side Menu
function bulletScroll() {
  if ($(".about").isInViewport()) {
    bulletAnim("#about-bullet", ".about");
    console.log("About");
  } else if ($(".skills").isInViewport()) {
    bulletAnim("#background-bullet", ".skills");
    console.log("Background");
  } else if ($(".projects").isInViewport()) {
    bulletAnim("#projects-bullet", ".projects");
    console.log("Projects");
  } else if ($(".contact").isInViewport()) {
    bulletAnim("#contact-bullet", ".contact");
    console.log("Contact");
  }
}

function bulletAnim(bullet, trigger) {
  gsap.to(bullet, {
    width: "25px",
    borderRadius: "10px",
    scrollTrigger: {
      trigger: trigger,
      start: "top 50%",
      toggleActions: "play none none reverse"
    }
  });
}

function scrollPage(target) {
  let location;
  if (target === 'About' || target === 'Sobre mí' || target === 'Sobre mi') {
    location = ".about";
  } else if (target === 'Background' || target === 'Formación' || target === 'Formació') {
    location = ".skills";
  } else if (target === 'Projects' || target === 'Proyectos' || target === 'Projectes') {
    location = ".projects";
  } else if (target === 'Contact' || target === 'Contacto' || target === 'Contacte') {
    location = ".contact";
  }
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: location,
      offsetY: 100
    }
  });
}
const navAnimation = gsap.timeline({
  paused: true
});
navAnimation.to(".nav-item p", {
  opacity: 1,
  duration: 0.3,
  delay: 0.2
});
$(".side-nav ul li div.nav-item").on("mouseover mouseout", function() {
  $(this).toggleClass("active");
  if ($(this).hasClass("active") === true) {
    navAnimation.play();
  } else {
    navAnimation.reverse();
  }
});
$(".side-nav ul li div p, .hamburger-link").on("click", function() {
  if ($(".hamburger-menu").hasClass("open") === true) {
    $(".hamburger-menu").toggleClass("open");
    burgerAnim.reverse();
  }
  let target = $(this).html();
  scrollPage(target);
});

var timelines = [];

// Fill text colour on hover
$(".skills .skill-list ul li, #email").on("mouseover", function() {
  let target = $(this);
  timelines[target] = gsap.timeline({
    paused: true
  });
  var textHover = timelines[target];
  textHover.to(target, {
    textFillColor: "black"
  });
  timelines[target].play();
  return prev = $(this);
});
$(".skills .skill-list ul li, #email").on("mouseleave", function() {
  let target = prev;
  timelines[target].reverse();
});

// Projects Section
$('.overlay-container').addClass('js-ready');
gsap.set('.overlay-container, .image-overlay', {
  autoAlpha: .01
});
$(".overlay-container, .image-title").hover(
  function() {
    var id = $(this).parent().parent().attr('id');
    if (!timelines[id]) {
      timelines[id] = gsap.timeline({
        duration: 0.2
      });
      var t = timelines[id];
      t.to('.' + id + ' .image-title', {
          textFillColor: "black"
        })
        .to('.' + id + ' .overlay-container', {
          autoAlpha: 1
        })
        .to('.' + id + ' .image-overlay', {
          autoAlpha: 1
        }, '-=.75');
    }
    timelines[id].play();
  },
  function() {
    timelines[$(this).parent().parent().attr('id')].reverse();
  }
);
let item;
let progress = document.querySelector(".progress");
$(".image p").click(
  function() {
    if ($(this).parents("div.sailing").length) {
      item = $(this);
      window.open("https://www.streets-florist.co.uk");
    } else if ($(this).parents("div.portfolio").length) {
      window.open("https://www.tallulahcarlisle.com");
    } else if ($(this).parents("div.arcade").length) {
      window.open("https://tallulahh.github.io/arcade/index.html");
    }
  }
);
