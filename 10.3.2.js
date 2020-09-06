let x = anyX;
xs = typeof x === String;
xn = typeof x === Number;
xb = typeof x === Boolean;

if (anyX === xs):
     { console.log('строка')
} else if (anyX === xn) {
    console.log('Число')
} else if (anyX === xb) {
    console.log('логический тип')
} else {
    console.log('Тип x не определён')
}