const { RichEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['commands'],
    execute(client, message) {
        const cmdStr = client.commands.map(c => `\`${c.name}\``).join();
        const embed = new RichEmbed()
            .setTitle('Commands')
            .setColor('RANDOM')
            .setDescription(cmdStr);
        message.channel.send({ embed });
    }
};