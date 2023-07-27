var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

const proficiences =[50, 85, 80, 60, 50, 50, 50, 60 ];
function fillskillBars(){
    const skillBars= document.queryselectorAll('.skill-fill');
skillBars.forEach((bar,index)=>{
    const proficiency = proficiences[index];
    bar.style.width = '${proficiency}%';
});}

window.addEventListener('load',fillskillBars);


// code for Scroll to the top of the page with smooth behavior
document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.querySelector(".scroll-to-top-btn");

  // Scroll to the top of the page with smooth behavior
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  
