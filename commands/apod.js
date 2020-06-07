const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const axios = require('axios');

module.exports = class spCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'apod',
            alias: 'pott'
        });
    }

    async run(message) {

        let getapod = async() => {
            let response = await axios.get(
                `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASAAPI}`
            );
            let apod = response.data;
            return apod;
        };
        let apodvalue = await getapod();
        const embed = new Discord.MessageEmbed()
            .setTitle(`NASA Bild des Tages: ${apodvalue.title}`)
            .setURL('https://apod.nasa.gov/apod/astropix.html')
            .setAuthor('NASA', 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png', 'https://www.nasa.gov')
            .setColor(0x5E00FF)
            .setDescription(`${apodvalue.explanation}`)
            .setImage(`${apodvalue.hdurl}`)
            .setTimestamp()
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle(`NASA Bild des Tages: ${apodvalue.title} (Klicke fürs Video)`)
            .setURL(`${apodvalue.url}`)
            .setAuthor('NASA', 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png', 'https://www.nasa.gov')
            .setColor(0x5E00FF)
            .setDescription(`${apodvalue.explanation}`)
            .setTimestamp()
        if (`${apodvalue.media_type}` === 'video') {
            message.channel.send(exampleEmbed)
        }
        message.channel.send({ embed })
    }
};