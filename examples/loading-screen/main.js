const boxes = document.querySelectorAll(".box");

TweenMax.staggerTo(
  boxes,
  0.5,
  {
    ease: Power1.easeInOut,
    scale: 0.2,
    opacity:0.3,
    y: 40,
    repeat: -1,
    yoyo: false,
    stagger: 0.25,
    repeatDelay: 0.99
  },
  0
);


TweenMax.to("H1", 2, {text:"Loading", ease:Linear.easeNone, repeat: -1, opacity:0.3,});
