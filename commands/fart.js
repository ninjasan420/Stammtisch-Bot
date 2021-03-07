module.exports = {
    name: 'fart', // command name - wird nach prefix angeführt
    aliases: ['pups'], //

    
    execute(client, message) {
        const num = (Math.floor(Math.random() * 5) + 1).toString();
        message.channel.send('Du Pupa! :3', { files: ["assets/images/fart${num}.gif"]})
            }
    };