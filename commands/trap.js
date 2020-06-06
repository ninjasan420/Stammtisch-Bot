module.exports = {
    name: 'trap',
    aliases: ['traps']
}
const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === '§trap') loadCuties(message);
});

function loadCuties() {
    fetch('https://www.reddit.com/r/traps.json?limit=100&?sort=top&t=all')
        .then(res => res.json())
        .then(json => json.data.children(v => v.data.url))
        .then(urls => postRandomCutie(urls));
}

console.log(urls[0]);

function postRandomCutie(urls) {
    const randomURL = urls[Math.floor(Math.random() * urls.length) + 1];
    const embed = new Discord.RichEmbed({
        image: {
            url: randomURL
        }
    });
    message.channel.send(embed);
}