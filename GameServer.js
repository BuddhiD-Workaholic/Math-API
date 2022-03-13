
class RandomGameServer {
    constructor(Rminmax, Aminmax, OperationArr, nagativeObj, exponentObj) {
        this.Rminmax = Rminmax;
        this.Aminmax = Aminmax;
        this.OperationArr = OperationArr;
        this.nagativeObj = nagativeObj;
        this.exponentObj = exponentObj;
    }

    RandomMathQuetion(Rminmax, Aminmax, OperationArr, nagativeObj, exponentObj) {
        var mathQuestion = randomMathQuestion.get(randomMathQuestion.get({
            numberRange: Rminmax,
            amountOfNumber: '8-10',
            operations: OperationArr,
            nagative: nagativeObj,
            exponent: exponentObj,
        }));
        return mathQuestion;
    }
}

module.exports = RandomGameServer;