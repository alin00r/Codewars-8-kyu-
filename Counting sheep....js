function countSheeps(arrayOfSheep) {
  if (arrayOfSheep == null) return 0;
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) count++;
  }
  return count;
}
