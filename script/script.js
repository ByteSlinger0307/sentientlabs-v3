function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotiveAnimation();


function textSwapAnimation() {
    var touchElem1 = document.getElementsByClassName("nav-mid-elem-1")[0]
    var touchElem2 = document.getElementsByClassName("nav-mid-elem-2")[0]
    var touchElem3 = document.getElementsByClassName("nav-mid-elem-3")[0]
    var upLetter1 = document.querySelectorAll("#nav-elem-up1")
    var downLetter1 = document.querySelectorAll("#nav-elem-down1")
    var upLetter2 = document.querySelectorAll("#nav-elem-up2")
    var downLetter2 = document.querySelectorAll("#nav-elem-down2")
    var upLetter3 = document.querySelectorAll("#nav-elem-up3")
    var downLetter3 = document.querySelectorAll("#nav-elem-down3")

    touchElem1.addEventListener("mouseenter", () => {
        gsap.to(upLetter1, {
            transform: "translateY(-100%)",
            opacity: 0,
            duration: 0.2
        })
        gsap.to(downLetter1, {
            transform: "translateY(-100%)",
            opacity: 1,
            duration: 0.2
        })
    })

    touchElem1.addEventListener("mouseleave", () => {
        gsap.to(upLetter1, {
            transform: "translateY(0%)",
            opacity: 1,
            duration: 0.2
        })
        gsap.to(downLetter1, {
            transform: "translateY(0%)",
            opacity: 0,
            duration: 0.2
        })
    })

    touchElem2.addEventListener("mouseenter", () => {
        gsap.to(upLetter2, {
            transform: "translateY(-100%)",
            opacity: 0,
            duration: 0.2
        })
        gsap.to(downLetter2, {
            transform: "translateY(-100%)",
            opacity: 1,
            duration: 0.2
        })
    })

    touchElem2.addEventListener("mouseleave", () => {
        gsap.to(upLetter2, {
            transform: "translateY(0%)",
            opacity: 1,
            duration: 0.2
        })
        gsap.to(downLetter2, {
            transform: "translateY(0%)",
            opacity: 0,
            duration: 0.2
        })
    })

    touchElem3.addEventListener("mouseenter", () => {
        gsap.to(upLetter3, {
            transform: "translateY(-100%)",
            opacity: 0,
            duration: 0.2
        })
        gsap.to(downLetter3, {
            transform: "translateY(-100%)",
            opacity: 1,
            duration: 0.2
        })
    })

    touchElem3.addEventListener("mouseleave", () => {
        gsap.to(upLetter3, {
            transform: "translateY(0%)",
            opacity: 1,
            duration: 0.2
        })
        gsap.to(downLetter3, {
            transform: "translateY(0%)",
            opacity: 0,
            duration: 0.2
        })
    })
}

function sideMenuRes() {
    let menuOpen = false; // Declare outside to retain state

    function sideMenuRes() {
      const btnPress = document.getElementsByClassName("nav-right")[0];
      const menuContainer = document.getElementsByClassName("nav-slider")[0];
      const bars = document.querySelectorAll(".nav-bars");
    
      gsap.set(menuContainer, { x: "100%" });
    
      btnPress.addEventListener("click", () => {
        const isDesktop = window.innerWidth >= 1024;
    
        if (!menuOpen) {
          gsap.to(menuContainer, { x: 0, duration: 0.8 });
    
          gsap.to(bars[0], { rotate: 45, y: 3, duration: 0.3 });
          gsap.to(bars[1], { rotate: -45, y: -3, duration: 0.3 });
    
          gsap.to(btnPress, { x: isDesktop ? 150 : 0 });
        } else {
          gsap.to(menuContainer, { x: "100%", duration: 0.4 });
    
          gsap.to(bars[0], { rotate: 0, y: 0, duration: 0.3 });
          gsap.to(bars[1], { rotate: 0, y: 0, duration: 0.3 });
    
          gsap.to(btnPress, { x: 0 });
        }
    
        menuOpen = !menuOpen; // Toggle state
      });
    }
sideMenuRes();
}

function hoverAnimPage2 (){
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })

        elem.addEventListener("mouseleave", function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
        })
        elem.addEventListener("mousemove", function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-10,
                y:dets.y-elem.getBoundingClientRect().y-65,
            })
        })
    })

}

function iconAnim (){
    var outlineCir = document.querySelectorAll(".card-upper-outline-circle");
    var imgDiv = document.querySelectorAll(".card-upper-img-div")

    outlineCir.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        gsap.to(el, {
        backgroundColor: "#6850eb",
        duration: 0.1
        });
    });
    el.addEventListener("mouseleave", () => {
        gsap.to(el, {
        backgroundColor: "transparent",
        duration: 0.1
        });
    });
    });
}

function implemAnim() {
    var outlineCirc = document.querySelectorAll(".card-upper-outline-circle");
    var heading = document.querySelectorAll(".upper-div h1");
    var middle = document.querySelectorAll(".middle-div p");
    var lower = document.querySelectorAll(".lower-div");
    var btn = document.querySelectorAll(".div-btn");
    var title = document.querySelectorAll(".card-title");
    var para = document.querySelectorAll(".card-para");

    // Media query check for mobile/tablet devices
    var isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
        // Desktop animations
        gsap.from(heading, {
            y: "10vh",
            scrollTrigger: {
                trigger: ".upper-div",
                scroller: "#main",
                start: "top 50%",
                end: "top 10%",
                // markers: true,
                // scrub: true
            },
        });

        gsap.from(middle, {
            y: "10vh",
            scrollTrigger: {
                trigger: ".upper-div",
                scroller: "#main",
                start: "top 50%",
                end: "top 10%",
            },
        });

        gsap.from(outlineCirc, {
            scale: 0,
            scrollTrigger: {
                trigger: ".upper-div",
                scroller: "#main",
                start: "top 50%",
                end: "top 10%",
            },
        });

        gsap.from(title, {
            y: "10vh",
            scale: 0,
            scrollTrigger: {
                trigger: ".upper-div",
                scroller: "#main",
                start: "top 50%",
                end: "top 10%",
            },
        });

        gsap.from(para, {
            y: "10vh",
            scale: 0,
            scrollTrigger: {
                trigger: ".upper-div",
                scroller: "#main",
                start: "top 50%",
                end: "top 10%",
            },
        });

    } else {
        // Mobile/Tablet animations
        gsap.from(heading, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".middle-div",
                scroller: "#main",
                start: "top 80%",
                end: "top 30%",
                // markers: true,
                // scrub: true
            }
        });

        gsap.from(middle, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".middle-div",
                scroller: "#main",
                start: "top 80%",
                end: "top 30%",
            }
        });

        gsap.from(outlineCirc, {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".middle-div",
                scroller: "#main",
                start: "top 80%",
                end: "top 30%",
            }
        });

        gsap.from(title, {
            y: 50,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".middle-div",
                scroller: "#main",
                start: "top 80%",
                end: "top 30%",
            }
        });

        gsap.from(para, {
            y: 50,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".middle-div",
                scroller: "#main",
                start: "top 80%",
                end: "top 30%",
            }
        });
    }
}





document.addEventListener("DOMContentLoaded", () => {
    textSwapAnimation();
    iconAnim();
    hoverAnimPage2();
    sideMenuRes();
    implemAnim();
});