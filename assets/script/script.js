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
let audios = document.getElementsByTagName('audio');

document.addEventListener('play', e => {
    for (let i = 0; i < audios.length; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);
// Audio style on ios
if (platform.os.family == "iOS") {
    for (let i = 0; i < audios.length; i++) {
        audios[i].style = "border: 0;border-radius: 0;box-shadow: none;"

    };
}


///////// loading
let loading = document.querySelector(".loading");
window.addEventListener("load", () => {
    loading.style.display = "none";
})

///////// show image blackpink by touchmove
let imgBlackpink = document.querySelector(".blackpink");
let logoBP = document.querySelector(".left");
logoBP.addEventListener("touchmove", () => {
    imgBlackpink.style.opacity = ".7";
})
logoBP.addEventListener("touchend", () => {
    imgBlackpink.style.opacity = "0";

})


