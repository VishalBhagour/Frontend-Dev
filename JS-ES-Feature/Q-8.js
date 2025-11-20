"use strict";

function demo(x, y) {
    let total = 10;
    console.log("Total =", total);

    let obj = { value: 20 };
    delete obj.value;
    console.log("Deleted obj.value =", obj.value);
}

demo(5, 10);