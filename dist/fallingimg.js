let leavesInterval
let leavesActive = true
let maxLeaves
let currentLeavesCount = 0

function setMaxLeaves() {
    if (window.innerWidth < 850) {
        maxLeaves = 3 
    } else {
        maxLeaves = 6.9
    }
}



function createFallingImg() {
    if (currentLeavesCount < maxLeaves) {
        const falling = document.createElement("img")
        falling.src = "dist/snowflake.svg"
        falling.className = "falling"
        falling.style.left = Math.random() * 100 + "vw"
        falling.style.top = "-50px"
        falling.style.animationDuration = Math.random() * 3 + 2 + "s"
        document.body.appendChild(falling)
        currentLeavesCount++

        falling.addEventListener("animationend", () => {
            falling.remove()
            currentLeavesCount--
        })
    }
}

setMaxLeaves()
leavesInterval = setInterval(createFallingImg, 3690)

window.addEventListener("resize", setMaxLeaves)
