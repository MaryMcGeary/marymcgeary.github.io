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

// modal for bio stuff:

var modal = document.getElementById("myModal"); //get the modal
var button = document.getElementById("myButton"); //get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; //get the <span> element that closes the modal

button.onclick = function() {        //when user clicks button, open modal
  modal.style.display = "block"; 
}

span.onclick = function() {      // when user clicks <span> (x), close modal
  modal.style.display = "none";
}

window.onclick = function(event) {   // when user clicks anywhere outside of modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



})();
