// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (input === true || input === false) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!"
    }
}

function isFive(num) {
    return num == 5;
}

console.log(isFive(5));