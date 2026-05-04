"use strict";
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}
function get_text() {
    return prompt("Text: ");
}
function lastLetter(s) {
    return s.at(-1);
}
let s = get_text() ?? "";
console.log(capitalize(s));
console.log(lastLetter(s));
