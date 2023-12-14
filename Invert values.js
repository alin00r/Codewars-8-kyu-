function invert(array) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    //     if(array[i].empty()) results
    if (array[i] > 0) results.push(array[i] * -1);
    else results.push(array[i] * -1);
  }
  return results;
}
