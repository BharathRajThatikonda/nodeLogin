
// Coustom Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("./DB/dbConnect");
var app = express()
const PORT = 3003;

// Apllication MiddleWare
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require("./Login/login")(app);

var message = "";

promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += "my";
        resolve(message);
    }, 2000)
})

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " first";
        resolve(message);
    }, 2000)
})

promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " promise";
        resolve(message);
    }, 2000)
})

var printResult = (results) => {
    console.log("Results = ", results, "message = ", message)
}

function main() {
    // See the order of promises. Final result will be according to it
    Promise.all([promise1, promise2, promise3]).then((result)=>{
    console.log("get first Result ",result);
    });
    Promise.all([promise2, promise1, promise3]).then(printResult);
    Promise.all([promise3, promise2, promise1]).then(printResult);
    console.log("hello",message);
    console.log("\"\"" + message);
}

main();


app.get('/',(req,res)=>{
    res.send("hello Bharath Thatikonda")
})

app.listen(PORT,()=>{
    console.log(`start on port ${PORT}`);
});

module.exports = {
    app
};