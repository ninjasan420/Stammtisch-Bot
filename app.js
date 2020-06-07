// abhängigkeiten
const { Client, Collection } = require('discord.js');
const path = require('path');
const glob = require('glob');

// config laden und client kreieren
const config = require('./config.json');
const client = new Client();

// collections für commands und alieses
client.commands = new Collection();
client.aliases = new Collection();

// commands werden geladen
function loadCommands(cmdDir) {
    // array um commands zu halten
    const items = [];
    items.push(...glob.sync(`${path.join(__dirname, cmdDir)}/**/*.js`));

    for (const item of items) {
        // chache der commands leeren
        if (require.cache[require.resolve(item)]) delete require.cache[require.resolve(item)];

        // command und alias speichern
        const command = require(item);
        client.commands.set(command.name, command);
        if (command.aliases) {
            for (const alias of command.aliases) {
                client.aliases.set(alias, command.name);
            }
        }
    }
    console.log('Commands was loaded...');
}
// ausführen und passen eines commands
loadCommands('commands');

client.user.setActivity(config.bot_settings.bot_status);

// client ready event
client.on('ready', () => {
    console.log('Bot is ready...');
    client.channels.get(`718459138513961013`).send(`Master Bot wurde deployed & ist ready`)
    client.channels.get(`718974305660305418`).send(`Dev Bot wurde deployed & ist ready`)
})

// client hält logic für nachricht
.on('message', message => {
    // ist prefix in nachricht?
    if (!message.content.startsWith(config.prefix)) return;
    // checken, ob author kein bot ist
    if (message.author.bot) return;
    // sicherstellen, dass es ein textkanal ist
    if (message.channel.type !== 'text') return;

    // nachricht wird gesplittet
    const cmd = message.content.split(/\s+/g)[0].slice(config.prefix.length);
    const args = message.content.split(/\s+/g).slice(1);

    try {
        // checken, ob die nachricht im command oder alias handler gespeichert wurde
        let command;
        if (client.commands.has(cmd)) {
            command = client.commands.get(cmd);
        } else if (client.aliases.has(cmd)) {
            command = client.commands.get(client.aliases.get(cmd));
        }

        // sicherstellen, dass der befehl existiert
        if (!command) return;

        // wenn existiert, führe aus
        command.execute(client, message, args);
        console.log(`Ran command: ${command.name}`); // command wird geprinted
    } catch (err) {
        console.error(err);
    }
});
// login
client.login(process.env.BOT_TOKEN);
// listen port um auf heroku zu laufen

const PORT = process.env.PORT || 5000