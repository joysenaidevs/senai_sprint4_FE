var numbers = [1, 4, 9]
var doubles = numbers.map(function(num){
    return num * 2
});

console.log(numbers)
console.log(doubles)


// traduz fahrenheit para celsius
var fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];
var celsius = fahrenheit.map(function(item) {
    return Math.round((item - 32)*5/9)
});

console.log(celsius);

// FILTER
function isBigEnough(value) {
    return value >=10
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtrado é [12, 120, 44]
console.log(filtered)

//Filter
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares (value) {
    if (value % 2 == 0)
    return value;
}
var numerosPares = numeros.filter(buscarNumerosPares)
console.log(numeroPares)



//somatoria -- reduce
var valores = [1.5, 2, 4, 10]
var somatoria = valores.reduce(function(total, item) {
    return total + item
}, 0)
console.log(somatoria)

// media somatoria reduce
var valores = [1.5, 2, 4, 10]
var media = valores.reduce((total, item,indice, array) => {
    total += item
    if(indice === array.lenght - 1) {
        return total / array.lenght
    }
    return total;

}, 0)
console.log(media)