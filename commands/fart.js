const gifs = [
    "assets/images/fart1.gif",
    "assets/images/fart2.gif",
    "assets/images/fart3.gif",
    "assets/images/fart4.gif",
    "assets/images/fart5.gif",
    "assets/images/fart6.gif",
    "assets/images/fart7.gif",
    "assets/images/fart8.gif",
    "assets/images/fart9.gif"
]

function getRandomGif(gifs) {
    let max = gifs.length
    let num = (Math.floor(Math.random() * max))
    return gifs[num]
}

module.exports = {
    name: 'fart', // command name - wird nach prefix angeführt
    aliases: ['pups'], //


    execute(client, message,args) {
        message.channel.send('Du Pupa! :3', getRandomGif)
            }
    }
    
};