////////// accordion
const button = document.querySelectorAll("button");
button.forEach(e => {
    e.addEventListener("click", () => {
        button.forEach(element => {
            if (element != e) {
                element.classList.remove("active");
                element.nextElementSibling.style.height = 0;
            }
            else {
                e.classList.toggle("active")

                if (e.classList.contains("active")) {
                    e.nextElementSibling.style.height = e.nextElementSibling.scrollHeight + "px";
                }
                else {
                    e.nextElementSibling.style.height = 0;
                }
            }
        })
    })
});
///////////// audio
document.addEventListener('play', e => {
    let audios = document.getElementsByTagName('audio');

    for (let i = 0; i < audios.length; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

///////// loading
let loading = document.querySelector(".loading");
window.addEventListener("load", () => {
    loading.style.display = "none";
})

///////// show image blackpink by touchmove
let imgBlackpink = document.querySelector(".blackpink");
let logoBP = document.querySelector(".left");
logoBP.addEventListener("touchmove" , ()=>{
    imgBlackpink.style.opacity = ".7";
})


