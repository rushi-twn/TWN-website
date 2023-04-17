

const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/1ee8f271b9.js";
document.body.appendChild(script);

// Font Awesome KIT


/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => {
    const {
        clientX,
        clientY
    } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {
        duration: 3500,
        fill: "forwards"
    });
}


const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 1500, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "scrollCard":
		return "<i class='fa-solid fa-arrow-up-right'></i>";
    case "services":
		return "<i class='fa-regular fa-arrows-left-right'></i>";
        //return "fa-regular fa-arrows-left-right";
    case "video":
		return "<i class='fa-regular fa-arrows-up-down'></i>";
    case "buttonLink":
      return "";
    case "link":
		return "<i class='fa-regular fa-arrows-up-down'></i>";
	case "readmore":
		return "Read More";
	case "viewwork":
		return "View Work";
	case "viewmore":
		return "View More";
    default:
      return ""; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  //const icon = document.getElementById("trailer-icon");
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    //icon.className = getTrailerClass(interactable.dataset.type);
	$("#trailer-icon").html(getTrailerClass(interactable.dataset.type));
  }
}

// 
// 
// 

// (function init() {
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#bg"),
//     smooth: true
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#bg", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },

//     pinType: document.querySelector("#bg").style.transform ? "transform" : "initial"
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('#bg'),
//     smooth: true
//   });
// })();

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   duration: 2,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: '.aboutTWN',
//     scroller: '#cardsMain',
//     markers: true,
//     start: 'top top',
//   },
//   onStart: function () {
//     $(document).ready(function () {
//       $('.fadeTxt').textillate({ in: { effect: 'fadeIn' } });
//     })
//   }
// });

// gsap.from('.fadeTxt', {
  
// });





// gsap.to('.fadeTxt', {
//   scrollTrigger: {
//     trigger: '#aboutTWN',
//     scroller: '#bg',
//     // markers: true,
//     start: 'top 35%',
//   },
//   opacity: 1,
//   duration:1,
//   onStart: function () {
//     $(document).ready(function () {
//       $('.fadeTxt').textillate({ in: { effect: 'fadeIn' } });
//     })
//   },
// })

// Setup
// const scroller = document.querySelector('body');
// const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true });


//////////////////
// Parallax images
//////////////////
// $('.parallax-img').each(function (index, elem) {
//     var gap = 50;
//     if ($(elem).attr('data-move')) {
//       gap = parseInt($(elem).data('move'));
//     }
//     var $wrapper = $(elem).parent();
//     var heightWrapper = $wrapper.outerHeight();
//     var windowH = $(window).height();
  
//     gsap.set(elem, { top: gap * -1, height: 'calc(100% + ' + (gap) + 'px)' });
//     gsap.to(elem, 
//        { duration: 1, 
//         y: gap, 
//         ease: 'none',
//         scrollTrigger: {
//           trigger: $wrapper,
//           // markers:true,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 0
//         }
//        }
//     );
// });



// function setupSplits() {
//   var tlSplitBurrowing = gsap.timeline(), 
//       SplitBurrowing = new SplitText(".fadeTxt", {type:"words,chars"}), 
//       chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


//   tlSplitBurrowing.from(chars, {
//     duration: 0.8,
//     opacity:0,
//     y:10,
//     ease:"circ.out",
//     stagger: 0.02,
//     scrollTrigger: {
//       trigger: ".fadeTxt",
//       //markers:true,
//       start: "top 75%",
//       end: "bottom center",
//       scrub:1
//     }
//   }, "+=0");
// };


// ScrollTrigger.addEventListener("refresh", setupSplits);
// setupSplits();

// //////

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.serviceScrollBlock',
        //pin: true,
        scrub: 1,
        //markers: true,
        start: 'top bottom',
        end: 'bottom top'
        //   end: () => "+=" + (imageSection.scrollWidth - document.documentElement.clientWidth),
        //   invalidateOnRefresh: true
    }
})
timeline.from('.my-boxes', {
    xPercent: 500,
	duration: 10,
	delay: 0.5,
    ease: "power1.out"

});

let boxes = gsap.utils.toArray(".serviceCard");

gsap.to(boxes, {

    xPercent: -100 * (boxes.length - 1.7),
    ease: "none",
    scrollTrigger: {
        trigger: "#service",
        //pin: true,
        //markers: true,
        scrub: 5,
        // snap: 1 / (boxes.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
    }
});



/////////////////////////////////

