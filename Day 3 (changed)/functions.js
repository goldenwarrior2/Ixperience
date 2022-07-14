function perfSquareChecker(num){
    console.log(Math.sqrt(num) === parseInt(Math.sqrt(num)) ? true: false); 
}

function fibonacci(num) {
    let array = [0, 1];
    let first = array[0];
    let second = array[1];
    for (let i = 0; i < num; i++) {
        if (!(i === 0 || i === 1)) {
            let sum = first + second;
            array.push(sum);
            first = second;
            second = sum;
        } 
    }
    console.log(array);
}

perfSquareChecker(25);
fibonacci(10);