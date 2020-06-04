const { RichEmbed } = require('discord.js');
module.exports = {
    name: 'about',
    aliases: ['info'],

    execute(client, message) {
        const embed = new RichEmbed()
            .setTitle('About')
            .setColor('RANDOM')
            .setDescription('Stammtisch bot.')
            .setFooter('Stammtisch Bot', client.user.displayAvatarURL);
        message.channel.send({ embed });
    }
};