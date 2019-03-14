const button = document.getElementById("toggleArrow");
const navItems = document.getElementById("hideNav");

const slideIndex = 1;
showProjects(slideIndex);


function handleToggle() {
    
    if (navItems.style.display === "none") {
        navItems.style.display = "flex";
        button.innerHTML = "<"
    }
    else {
        navItems.style.display = "none";
        button.innerHTML = ">"
    }
}

button.addEventListener("click", handleToggle);

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
        slideIndex = myProject.length;
    }
    for (i = 0; i < myProject.length; i++){
        myProjects[i].style.display = "none";
    }
    myProjects[slideIndex - 1].style.display = "flex";
}

document.getElementById("buttonLeft").addEventListener("click", cycleProjectsLeft);
document.getElementById("buttonRight").addEventListener("click", cycleProjectsRight);
