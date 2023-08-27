const panels=document.querySelectorAll(".pannel");
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActive();
        panel.classList.add('active');
    })
})
function removeActive () {
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}
var flag=0;
const iconHome=document.getElementById("home");
const iconDay=document.getElementById("dayNight");

function lightChange () {

        if (flag == 1) {
            document.body.style.backgroundColor="#eaffff";
            document.getElementById("greeting").style.color="black";
            document.getElementById("dayNight").innerHTML="&#9733";
 document.getElementById("clickHelp").style.color="black";
            flag=0;
        }else{
          document.body.style.backgroundColor="#121523";
        document.getElementById("greeting").style.color="white";
        document.getElementById("dayNight").innerHTML="&#9728";
       document.getElementById("clickHelp").style.color="white";
        flag=1;
        }
    
}
 var timeline=gsap.timeline();
timeline.from(".icons",{
 top:"-11vw",
 
 duration:1,
})
.to(".content",{
    opacity:1,
    duration:2,
})
.from("#clickHelp",{
    opacity:0,
    top:"-10px",
    duration:2,
})
timeline.play();