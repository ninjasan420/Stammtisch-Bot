module.exports = {
    name: 'fart', // command name - wird nach prefix angeführt
    aliases: ['pups'], //

    execute(client, message) {
        message.channel.send('Du Pupa! :3', {files: ["assets/images/fart1.gif"]})
            }
    };