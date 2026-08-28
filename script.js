var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.from(".logo", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1
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


gsap.from('.home-img', {
     scale: 0,
    duration: 3,
    rotate: 120,
    scrollTrigger: {
        trigger: ".img-item",
        scroller: "body",
    }
})
gsap.from('.skill-card', {

    scale: 0,
    stagger:0.2,
    duration: 3,
    scrollTrigger: {
        trigger: ".skill-card",
        scroller: "body",
        start: "top 80%",
        end:"top 28%",
        scrub: 1,
        
    }
})
gsap.from('.education-card', {

    scale: 0,
    delay:2,
    duration: 6,
    scrollTrigger: {
        trigger: ".education-card",
        scroller: "body",
        start: "top 80%",
        
        end:"top 50%",
        scrub: 1,
        
    }
})
gsap.from('.achievements-grid  .achievement-card', {
    scale: 0,
    stagger: 0.2,
    duration:1,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".achievements-grid .achievement-card ",
        scroller: "body",
        start: "top 80%",
        end:"top 50%",
        scrub: 1,
        
    }
})
gsap.from("#achievements .education-card", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#achievements .education-card",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        
    }
});


