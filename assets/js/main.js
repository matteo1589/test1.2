

gsap.registerPlugin(DrawSVGPlugin, TextPlugin, EasePack, MorphSVGPlugin, ScrollTrigger);

var tl = gsap.timeline();

gsap.fromTo('#zoom-in', 10,{
    scale: 1
    
},
{ 
    delay:1.5,
    scale: 5.5,
    ease: "bounce",
});



gsap.fromTo('.l-t', 0.8,{    
    left:"0%"
},{    
    delay: 2,
    left:"-50%",
});

gsap.fromTo('.l-b', 0.8,{
    left:"50%"
},{
    delay: 2,
    left:"100%"
});

tl.set(document.body, {
    overflow: 'hidden'
})
    .to('.loader', { 
        // delay: 2,   
        duration: 3.5,
        backgroundColor: "#b5b7bb"    
    })
    .set(document.body,{
        delay: 5.5,   
        duration: 8.5,
        overflow: 'auto'
    })

gsap.to('ul li', {
    duration: 3,
    y: 20,
    x: 30,
    ease:'bounce.in',
    stagger: 0.7,
    repeat:-1,
    yoyo: true
    
});
gsap.to('ul li:last-child', {
    duration: 3,
    x: 40,
    y: 20,
    opacity: 0.5,
    ease:'bounce.in',
    stagger: 0.7
});


const introTl = gsap.timeline();

introTl


    
    .to(".text", {
        duration:2.2,
        text: {
            value: "All Saints Highertown",
            newClass: "text1",
            delimeter: " "
        },
        delay: 3,
        ease:"power2.out"
    })


    .from(
        '#draw0, #draw1, #draw2, #draw3',{
            drawSVG: 0,
            duration:2.5,
            delay: 0.5,
    })
    .to(
        '#draw1', {
            delay:2,
            morphSVG: '#speech1',
            duration: .5,
            stroke: "#fff"
        }
    )
    .to(
        '#draw2', {
            morphSVG: '#speech2',
            duration: .5,
            stroke: "#fff"
        }
    )
    .to(
        '#draw3', {
            morphSVG: '#speech3',
            duration: .5,
            stroke: "#fff"
        }
    );
////////////////////
// SCROLL TRIGGER //
////////////////////

function init(){


    const parallaxTl1 = gsap.timeline({
        ease: 'power2',
        scrollTrigger: {
            trigger: '.bcg-reveal',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "play reverse play reverse",
            markers: true,
            scrub: false
        }
    });
    
    parallaxTl1
        .from('.bcg-reveal h1', { 
            fontSize: 0
        },{
            duration: 5,
            fontSize: 80,
            delay: 2,
            autoAlpha: 0
            
        })

        .from('.bcg-reveal', {opacity:1, duration: 2}, 0)
        .from('.content-wrapper', {duration: 2, autoAlpha: 0}, 0.4)
        .from('.wedding', {opacity:0, duration: 2, y: '-30%'}, 0)
        
        

    const parallaxTl2 = gsap.timeline({
        ease: 'power2',
        scrollTrigger: {
            trigger: '.bcg-reveal1',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "play reverse play reverse",
            markers: true,
            scrub: false
        }
    });
    
    parallaxTl2
        .from('.bcg-reveal1', {opacity:1, duration: 2}, 0)
        .from('.content-wrapper1', {duration: 2, autoAlpha: 0}, 0.4)
        .from('.baptism', {opacity:0, duration: 2, y: '-30%'}, 0)
        
        

    const parallaxTl3 = gsap.timeline({
        ease: 'power2',
        scrollTrigger: {
            trigger: '.bcg-reveal2',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "play reverse play reverse",
            markers: true,
            scrub: false
        }
    });
    
    parallaxTl3
    .from('.bcg-reveal2', {opacity:1, duration: 2}, 0)
        .from('.content-wrapper2', {duration: 2, autoAlpha: 0}, 0.4)
        .from('.funeral', {opacity:0, duration: 2, y: '-30%'}, 0)
        
      
}

window.addEventListener('load', function() {
    init();
});
    
    

//  var morphTl = gsap.timeline({delay: 1.5})

// MorphSVGPlugin.convertToPath('#draw1, #draw2, #draw3');

// morphTl.from('#draw1', 0.3, {morphSVG:'#speech1'})
//         .from('#draw2', 0.3, {morphSVG:'#speech2'})
//         .from('#draw3', 0.3, {morphSVG:'#speech3'})
