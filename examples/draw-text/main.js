// animation settings
const duration = 5;

// Graphics to animate
const path = document.querySelector(".greensock-text");
const track = document.querySelector(".track-completion");
const percent = document.querySelector(".track-percentage");

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

// function run during tween to update ui
const update = () => {
  const completion = (animation.length / animation.pathLength) * 100;
  path.style.strokeDasharray = `${animation.length} ${animation.pathLength}`;
  track.style.width = `${completion}%`;
  percent.innerHTML = `${Math.round(completion)}%`;
};

// Init tween
let tween = TweenMax.to(animation, duration, {
  length: animation.pathLength,
  onUpdate: update,
  ease: easing
});
// pause it and update ui
tween.pause();
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

// bind easing buttons
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
