

/*
 All animation made with GSAP 
 ::: greensock.com :::
 
 Best animation platform ever and simple as that:
 TweenLite.to("#myID",2,{ width:"50%", top:"100px"});
 
*/

var $sticks = $('.dna-rainbow-wrap ul li'); 

function gsap(t){  
  //reset
  TweenMax.killAll($sticks); 
  TweenMax.staggerTo($sticks,0,{ scale:1, yoyo:false,opacity:1, rotationZ:0,rotationX:0,rotationY:0, repeat:0, ease:Linear.easeNone},0); 
  TweenMax.to($($sticks).parent(),0,{ rotation:0,  transformOrigin:0,repeat:0, ease:Linear.easeNone});
  //behavior animation
  switch(t){ 
    case 'pulse': 
      TweenMax.staggerTo($sticks,2,{ rotationZ:180,rotationX:360, repeat:-1, ease:Linear.easeNone, overwrite:"all"},.2);  
    break;
      
    case 'wave': 
      TweenMax.staggerTo($sticks,3,{ rotationX:360,rotationZ:360,rotationY:360, repeat:-1, ease:Linear.easeNone},.1);  
    break;
      
    case 'dunes': 
      TweenMax.staggerTo($sticks,5,{ borderRadius:0,rotationY:360,rotationZ:360,scale:1.5,yoyo:true, repeat:-1},.1);  
    break;
      
    case 'spin':  
     
      TweenMax.staggerTo($sticks,2,{ transformOrigin:"50px 50px",left:'-20%',rotation:360, repeat:-1 ,yoyo:true},.1);  
      TweenMax.to($($sticks).parent(),5,{ rotation:360,  transformOrigin:"50% 50px",repeat:-1, ease:Linear.easeNone}); 
    break;
  } 
  
  //color animation reinit
  var tline = new TimelineMax({repeat:-1, yoyo:true});
   tline.staggerTo($sticks, 1, {backgroundColor:'#FF8000'},.1)
    .staggerTo($sticks, 1, {backgroundColor:'#FFDF00'},.1)
    .staggerTo($sticks, 1, {backgroundColor:'#7AF00F'},.1)
    .staggerTo($sticks, 1, {backgroundColor:'#0C9CF3'},.1)
    .staggerTo($sticks, 1, {backgroundColor:'#033CFC'},.1)
    .staggerTo($sticks, 1, {backgroundColor:'#8000FF'},.1);
}
gsap('pulse')

//fx menu
$('nav a').on('click',function(e){
  e.preventDefault();
  gsap($(this).data('fx'));
})

// extra codes for nav-btns


var bar = document.getElementById('bars');
var nb = document.getElementById('navbar')
var nb1 = document.getElementById('navbar1')
var nb2 = document.getElementById('navbar2')
var nb3 = document.getElementById('navbar3')
var nb4 = document.getElementById('navbar4')

TweenLite.from(bar, 2.5, { ease: Bounce.easeOut, y: -400 });
TweenMax.from(nb, 2, {x:500, y:300, opacity:0.5, roundProps:"xy", delay:2});
TweenMax.from(nb1, 2, {x:500, y:300, opacity:0.5, roundProps:"xy", delay:3});
TweenMax.from(nb2, 2, {x:500, y:300, opacity:0.5, roundProps:"xy", delay:4});
TweenMax.from(nb3, 2, {x:500, y:300, opacity:0.5, roundProps:"xy", delay:5});
TweenMax.from(nb4, 2, {x:500, y:300, opacity:0.5, roundProps:"xy", delay:6});



