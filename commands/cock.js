const fetch = require('node-fetch');

function loadCuties(message) {
    fetch('https://www.reddit.com/r/ratemycock.json?limit=100&?sort=top&t=day')
        .then(res => res.json())
        .then(json => json.data.children.map(v => v.data.url))
        .then(urls => postRandomCutie(urls, message))
        .catch(error => console.log(error.message));
}

function postRandomCutie(urls, message) {
    let randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
    let imageURL = urls[randomNumber];

    console.log("RandomURL: " + imageURL);
    message.channel.send(imageURL);
}

module.exports = {
    name: 'cock',
    aliases: ['cocks'],

    execute(client, message, args) {
        loadCuties(message);
    }
}