module.exports = {
    name: 'ping', // command name - wird nach prefix angeführt
    aliases: ['latency'], //

    execute(client, message) {
        message.channel.send('Pinge...')
            .then(sentMsg => {
                sentMsg.edit(`:ping_pong: Pong! Hat \`${sentMsg.createdTimestamp - message.createdTimestamp}ms gedauert\``);
            });
    }
};