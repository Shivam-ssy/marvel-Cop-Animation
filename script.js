const dy=document.getElementById("day");
const dk=document.getElementById("dark");
function animateDay(){
gsap.killTweensOf(dy);
gsap.fromTo(dy,{
        opacity:0,},{
    opacity:1,
    
    duration:2,
    yoyo:true,   
});
}
function animateDark(){
gsap.killTweensOf(dk);
gsap.fromTo(dk,{
     y:"-120%",},{
    y:1,
    duration:2,
    yoyo:true,
});
}
var flag=1;
const dayChange=document.getElementById("dayNight");
const imgCh=document.querySelectorAll(".image");
removeActive();
imgCh[1].classList.add('active');
animateDay();

function change () {
      if (flag == 1) {
    document.getElementById("dayNight").innerHTML="&#9728";          document.body.style.backgroundColor="#073057";
    removeActive();
         imgCh[0].classList.add('active')   ;
         animateDark() ;
          flag=0;
      }else{
         flag=1;
         document.getElementById("dayNight").innerHTML="&#9733"; document.body.style.backgroundColor="#eaffff";
         removeActive();
         imgCh[1].classList.add('active');
         animateDay();
      }
    
}
function removeActive () {
      imgCh.forEach(img=>{
        img.classList.remove('active') ;
      })
    
}
