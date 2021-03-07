module.exports = {
    name: 'fart', // command name - wird nach prefix angeführt
    aliases: ['pups'], //

    
    execute(client, message) {
        const images = ["fart1", "fart2", "fart3", "fart4", "fart5", "fart6", "fart7", "fart8", "fart9" ];
        const image = images[Math.floor(Math.random() * images.length)];

        if (command === `fart`) {
            const random = new Discord.Message
        message.channel.send('Du Pupa! :3', random)
            }
    }
    
};