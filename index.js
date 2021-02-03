function generateColor() {
    let arr = [];
    for(let i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 256 ));
    }
    return 'rgb(' + arr.join() + ')';
}

console.log(generateColor());