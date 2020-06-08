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
            .setImage(client.user.displayAvatarURL)
            .setFooter('© ŇƗŇĴΔ ŞΔŇ🐸#1337,ipear42#0384');
        message.channel.send({ embed });
    }
};