let overlay = document.querySelector('.win-overlay');
let buttons = document.querySelectorAll('.new-game');

fillCircles();

for(let button of buttons) {
    button.addEventListener('click', function() {
        overlay.classList.remove('show-win-overlay');
        let circles = document.querySelectorAll('.color-field');
        for(let circle of circles) {
            circle.classList.remove('disable');
        }
        fillCircles();
    })
}

function generateColor() {
    let arr = [];
    for(let i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 256 ));
    }
    return 'rgb(' + arr.join() + ')';
};

function fillCircles() {
    let colorFields = document.querySelectorAll('.color-field');

    for(let colorField of colorFields) {
        colorField.style.backgroundColor = generateColor();
    }    
    selectRandomCircle(colorFields);
};

function selectRandomCircle(colorFields) {
    let randomNum = Math.floor(Math.random() * 6);
    let winnerColor = colorFields[randomNum].style.backgroundColor;
    document.querySelector('#rgb-color').innerHTML = winnerColor;
    startGame(winnerColor, colorFields);
};

function startGame(winner, colorFields) {

    for(let field of colorFields) {
        field.addEventListener('click', function(e) {
            
            if(e.target.style.backgroundColor === winner) {     
                overlay.style.backgroundColor = winner;
                overlay.classList.add('show-win-overlay');
            } else {
                e.target.classList.add('disable');
            }

        })
    }
};



