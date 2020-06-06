module.exports = {
        name: 'trap', // command name - wird nach prefix angeführt
        aliases: ['schwulis'], //

        const: Discord = require('discord.js'),

        client: on('message', message => {
            if (message.content === '§trap') loadCuties(message);
        }),

        function: loadCuties() {
            fetch('https://www.reddit.com/r/traps.json?limit=100&?sort=top&t=all')
                .then(res => res.json())
                .then(json => json.data.children.map(v => v.data.url))
                .then(urls => postRandomCutie(urls));
        }

        function postRandomCutie(urls) {
            const randomURL = urls[Math.floor(Math.random() * urls.length) + 1];
            const embed = new Discord.RichEmbed({
                image: {
                    url: randomURL
                }
            });
            message.channel.send(embed);
        }