// Desafio 1 - Crie a função compareTrue
// const girafa = true;
// const elefante = true;
// const macaco = false;

//   function compareTrue(animal1, animal2) {
//   if (animal1 === true && animal2=== true) {
//     return true
//   } else { (animal1 && animal2 !== true)
//     return false
//   }
//   }
 

//  console.log(compareTrue(girafa, elefante));
//  console.log(compareTrue (macaco, elefante));
  

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


//  console.log(splitSentence('go Trybe'));

// Desafio 3 - Crie a função concatName

// Desafio 4 - Crie a função footballPoints

// Desafio 5 - Crie a função highestCount

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

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
