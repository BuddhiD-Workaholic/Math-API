<h2  align="center">Random-Math-Question</h2>
<p  align="center">A function that generates a math question</p>

<p align="center">
  <a href="https://github.com/tokyojack/random-math-question/stargazers"><img src="https://img.shields.io/github/stars/tokyojack/random-math-question.svg"></a>
  <a href="https://github.com/tokyojack/random-math-question/issues"><img src="https://img.shields.io/github/issues/tokyojack/random-math-question.svg"></a>
  <a href="https://github.com/tokyojack/random-math-question/network"><img src="https://img.shields.io/github/forks/tokyojack/random-math-question.svg"></a>
  <a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Ftokyojack%2Frandom-math-question"><img src="https://img.shields.io/twitter/url/https/github.com/tokyojack/random-math-question.svg?style=social"></a>
</p>
  
<img align="center" src="https://i.imgur.com/e15KxxL.png"/>

## :cd: Installation

Simpley run this with-in your console and you're good to go!
```
npm install random-math-question --save
```


## :straight_ruler: Usage

  ```
var randomMathQuestion = require('random-math-question');

var mathQuestion1 = randomMathQuestion.get();

var mathQuestion2 = randomMathQuestion.get(randomMathQuestion.get({
  numberRange: '1-5000',
  amountOfNumber: '5-10',
  operations: ['/', '*', '+', '-'],
  nagative: {
      containsNagatives: true,
      negativeChance: '10%'
  },
  exponent: {
      containsExponents: true,
      exponentChance: '10%',
      exponentRange: '1-10'
  },
}));


console.log("Question 1: " + mathQuestion1.question);
console.log("Answer: " + mathQuestion1.answer);

console.log("Question 2: " + mathQuestion2.question);
console.log("Answer: " + mathQuestion2.answer);
  ```
  
## Author


![Jack Clarke](https://avatars1.githubusercontent.com/u/19690448?s=96&v=4)
---|
Jack Clarke
