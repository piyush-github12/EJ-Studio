function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

init();


var loader = gsap.timeline();

loader
  .to("#kuch-bhi h5", {
    y: -76,
    delay: 0.5,
    duration: 1.7,
  })
  .to("#text-anime", {
    y: -50,
    rotateX: -90,
    duration: 0.8,
    opacity: 0,
  })
  .to("#loader1", {
    height: 0,
    duration: 0.8,
    delay: 0.5,
  })
  .to(
    "#loader2",
    {
      height: 0,
      duration: 0.8,
    },
    "-=0.3"
  )
  .to(
    "#loader3",
    {
      height: 0,
      duration: 0.8,
    },
    "-=1"
  )
  .to(
    "#loader4",
    {
      height: 0,
      duration: 0.8,
    },
    "-=0.7"
  )
  .to("#loader", {
    top: "-100vh",
    duration: 0.1,
  });


gsap.from("#page1 h1",{
  y:150,
  opacity:0,
  delay:5,
  duration:1,
})
gsap.from("#page1 h5", {
  y: 50,
  opacity: 0,
  delay: 5,
  duration: 2,
});
gsap.from("#page1 h2", {
  y: 150,
  opacity: 0,
  delay: 6,
  duration: 1,
});


var navh4 = document.querySelector("#nav h4")
var navmenu = document.querySelector("#nav #menu")
var cursor = document.querySelector("#cursor")

navh4.addEventListener("mouseenter",function(){
  
  cursor.style.width = "6vw";
  cursor.style.height = "6vw";

  cursor.style.left = "-3vw";
  cursor.style.top = "-3vw";


})

navh4.addEventListener("mouseleave", function () {
 cursor.style.width = "3vw";
 cursor.style.height = "3vw";
    cursor.style.left = "-1.5vw";
   cursor.style.top = "-1.5vw";
});

navmenu.addEventListener("mouseenter", function () {
 cursor.style.width = "6vw";
 cursor.style.height = "6vw";
    cursor.style.left = "-3vw";
   cursor.style.top = "-3vw";

});

navmenu.addEventListener("mouseleave", function () {
 cursor.style.width = "3vw";
 cursor.style.height = "3vw";
    cursor.style.left = "-1.5vw";
   cursor.style.top = "-1.5vw";
});


gsap.to("#page2 #img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2 ",
    scroller: "#main",
    // markers:true,
    start: "top 0%",
    end: "top -50%",
    scrub: true,
    pin: true,
  },
});

document.addEventListener("mousemove", function (dets) {
  document.querySelector(
    "#cursor"
  ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
});

gsap.from("#page3 #elem h1", {
  rotate: 10,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page3 #elem h1",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 10%",
    // scrub:true
  },
});
gsap.from("#page3 #toptext h4", {
  opacity: 0,
  y: 10,
  scrollTrigger: {
    trigger: "#page3 #toptext h4",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 10%",
    // scrub:true
  },
});

var page4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4 ",
    scroller: "#main",
    pin: true,
    scrub:true
  },
});

page4
  .from(
    "#page4 h1",
    {
      scale: "2",
      
    },
    "page4text"
  );
  page4.from(
    "#page4 h2",
    {
      scale:"2",
      transform: `translate(0%,100%)`

     },
    "page4text"
  );

 page4.to("#page5",{
  y:"-100vh",
 
},"page4text")


gsap.from("#page5img1 img",{
  height:"900px",
  scrollTrigger:{
    trigger:"#page5img1 img",
    scroller:"#main",
    start:"top 130%",
    duration:0.5,
    // markers:true,

  }
})
gsap.from("#page5img2 img", {
  height: "900px",
  scrollTrigger: {
    trigger: "#page5img2 img",
    scroller: "#main",
    start: "top 110%",
    duration: 0.5,
    // markers: true,
  },
});
gsap.from("#page5img3 img", {
  height: "900px",
  scrollTrigger: {
    trigger: "#page5img3 img",
    scroller: "#main",
    start: "top 120%",
    duration: 0.5,
    // markers: true,
  },
});






var page6tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    pin: true,
    scrub: true,
  },
})

page6tl.to("#page6 h1",{
  scale:4,
  filter:`blur(20px)`,
  opacity:0,
 
},"page6")
page6tl.to(
  "#page6 p",
  {
    opacity: 1,
  },
  "page6"
);
page6tl.to(
  "#page6 h6",
  {
    opacity: 1,
  },
  "page6"
);




var flag = 0;
document.querySelector("#menu").addEventListener("click", function () {
  if (flag == 0) {
    
    document.querySelector("#nav #line").style.position = `absolute`;
    document.querySelector("#nav .line1").style.rotate = "-45deg";
    document.querySelector("#nav .line2").style.rotate = "45deg";
    document.querySelector("#undermenu").style.top = 0;
    flag = 1;
  } else {
    document.querySelector("#nav #line").style.position = `initial`;
     document.querySelector("#nav .line1").style.rotate = "0deg";
     document.querySelector("#nav .line2").style.rotate = "0deg";
    document.querySelector("#undermenu").style.top = "-100%";
    flag = 0;
  }
});



gsap.from("#page7box1 h1", {
  y: "10vw",
  stagger: 0.2,

  scrollTrigger: {
    trigger: "#page7box1 h1",
    scroller: "#main",
    start: "top 80%",
    end: "top 30%",
    // scrub:true,
  },
});



var boxht = document.querySelectorAll(".boxht")

boxht.forEach(function(e){


  e.addEventListener("mouseenter", function () {
    cursor.style.backgroundColor = "white";
    cursor.innerHTML = "more";


    cursor.style.width = "6vw";
    cursor.style.height = "6vw";
    cursor.style.left = "-3vw";
    cursor.style.top = "-3vw";
  });

  e.addEventListener("mouseleave", function () {
    cursor.style.backgroundColor = "transparent";
    cursor.innerHTML = "";
    cursor.style.width = "3vw";

    cursor.style.height = "3vw";
    cursor.style.left = "-1.5vw";
    cursor.style.top = "-1.5vw";
  });
})
