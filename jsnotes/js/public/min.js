//  we can use ternaries for this "?" lif
//

function min(a, b) {
  return a > b
    ? b + " is lower than " + a
    : a === b
      ? "same number"
      : a + " is lower than " + b;
}
console.log(min(2, 3));
console.log(min(2, 2));
console.log(min(6, 2));
console.log(min(3, 10));
