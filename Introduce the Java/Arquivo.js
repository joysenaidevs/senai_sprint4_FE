pessoa.nome

var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

console.log(this.document === document); // true

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

function f1(){
    return this;
}
  // No navegador
  f1() === window; // true

function f2(){
   "use strict"; // assume modo estrito
   return this;
}
 f2() === undefined; // true

// função normal
let dobro = function (a) {
    return 2 * a
}
// função arrow com return explicito
dobro = (a) => {
   return 2 * a
}
// função arrow com return implicito
dobro = a => 2 * a // return implicito
// função arrow sem parametro
ola = () => 'Olá'
// função arrow com apenas um parametro mas que pode ser ignorado
ola = _ => 'Olá'
// _ não é ausencia de parametro, é um parametro ignoravel.
 
var frutas = ['Maçã', 'Banana'];
console.log(frutas.length);
// 2
var primeiro = frutas[0];
// Maçã
var ultimo = frutas[frutas.length - 1];
// Banana

console.log([1,2,3]+[4,5,6])
// 1, 2, 34, 5, 6

class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  }

  class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(this.nome + ' emite um barulho.');
    }
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log(this.nome + ' latidos.');
    }
  }
  
  let cachorro = new Cachorro('Mat');
  cachorro.falar();


const str1 = `teste` 


const str1 = `teste` //declarando string normal
const strMultiLinha = 'linha1 \n linha2' //declarando string com varias linhas
console.log(strMultiLinha)
console.log(str1)

// declarando string multilinha com template string
const strMultiLinha = `linha1
linha meio
linha2`
console.log(strMultiLinha)

const a = 10
const str = `Ola ${a + 1} !`
console.log(str)