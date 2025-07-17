const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: .2,
                delay: -1
    })
    .from("#herofooter", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })
}


var timeout;
 
function mousecircleskew(){

    var xscale = 1;
var yscale = 1;

var xprev = 0;
var yprev = 0;

    window.addEventListener("mousemove", function(e){
clearTimeout(timeout);

xscale = gsap.utils.clamp(.8,1.2, e.clientX - xprev);
yscale = gsap.utils.clamp(.8,1.2, e.clientY - yprev);

xprev = e.clientX;
yprev = e.clientY;

circleMouseFollower(xscale, yscale);
timeout = setTimeout(function(){
document.querySelector("#minicircle").style.transform=`translate(${e.clientX}px,${e.clientY}px) scale(1, 1)`;
    }, 100);
});
}

mousecircleskew();
function circleMouseFollower(xscale, yscale){
     window.addEventListener("mousemove",function(e){
document.querySelector("#minicircle").style.transform=`translate(${e.clientX}px,${e.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleMouseFollower();
firstPageAnim(); 

document.querySelectorAll(".elem").forEach(function (elem) {

var rotate = 0;
var diffrot = 0;

 
    elem.addEventListener("mousemove", function (dets) {
var diff = (dets.clientY - elem.getBoundingClientRect().top);
diffrot = dets.clientX - rotate;
rotate = dets.clientX;

    gsap.to(elem.querySelector('img'), {
    opacity: 1,
    ease: Power3,
    top: diff,
    left: dets.clientX,
    rotate: gsap.utils.clamp(-20,20, diffrot * 0.5)

});

});


 elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector('img'), {
    opacity: 0,
    ease: Power3,
    duration: 1
});

});
});
