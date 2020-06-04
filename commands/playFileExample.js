const path = require('path');
module.exports = {
    name: 'playFile',
    aliases: ['play'],
    async execute(client, message) {
        try { require.resolve('node-opus'); } catch (err) {
            console.error('> "node-opus" is not installed.');
            try { require.resolve('opusscript'); } catch (err2) { return console.error('> "opusscript" is not installed.'); }
            return null;
        }
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.reply('You must be in a voice channel first.');
        const connection = await voiceChannel.join();
        const dispatcher = await connection.playFile(path.resolve(__dirname, '../assets/Closer.mp3'));
        dispatcher.on('end', () => {
                voiceChannel.leave();
            })
            .on('error', err => {
                console.error(err);
            });
    }
};