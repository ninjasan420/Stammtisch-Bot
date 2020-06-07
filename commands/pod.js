const fetch = require('node-fetch');

function loadAPI(message) {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASAAPI}`)
        .then(res => res.json())
        .then(apiResponse => postMessage(apiResponse, message))
        .catch(error => console.log(error.message));
}

function postMessage(apiResponse, message) {


    let myEmbed = {
        color: 0x5E00FF,
        title: 'Nasa Bild des Tages: ' + apiResponse.title,
        url: apiResponse.url,
        author: {
            name: 'NASA',
            icon_url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png',
            url: 'https://www.nasa.gov',
        },
        description: apiResponse.explanation,
        thumbnail: {
            url: 'https://i.imgur.com/wSTFkRM.png',
        },
        image: {
            url: apiResponse.url,
        },
    };

    message.channel.send({ embed: myEmbed });
}

module.exports = {
    name: 'pod',
    aliases: ['apod', 'apoc'],

    execute(client, message, args) {
        try {
            loadAPI(message);
        } catch (err) {
            console.log(err);
        }
    }
}