// animation settings
const duration = 5;
let tween;

// Save references to graphics to animate
const path = document.querySelector(".greensock-text");
const track = document.querySelector(".track-completion");
const percent = document.querySelector(".track-percentage");

// The real thing being animated
const animation = {
  length: 0,
  pathLength: path.getTotalLength()
};

// Save references to tween control buttons
const reverse = document.querySelector(".reverse");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");
const scrubber = document.querySelector(".scrubber");

// Easing
const easingButtons = document.querySelectorAll(".easing button");
// Array of different easing functions to choose from
const easingFuncs = [
  Linear.easeNone,
  Strong.easeInOut,
  SteppedEase.config(12),
  Bounce.easeOut,
  Elastic.easeOut,
  RoughEase.ease.config({
    template: Linear.easeNone,
    strength: 0.5,
    points: 20,
    taper: "both",
    randomize: false,
    clamp: true
  })
];
// set first easing func as default
let easing = easingFuncs[0];

// function run during tween to update ui
const update = () => {
  const completion = (animation.length / animation.pathLength) * 100;
  // Update position and sizes of graphics
  path.style.strokeDasharray = `${animation.length} ${animation.pathLength}`;
  track.style.width = `${completion}%`;
  percent.innerHTML = `${Math.round(tween.progress() * 100)}%`;
  scrubber.value = tween.progress() * 100;

  // Set opacity to 0 to avoid visible dot when the animation is at its start position
  if (animation.length > 0) {
    path.style.opacity = 1;
  } else {
    path.style.opacity = 0;
  }
};

window.onload = () => {
  // Init tween
  tween = TweenMax.to(animation, duration, {
    length: animation.pathLength,
    onUpdate: update,
    ease: easing,
    paused: true
  });
  // update ui
  update();

  // Bind control buttons
  play.addEventListener("click", () => {
    tween.play();
  });
  pause.addEventListener("click", () => {
    tween.pause();
  });
  reverse.addEventListener("click", () => {
    tween.reverse();
  });
  scrubber.addEventListener("input", e => {
    tween.pause();
    tween.progress(e.target.value / 100);
  });

  // Bind easing buttons
  easingButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
      tween.updateTo({ ease: easingFuncs[i] });
      easingButtons.forEach((button, j) => {
        if (i === j) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    });
  });
};
