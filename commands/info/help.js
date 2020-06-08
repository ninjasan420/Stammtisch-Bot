const { RichEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['commands'],


    execute(client, message) {
        const cmdStr = client.commands.map(c => `\`${c.name}\``).join();
        const embed = new RichEmbed()
            .setTitle('Prost!')
            .setColor('RANDOM')
            .setAuthor('Commands')
            .setDescription(cmdStr)
            .setImage('https://brauen.de/media/image/cb/80/65/Die-Krone-des-Bieres-Wie-entsteht-der-Schaum-auf-dem-Bier.jpg')
            .setFooter('© ŇƗŇĴΔ ŞΔŇ🐸#1337,ipear42#0384');
        message.channel.send({ embed });
    }
};