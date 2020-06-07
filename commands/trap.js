const fetch = require('node-fetch');
const Discord = require('discord.js');

function loadCuties(message) {
    fetch('https://www.reddit.com/r/traps.json?limit=100&?sort=top&t=day')
        .then(res => res.json())
        .then(json => json.data.children.map(v => v.data.url))
        .then(urls => postRandomCutie(urls, message))
        .catch(error => console.log(error.message));
}

function postRandomCutie(urls, message) {
    let randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
    let imageURL = urls[randomNumber];

    console.log("RandomURL: " + imageURL);

    const embed = new Discord.MessageEmbed()
        .setTitle('Notices your cute bulge UwU')
        .setImage(imageURL);

    message.channel.send(embed);
}

module.exports = {
    name: 'trap',
    aliases: ['traps'],

    execute(client, message, args) {
        loadCuties(message);
    }
}