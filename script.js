let die = document.getElementById('die')
let pinkSteps = 0
let blueSteps = 0
let playerPink = document.getElementById('playerPink')
let playerBlue = document.getElementById('playerBlue')
let randomNumber = null
let randomName = null
let beautyQueen = document.getElementById('beautyQueen')
let isBeautyQueen = true

function movePawn(steps, player) {
    const pinkInterval = setInterval(() => {
        dieNumber--
        steps++

        if (steps < 10) {
            player.style.left = steps + '0%'
        }

        else {

            if (Math.floor(steps / 10) % 2 == 0) {
                player.style.left = steps % 10 + '0%'
            }

            else {
                player.style.left = 9 - steps % 10 + '0%'
            }
        }

        player.style.bottom = Math.floor(steps / 10) + '0%'
        if (dieNumber == 0) {
            clearInterval(pinkInterval)
            die.style.pointerEvents = 'auto'
            die.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'
        }
    }, 500);
}

die.onclick = function () {

    die.style.pointerEvents = 'none'

    if (isBeautyQueen) {
        isBeautyQueen = false
        beautyQueen.innerHTML = 'Player: another one'
    }

    else {
        isBeautyQueen = true
        beautyQueen.innerHTML = 'Player: Beauty Queen'
    }

    die.style.transform = 'translate(-50%,-50%) scale(0.2) rotate(1000deg)'
    die.style.transition = '1s'
    const dieInterval = setInterval(() => {
        randomNumber = Math.floor(Math.random() * 6) + 1
        die.src = 'dice' + randomNumber + '.png'
    }, 167);

    if (isBeautyQueen) {

        setTimeout(() => {
            clearInterval(dieInterval)
            playerPink.style.transition = '0.5s'
            let dieNumber = randomNumber
            movePawn()


        }, 2000);

    }

    else {
        setTimeout(() => {
            clearInterval(dieInterval)
            playerBlue.style.transition = '0.5s'
            let dieNumber = randomNumber
            movePawn()

        }, 2000);
    }


}
