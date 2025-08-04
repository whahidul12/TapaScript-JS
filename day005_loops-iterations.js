// for loops=============================================================

// for (let index = 0; index < 5; ++index) {
//   console.log(index);
// }

let num = 6789;
// let str = String(num);
// console.log(str);
// let splt = str.split('')
// console.log(splt);
// let rev = splt.reverse()
// console.log(rev);
// let jon = rev.join("")
// console.log(jon);
let temp = 0;

while (num > 0) {
  let digit = num % 10;
  temp = temp * 10 + digit;
  console.log(temp);

  num = Math.floor(num / 10);
}
console.log(temp);





