var randomWords = require('random-words');

exports.handler = async function (event, context) {

    const num = parseInt(event.queryStringParameters.num);
    const words = randomWords({
        exactly: 5,
        join: ' '
    });

    return {
        statusCode: 200,
        body: words
    }
    
}