// function repeatStr(n, s) {
//   let newstring = "";
//   for (let i = 0; i < n; i++) {
//     newstring += s;
//   }
//   return newstring;
// }
// build in function repeat
// return s.repeat(n);
// 49
//String-repeat

function digitize(n) {
  return (array = n
    .toString()
    .split("")
    .map((m) => Number(m))).reverse();
}

// console.log(digitize(123456));
// console.log(typeof array[0]);
