const { RichEmbed } = require('discord.js');
module.exports = {
    name: 'stats',

    execute(client, message) {
        const embed = new RichEmbed()
            .setTitle('About')
            .setColor('RANDOM')
            .setDescription('Stats about this bot')
            .addField('Created', client.user.createdAt)
            .addField('Uptime', formatTime(process.uptime()), true)
            .setFooter('Stammtisch Bot', client.user.displayAvatarURL);
        message.channel.send({ embed });
    }
};

function formatTime(milliseconds) {
    const sec_num = parseInt(milliseconds, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = `0${hours}`; }
    if (minutes < 10) { minutes = `0${minutes}`; }
    if (seconds < 10) { seconds = `0${seconds}`; }
    const time = `${hours}:${minutes}:${seconds}`;
    return time;
}