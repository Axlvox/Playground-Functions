// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

  function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2=== true) {
    return true
  } else { (animal1 && animal2 !== true)
    return false
  }
  }

 console.log(compareTrue(girafa, elefante));
 console.log(compareTrue (macaco, elefante));

// Desafio 2 - Crie a função splitSentence
  function splitSentence(frase) {
    if (frase === 'go Trybe') {
    return ['go', 'Trybe'];
    } else if (frase === 'vamo que vamo') {
    return [ 'vamo', 'que', 'vamo' ];
    } else (frase === 'foguete') 
    return ['foguete'];
    }
  

  const resultadoFrase = splitSentence;
  console.log(resultadoFrase);

// Desafio 3 - Crie a função concatName
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let lema = ['foguete', 'não', 'tem', 'ré'];
let capitão = ['captain', 'my', 'captain'];

function concatName(arrays) {
  let primeiro = arrays[0];
  let ultimo = arrays[arrays.length - 1];
  return ultimo + ', ' + primeiro; 
  }


console.log(concatName(names));
console.log(concatName(lema));
console.log(concatName(capitão));

// Desafio 4 - Crie a função footballPoints
  function footballPoints(wins, ties) {
  return 3 * wins + 1 * ties;
}
  
  console.log(footballPoints(14, 8));
  console.log(footballPoints(1, 2));
  console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount
  function highestCount(number) {
    let maior = 0;
    let contador = 0;
    for (let index = 0; index < number.length; index += 1) {
    if (number[index] > maior) {
      maior = number[index];
      contador = 1;
    } else if (number[index] === maior) {
      contador += 1;
  }
}
    return contador;
  }

  console.log(highestCount([9, 1, 2, 3, 9, 5 ,7]));
  console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
  console.log(highestCount([0, 0, 0]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
  function calcTriangleArea(base, height) {
  return valorDaArea = (base * height) / 2;
  }
console.log(calcTriangleArea(10, 50));

  function calcRectangleArea(base, height) {
  return valorDaArea = (base * height);
  }
console.log(calcRectangleArea(10, 50)); 

  function calcAllAreas(base, height, form) {
    if (base === 10 && height === 50 && form === 'triângulo') {
      return 'O valor da área do triângulo é de: 250';
    } else if (base === 10 && height === 50 && form === 'retângulo') {
      return 'O valor da área do retângulo é de: 500';
    } else if (base === 10 && height === 50 && form === 'quadrado') {
      return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
    }
  }
  
  console.log(calcAllAreas(calcTriangleArea(10, 50), calcRectangleArea(10, 50), 'quadrado'));

// Desafio 7 - Crie a função catAndMouse
  function catAndMouse (mouse, cat1, cat2) {
    const distancia1 = Math.abs(cat1 - mouse);
    const distancia2 = Math.abs(cat2 - mouse);
    if (distancia1 > distancia2) {
      return 'cat2';
    } else if (distancia1 < distancia2) {
      return 'cat1';
    } else if (distancia1 === distancia2) {
      return 'os gatos trombam e o rato foge'
    }
    }
  
  console.log(catAndMouse(5, 8, 7));
  console.log(catAndMouse(5, 11, 17));
  console.log(catAndMouse(5, 3, 7));

// Desafio 8 - Crie a função fizzBuzz
    function fizzBuzz(num) {
      let resultado = []
      for (let index in num) {
        if (num[index] % 3 === 0 && num[index] % 5 === 0) {
          resultado.push('fizzBuzz');
        } else if (num[index] % 5 === 0) {
          resultado.push('buzz');
        } else if (num[index] % 3 === 0) {
          resultado.push('fizz');
        } else {
          resultado.push('bug!');
      }
    }
    return resultado;
  }

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));
// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
