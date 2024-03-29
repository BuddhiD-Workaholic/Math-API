const Game = require('./Game.js');
const PORT = process.env.PORT || 5244
const express = require('express')
const app = express();
const CryptoJS = require('crypto-js')
const cors = require("cors");
const randomMathQuestion = require('random-math-question');
const dotenv = require('dotenv');
dotenv.config();

function RandomMathQuetion(Rminmax, Aminmax, OperationArr, nagativeObj, exponentObj) {
    var mathQuestion = randomMathQuestion.get(randomMathQuestion.get({
        numberRange: Rminmax,
        amountOfNumber: Aminmax,
        operations: OperationArr,
        nagative: nagativeObj,
        exponent: exponentObj,
    }));
    return mathQuestion;
}

function getRandomGame() {
    const i = Math.floor(Math.random() * (1000 - 0));
    const url = "https://sanfoh.com/heartgame/sixeqgame_" + i + ".png";
    const solution = i % 10;
    return new Game(url, solution);
}

//MiddleWare
app.use(cors());
app.use(express.json()); //req.body

app.get('/', (req, res) => {
    res.json('Welcome to MATH API ')
})


//get all todos - GET
app.get("/getmathRandom/:cookie", async (req, res) => {
    try {

        const cookie = req.params.cookie;
        if (cookie != 'null') {

            var decryptedBytes = CryptoJS.AES.decrypt(cookie, process.env.SECRET_KEY);
            var plaintext = decodeURIComponent(decryptedBytes.toString(CryptoJS.enc.Utf8));
            var arayA = plaintext.split("-");
            if ((arayA.length = 4) && (arayA[0] == "XYZ") && (arayA[2] == "ABC") && (isNaN(arayA[1]) == false)) {
                if (arayA[3] >= new Date().getTime()) {
                    const { Rminmax } = req.body;
                    console.log(Rminmax);
                    const { Aminmax } = req.body;
                    console.log(Aminmax)
                    const { OperationArr } = req.body;
                    console.log(OperationArr)
                    const { nagativeObj } = req.body;
                    console.log(nagativeObj)
                    const { exponentObj } = req.body;
                    console.log(exponentObj)

                    let respon = RandomMathQuetion(Rminmax, Aminmax, OperationArr, nagativeObj, exponentObj);
                    const respoReturn = { MathAPI: respon, Link: 'https://github.com/BuddhiD-Workaholic' };
                    let encJson = CryptoJS.AES.encrypt(JSON.stringify(respoReturn), plaintext).toString()
                    let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson))
                    res.json((encData));
                } else {
                    let respon = "The session is expirerd!"
                    res.json(respon);
                }
            } else {
                let respon = "You need to be authnticated to use this! Please login!"
                res.json(respon);
            }
        } else {
            let respon = "Please login to use this service!"
            res.json(respon);
        }
    } catch (err) {
        res.json(err.message);
    }
});

app.get("/getmathImg/:cookie", async (req, res) => {
    try {

        const cookie = req.params.cookie;
        if (cookie != 'null') {
            var decryptedBytes = CryptoJS.AES.decrypt(cookie, process.env.SECRET_KEY);
            var plaintext = decodeURIComponent(decryptedBytes.toString(CryptoJS.enc.Utf8));
            var arayA = plaintext.split("-");
            if ((arayA.length = 4) && (arayA[0] == "XYZ") && (arayA[2] == "ABC") && (isNaN(arayA[1]) == false)) {
                if (arayA[3] >= new Date().getTime()) {
                    let respon = getRandomGame();
                    const respoReturn = { MathAPI: respon, Link: 'https://github.com/BuddhiD-Workaholic' };
                    let encJson = CryptoJS.AES.encrypt(JSON.stringify(respoReturn), plaintext).toString()
                    let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson))
                    res.json((encData));
                } else {
                    let respon = "The session is expirerd!"
                    res.json(respon);
                }
            } else {
                let respon = "You need to be authnticated to use this! Please login!"
                res.json(respon);
            }
        } else {
            let respon = "Please login to use this service!"
            res.json(respon);
        }
    } catch (err) {
        res.json(err.message);
    }
});

//Port Initialization
app.listen(PORT, () => {
    console.log("server has started on port " + PORT);
});


