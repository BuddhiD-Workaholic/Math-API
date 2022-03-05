const PORT = process.env.PORT || 5244
const express = require('express')
const app = express();
const cors = require("cors");
const randomMathQuestion = require('random-math-question');

function RandomMathQuetion(Rminmax, Aminmax, OperationArr, nagativeObj, exponentObj) {
    var mathQuestion = randomMathQuestion.get(randomMathQuestion.get({
        numberRange: Rminmax,
        amountOfNumber: '8-10',
        operations: OperationArr,
        nagative: nagativeObj,
        exponent: exponentObj,
    }));
    return mathQuestion;
}

//MiddleWare
app.use(cors());
app.use(express.json()); //req.body

app.get('/', (req, res) => {
    res.json('Welcome to MATH API ')
})


//get all todos - GET
app.get("/getmath", async (req, res) => {
    try {
        //Rmin, Rmax, Amin, Amax, OperationArr, nagativeObj, exponentObj
        const { Rminmax } = req.body;
        const { Aminmax } = req.body;
        const { OperationArr } = req.body;
        const { nagativeObj } = req.body;
        const { exponentObj } = req.body;

        let respon = RandomMathQuetion(Rminmax, Aminmax, OperationArr, nagativeObj, exponentObj);
		const respoReturn = { MathAPI: respon, Creator: 'Buddhi Dhananjaya', Link:'https://github.com/BuddhiD-Workaholic'};
        res.json(respoReturn);

    } catch (err) {
        res.json(err.message);
    }
});

//Port Initialization
app.listen(PORT, () => {
    console.log("server has started on port " + PORT);
});


//JSON Body
// {
//     "Rminmax": "'1-5000'",
//     "Aminmax": "'5-10'",
//     "OperationArr": [
//         "/",
//         "*"
//     ],
//     "nagativeObj": {
//         "containsNagatives": false,
//         "negativeChance": "10%"
//     },
//     "exponentObj": {
//         "containsExponents": true,
//         "exponentChance": "10%",
//         "exponentRange": "1-10"
//     }
// }