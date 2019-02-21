var t1 = new TimelineMax({ paused: true });

t1.to(".menu", 1.5, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -0.5
});

t1.staggerFrom(
  ".menu ul li",
  1.5,
  { x: -200, opacity: 0, ease: Expo.easeOut },
  0.3
);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
  t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function() {
  t1.reversed(!t1.reversed());
});
