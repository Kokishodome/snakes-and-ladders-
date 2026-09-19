let die = document.getElementById('die')
let pinkSteps = 0
let blueSteps = 0
let playerPink = document.getElementById('playerPink')
let playerBlue = document.getElementById('playerBlue')
let randomNumber = null
let randomName = null
let beautyQueen = document.getElementById('beautyQueen')
let isBeautyQueen = false
let clearGame = document.getElementById('clearGame')
const bonuses = {
    6: 27, 9: 50, 20: 39, 25: 57, 53: 72, 54: 85, 61: 82,
    43: 16, 55: 34, 70: 48, 78: 42, 95: 73, 96: 82
}

function movePawn(steps, player) {
    let dieNumber = randomNumber
    if (isBeautyQueen) {
        pinkSteps = pinkSteps + dieNumber
    }
    else {
        blueSteps = blueSteps + dieNumber
    }

    const pinkInterval = setInterval(() => {
        dieNumber--
        steps++

        if (steps >= 99) {
            die.style.transition = '1s'
            die.style.opacity = '0'
            beautyQueen.innerHTML = 'Player wins!'
            clearInterval(pinkInterval)
            setTimeout(() => {
                player.style.transition = '0.5s'
                player.style.transform = 'translateY(-40px)'
                setTimeout(() => {
                    player.style.transform = 'translateY(-40px) rotate(360deg)'
                    setTimeout(() => {
                        player.style.transform = 'rotate(360deg)'
                    }, 500);
                }, 500);

            }, 1000);
        }

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
            let cell = steps + 1
            if (bonuses[cell]) {
                steps = bonuses[cell] - 1

                if (Math.floor(steps / 10) % 2 == 0) {
                    player.style.left = steps % 10 + '0%'
                }
                else {
                    player.style.left = 9 - steps % 10 + '0%'
                }

                player.style.bottom = Math.floor(steps / 10) + '0%'

                if (isBeautyQueen) {
                    pinkSteps = steps
                }
                else {
                    blueSteps = steps
                }
            }
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
            movePawn(pinkSteps, playerPink)
        }, 2000);
    }
    else {
        setTimeout(() => {
            clearInterval(dieInterval)
            playerBlue.style.transition = '0.5s'
            movePawn(blueSteps, playerBlue)
        }, 2000);
    }
}

clearGame.onclick = function () {
    die.style.opacity = '1'
    die.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'
    die.style.pointerEvents = 'auto'
    playerPink.style.left = '0%'
    playerPink.style.bottom = '0%'
    playerBlue.style.left = '-2%'
    playerBlue.style.bottom = '0%'
    pinkSteps = 98
    blueSteps = 0
    beautyQueen = 'Player: Beauty Queen'
    isBeautyQueen = false
}

// get rid of the cube whne the game ends and bring it back when the game restarts >W<
