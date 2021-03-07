module.exports = {
    name: 'fart', // command name - wird nach prefix angeführt
    aliases: ['pups'], //

    
    execute(client, message) {
        const images = ["assets/images/fart1.gif", "assets/images/fart2.gif", "assets/images/fart3.gif", "assets/images/fart4.gif", "assets/images/fart5.gif", "assets/images/fart6.gif", "assets/images/fart7.gif", "assets/images/fart8.gif", "assets/images/fart9.gif" ];
        const image = images[Math.floor(Math.random() * images.length)];
        {const random = new Discord.Message
        message.channel.send('Du Pupa! :3', random)
            }
    }
    
};