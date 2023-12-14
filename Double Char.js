function doubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}
