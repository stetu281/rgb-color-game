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
    console.log(winnerColor)
};





fillCircles();