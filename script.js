const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function () {
    jump()
});

function jump () {
    if (dino.classList !== "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function (){
        dino.classList.remove("jump")
    },300)
}

let isAlive = setInterval(function () {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyPriority("bottom"));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyPriority("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyPriority("left"));
    let cactusTop = parseInt(window.getComputedStyle(cactus).getPropertyPriority("top"));
    if (cactusLeft < 1040 && cactusLeft > -90 && dinoBottom >= 50) {
        alert("GAME OVER!!")
    }
}, 10)