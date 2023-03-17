/*jshint esversion: 9 */

let condition = true;
let k = 0;

while (condition) {
    const question = prompt("Say something");
    if (question == "") {
        const question = prompt("Say something");
        continue;
    } else {
        condition = false;
    }
}


