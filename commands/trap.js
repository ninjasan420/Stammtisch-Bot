module.exports = {
    name: 'trap',
    aliases: ['traps'],

    execute(client, message, args) {
        loadCuties();
    }
}

const fetch = require('node-fetch');

function loadCuties() {
    fetch('https://www.reddit.com/r/traps.json?limit=100&?sort=top&t=all')
        .then(res => res.json())
        .then(json => json.data.children.map(v => v.data.url))
        .then(urls => postRandomCutie(urls))
        .catch(error => console.log(error.message));
}

// console.log(urls[0]);

function postRandomCutie(urls) {
    /*
    console.log("Log urls: " + urls[1]);
    let randomNumber = Math.floor(Math.random() * urls.length - 1) + 1; 
    let randomURL = urls[randomNumber].data.preview.images[0].source.url;
    console.log("Log source url: " + randomURL);
    */
    let randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
    let imageURL = urls[randomNumber];

    console.log("RandomURL: " + imageURL);
    message.channel.send(imageURL);
}