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
            // .setDescription(cmdStr)
            .setImage(client.user.displayAvatarURL)
            .setFooter('© ŇƗŇĴΔ ŞΔŇ🐸#1337,ipear42#0384')
            .addField('?help', 'Zeigt commands an', true)
            .addField('?ping', 'Ping... Pong!', true)
            .addField('?stats', 'Zeigt Stats zum Bot an', true)
            .addField('?cock', 'Random Cock [NSFW]', true)
            .addField('?trap', 'Random trap [NSFW]', true)
            .addField('?pussy', 'Random Pussy [NSFW] ', true)
            .addField('?ww', 'Wortwitz', true)
            .addField('?pod', 'Zeigt NASA picture of the day', true);
        message.channel.send({ embed });
    },
};