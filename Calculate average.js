function findAverage(array) {
  if (array === null || array.length === 0) return 0;
  let x = 0;
  //   array.map((a,b)=> a+b)
  for (let i = 0; i < array.length; i++) {
    x += array[i];
  }
  let avg = x / array.length;
  return avg;
  //   return array.reduce((a,b)=>a+b,0)/array.length;
}
