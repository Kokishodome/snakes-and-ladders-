let die = document.getElementById('die')
let pinkSteps = 0
let playerPink = document.getElementById('playerPink')
let randomNumber = null
let randomName = null

die.onclick = function () {
    die.style.transform = 'translate(-50%,-50%) scale(0.2) rotate(1000deg)'
    die.style.transition = '1s'
    const dieInterval = setInterval(() => {
        randomNumber = Math.floor(Math.random() * 6) + 1
        die.src = 'dice' + randomNumber + '.png'
    }, 167);
    setTimeout(() => {
        clearInterval(dieInterval)
        playerPink.style.transition = '0.5s'
        let dieNumber = randomNumber
        const pawnInterval = setInterval(() => {
            dieNumber--
            pinkSteps++
            playerPink.style.left = pinkSteps + '0%'
            if (dieNumber == 0) {
                clearInterval(pawnInterval)
            }
        }, 500);
        // randomName = Math.floor(Math.random())
    }, 2000);

}

// make sure the name 'beauty queen' is random each time with another name
