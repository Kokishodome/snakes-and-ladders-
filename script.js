let die = document.getElementById('die')

die.onclick = function () {
    die.style.transform = 'translate(-50%,-50%) scale(0.2) rotate(1000deg)'
    die.style.transition = '1s'
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 6) + 1
        die.src = 'dice' + randomNumber + '.png'
    }, 167);
}

// github and add a second pawn