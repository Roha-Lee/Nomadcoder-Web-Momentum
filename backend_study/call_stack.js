function first() {
    second();
    console.log('1st');
}

function second() {
    third();
    console.log('2nd');
}

function third() {
    console.log('3rd');
}

first();