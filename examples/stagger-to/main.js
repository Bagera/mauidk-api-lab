const boxes = document.querySelectorAll(".box");

TweenMax.staggerTo(
  boxes,
  0.5,
  {
    ease: Strong.easeInOut,
    scale: 0.2,
    y: 40,
    repeat: -1,
    yoyo: true,
    stagger: 0.25,
    repeatDelay: 1
  },
  0
);
