const { RichEmbed } = require('discord.js');
// Make sure to export properties
module.exports = {
    name: 'stats', // Command name (what's gonna be used to call the command)

    execute(client, message) {
        // Construct info embed
        const embed = new RichEmbed()
        .setTitle('About')
        .setColor('RANDOM')
        .setDescription('Stats about this bot')
        .addField('Created', client.user.createdAt)
        .addField('Heap Usage', `${Math.round(process.memoryUsage().heapUsed / 1048576)}mb`, true) // 1048576 = size of an mb in bytes
        .addField('Uptime', formatTime(process.uptime()), true)
        .setFooter('Discord Example Bot', client.user.displayAvatarURL);
        // Send message
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
