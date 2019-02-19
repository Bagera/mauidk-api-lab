const duration = 5;

// Graphics to animate
const path = document.querySelector(".greensock-text");
const track = document.querySelector(".track-completion");

// The real thing being animated
const animation = {
  length: 0,
  pathLength: path.getTotalLength()
};

// Tween control buttons
const reverse = document.querySelector(".reverse");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");

// Easing
const easingButtons = document.querySelectorAll(".easing button");
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
let easing = easingFuncs[0];

const update = () => {
  path.style.strokeDasharray = `${animation.length} ${animation.pathLength}`;
  track.style.width = `${(animation.length / animation.pathLength) * 100}%`;
};

let tween = TweenMax.to(animation, duration, {
  length: animation.pathLength,
  onUpdate: update,
  ease: easing
});
tween.pause();
update();

play.addEventListener("click", () => {
  tween.play();
});
pause.addEventListener("click", () => {
  tween.pause();
});
reverse.addEventListener("click", () => {
  tween.reverse();
});

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
