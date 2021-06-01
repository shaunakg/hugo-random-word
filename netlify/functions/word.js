var fs = require("fs");

exports.handler = async function (event, context) {

    let words = fs.readFileSync("words.txt")
    words = words.split("\n");

    const randWord = words[Math.floor(Math.random() * words.length)];

    return {
        statusCode: 200,
        body: randWord
    }

}