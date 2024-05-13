function add(x, y, f) {
  return f(x) + f(y)
}
console.log(add(55, 5, Math.abs))
