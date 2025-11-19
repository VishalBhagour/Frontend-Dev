let count = 0;

function increment() {
    count++;
    console.log("Count:", count);

    function logInner() {
        console.log("Inner Count:", count);
    }
    logInner();
}

function decrement() {
    count--;
    console.log("Count:", count);

    function logInner() {
        console.log("Inner Count:", count);
    }
    logInner();
}

increment();
increment();
decrement();
increment();