module.exports = {
    name: 'echo',
    aliases: ['say', 'repeat'],

    execute(client, message, args) {
        message.channel.send(`> ${args.length !== 0 ? args.join(' ') : ':thinking:'}`);
    }
};