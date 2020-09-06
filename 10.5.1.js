let arr = [4, 8, 15, 16, 23, 42]
arr.forEach((el, i) => {
  setTimeout(() => {
    console.log(el)
  }, (i + 1) * 1000)
})
console.log(arr.length)