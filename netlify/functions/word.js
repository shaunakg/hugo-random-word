var randomWords = require('random-words');

exports.handler = async function (event, context) {

    let num = parseInt(event.queryStringParameters.num || 1);
    if (num > 20) {
        num = 20;
    }

    const words = randomWords({
        exactly: num,
        join: ' '
    });

    return {
        statusCode: 200,
        body: words
    }
    
}