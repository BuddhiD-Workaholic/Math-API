var rn = require('random-number');
var math = require('mathjs');

/*
var config = {
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
}
*/

exports.get = function(config) {

    //This is just so JS won't throw errors for there not being any config value when testing 'typeof config.amountOfNumber...' etc.
    if (typeof config === 'undefined')
        config = {};

    var question = '';
    var totalParts = getRandomNumberOfRange(typeof config.amountOfNumber === 'undefined' ? '2-10' : config.amountOfNumber);

    for (var i = 0; i < totalParts; i++) {
        var number = getRandomNumberOfRange(typeof config.numberRange === 'undefined' ? '1-100' : config.numberRange);
        var operation = typeof config.operations === 'undefined' ? getRandomOperation() : config.operations[Math.floor(Math.random() * config.operations.length)];


        // For the 'undefined' check, I could put it at the end, but that'll be hard to understand to other developers.
        var isNagative = typeof config.nagative === 'undefined' ? false : (typeof config.nagative.negativeChance === 'undefined' ? 10 : parseInt(config.nagative.negativeChance.replace('%', '')) >= getRandomNumberOfRange('1-100'));
        var hasExponent = typeof config.exponent === 'undefined' ? false : (typeof config.exponent.exponentChance === 'undefined' ? 10 : parseInt(config.exponent.exponentChance.replace('%', '')) >= getRandomNumberOfRange('1-100'));

        question += (i !== 0 ? ' ' + operation + ' ' : '') + //Check's if it's the first loop through. If so, doesn't add a operation to the front. If it isn't the first, it adds an operation with spaces on both sides
            (isNagative ? '(-' : '') + number + (isNagative ? ')' : '') + // Adds the number. Add's bracket's and a negative sign if the chance return's true, if not, add's nothing.
            (hasExponent ? '^' + getRandomNumberOfRange(config.exponent.exponentRange) : ''); //Add's a exponent to the number if the chance return's true, if not, add's nothing.
    }

    var answer = math.eval(question);

    return {
        question: question,
        answer: answer
    };

};

function getRandomNumberOfRange(range) {
    var rangeSplit = range.split('-');

    if (rangeSplit.length <= 0)
        return parseInt(range);

    return rn({ min: parseInt(rangeSplit[0]), max: parseInt(rangeSplit[1]), integer: true });
}

function getRandomOperation() {
    var randomNumber = rn({ min: 1, max: 4, integer: true });

    switch (randomNumber) {
        case 1:
            return '/';
        case 2:
            return '*';
        case 3:
            return '+';
        case 4:
            return '-';
    }
}
