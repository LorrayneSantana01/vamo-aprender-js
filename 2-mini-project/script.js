var timeline = gsap.timeline()

timeline.from("#nav h3", {
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
    stagger: 0.3
})

timeline.from("#main h1", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4
})

timeline.from("img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})