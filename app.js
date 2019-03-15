(function() {

    setUpPage();
  
    function setUpPage() {
      addNavEventListeners();
    //   addArticleEventListeners();
    //   addWindowEventListeners();
    //   addModalEventListeners();
    //   addSliderEventListeners();
    }

// const button = document.getElementById("toggleArrow");
// const navItems = document.getElementById("hideNav");


function addNavEventListeners() {

    const nav = document.querySelector('nav');

    const navClickHandler = function() {
      this.classList.toggle('open');
      event.stopPropagation();
    };

    nav.addEventListener('click', navClickHandler);

    const bodyClickHandler = function() {
      nav.classList.remove('open');
    };

    document.body.addEventListener('click', bodyClickHandler);
  }

  

// function handleToggle() {
    
//     if (navItems.style.display === "none") {
//         navItems.style.display = "flex";
//         button.innerHTML = "<";
//     }
//     else {
//         navItems.style.display = "none";
//         button.innerHTML = ">"
//     }
// }

// button.addEventListener("click", handleToggle);


let slideIndex = 1;
showProjects(slideIndex);

function cycleProjectsLeft(){
    showProjects(slideIndex -= 1)
}

function cycleProjectsRight(){
    showProjects(slideIndex += 1)
}


function showProjects(n) {
    let i;
    const myProjects = document.getElementsByClassName("project");
    if (n > myProjects.length) {
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = myProjects.length;
    }
    for (i = 0; i < myProjects.length; i++){
        myProjects[i].style.display = "none";
    }
    myProjects[slideIndex - 1].style.display = "flex";
}

document.getElementById("buttonLeft").addEventListener("click", cycleProjectsLeft);
document.getElementById("buttonRight").addEventListener("click", cycleProjectsRight);
})();
