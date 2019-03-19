(function() {

    setUpPage();
  
    function setUpPage() {
      addNavEventListeners();
    }

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

const modal = document.getElementById("myModal"); //get the modal
const button = document.getElementById("myButton"); //get the button that opens the modal

button.onclick = function() {        //when user clicks button, open modal
  modal.style.display = "block"; 
}

window.onclick = function(event) {   // close modal when click anywhere on screen
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//project description stuff
const projectDescriptions = document.getElementsByClassName("projectDescription");
const projectButtons = document.getElementsByClassName("projectButton");

for (let i = 0; i < projectDescriptions.length; i++) {  //so descriptions don't start off open
  projectDescriptions[i].style.display = "none";
}

function projectButtonClick() {  // toggles project descriptions
  for (let i=0; i < projectDescriptions.length; i++) {
    const x = projectDescriptions[i];
    if (x.style.display == "none") {
      x.style.display = "block";
         } else {
      x.style.display = "none";
    }
  }
}

for (let i=0; i < projectButtons.length; i++) {
  projectButtons[i].addEventListener("click", projectButtonClick);
}

// contact icon image clicks



// const email = document.querySelector("#email");
// email.addEventListener("click", function() {
//   email.innerHTML = "mmcgeary1@gmail.com";
// });

// const phone = document.querySelector("#phone");
// phone.addEventListener("click", function() {
//   phone.innerHTML = "(216)618-0230";
// });

})();
