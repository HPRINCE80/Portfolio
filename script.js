gsap.registerPlugin(ScrollTrigger);

/* ── Navbar entrance ── */
var tl = gsap.timeline();

tl.from(".logo", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
.from(".nav-links li", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
}, "-=0.5")
.from(".hamburger", {
    opacity: 0,
    scale: 0,
    duration: 0.5
}, "-=0.3");

/* ── Home image ── */
gsap.from(".home-img", {
    scale: 0,
    rotate: 120,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".home-img",
        
        
    }
});


/* ── Education (degrees) ── */
gsap.from("#education .education-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#education .education-grid",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
    }
});


/* ── Certifications (achievements section ke andar) ── */
gsap.from("#achievements .education-grid .education-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#achievements .education-grid",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
    }
});

/* ── IMPORTANT: images load hone ke baad triggers recalculate karo ── */
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);
});


gsap.from(".skill-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
        end:"top 30%",
        scrub:1,
        toggleActions: "play none none reverse",
    }
});

gsap.from(".achievements-grid .achievement-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".achievements-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
        scrub:1
    }
});

gsap.from(".about-text  ", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 0.7,

    // ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".about-text  ",
        start:"top 90%",
        end:"top 60%",
        
        toggleActions: "play none none reverse",
        scrub:1
    }
});




gsap.from("#achievements .project-tags span", {
    scale: 0,
    opacity: 0,
    stagger: 0.08,
    duration: 0.5,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: "#achievements .project-tags",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});



gsap.from(".section-title", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".section-title",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".about-stats div", {
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".about-stats",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});


gsap.from("#about .about-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: "#about .about-cards",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});



gsap.from("#projects .project-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: "#projects .projects-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".contact-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});


function breakTheText() {
    var h1 = document.querySelector(".home-info h1");
    var h1Text = h1.textContent;
    
    var splitText = h1Text.split("");
    var halfvalue = splitText.length/2;
    var chars = "";

    splitText.forEach(function (elem,idx) {
        
        // space ko span mein wrap karne se collapse ho sakta hai, non-breaking space use karo
        chars += elem === " " ? " " : `<span>${elem}</span>`;
    });

    h1.innerHTML = chars;
}
breakTheText();

gsap.from(".home-info h1 span", {

    y: 50,
    opacity: 0,
    // duration: ,
    delay: 0.5,
    stagger: 0.3,
});



function breakTeText() {
    var h1 = document.querySelector(".home-info h1.bh");
    var h1Text = h1.textContent;

    var splitText = h1Text.split("");
    var halfValue = splitText.length / 2;
    var chars = "";

    splitText.forEach(function (elem, idx) {
        var className = idx < halfValue ? "a" : "b";
        chars += elem === " " ? " " : `<span class="${className}">${elem}</span>`;
    });

    h1.innerHTML = chars;
}

breakTeText();

gsap.from(".home-info h1.bh span.a, .home-info h1.bh span.b", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.3,
});