const panels = document.querySelectorAll(".panel");

// using for loop

function addActive() {
    for (let i = 0; i < panels.length; i++){
        panels[i].addEventListener("click", () => {
            removeActive();
            panels[i].classList.add("active");
        })
    }

}
addActive();


function removeActive() {
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove("active");
    }
}


// using forEach

// panels.forEach(panel => {
//     panel.addEventListener("click", () => {
//         removeActive();
//         panel.classList.add("active");
//     })
// })

// function removeActive() {
//     panels.forEach(panel => {
//         panel.classList.remove("active");
//     })
// }