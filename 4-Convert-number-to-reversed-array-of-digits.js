function digitize(n) {
  return (array = n
    .toString()
    .split("")
    .map((m) => Number(m))).reverse();
}
//51
//Convert number to reversed array of digits
