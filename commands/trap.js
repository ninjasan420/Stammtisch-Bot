module.exports = {
    name: 'trap',
    aliases: ['traps'],

    execute(client, message) {
        loadCuties();
    }
}

const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();

function loadCuties() {
    fetch('https://www.reddit.com/r/traps.json?limit=100&?sort=top&t=all')
        .then(res => res.json())
        .then(json => json.data.children.map(v => v.data.url))
        .then(urls => postRandomCutie(urls));
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

    // console.log("RandomURL: " + imageURL);
    message.channel.send(imageURL);
}