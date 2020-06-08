const { RichEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['commands'],


    execute(client, message) {
        const cmdStr = client.commands.map(c => `\`${c.name}\``).join();
        const embed = new RichEmbed()
            .setTitle('Commands')
            .setColor('RANDOM')
            .addFields({ name: '§About', value: 'Infos über den Bot' }, { name: '§Help', value: 'Zeigt Commands des Bots' }, { name: '§Stats', value: 'Stats für Nerds' }, { name: '§Cock', value: '(NSFW) Grabbed von r/ratemycock Randompost' }, { name: '§Trap', value: '(NSFW) Grabbed von r/traps Randompost' }, { name: '§Pussy', value: '(NSFW) Grabbed von r/godpussy Randompost' }, { name: '§ww', value: 'Grabbed von r/wortwitzkasse Randompost' }, { name: '§Echo', value: 'Echo' }, { name: '§Ping', value: 'Ping... Pong!' }, { name: '§Pod', value: 'NASA Bild des Tages' }

            )
        message.channel.send({ embed });
    }
};