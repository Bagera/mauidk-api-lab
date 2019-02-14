window.onload = function() {
  var easing = Bounce.easeOut;
  var logo = document.getElementById("logo");
  TweenLite.to(logo, 2, { left: "440px", ease: easing });
  TweenLite.to(logo, 2, { left: "0", ease: easing, delay: 2 });

  /* Tip: Try substituting the following eases:
  Elastic.easeIn
  Elastic.easeInout
  Back.easeOut
  Power1.easeOut
  Power2.easeOut
  Power3.easeOut
  Power4.easeOut
  SlowMo.ease
  */
};
