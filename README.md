# [Join my Discord](https://discord.com/invite/rErSSHT "Join my Discord")

------------


# Stammtisch Bot
Der Bot für den Discord Stammtisch

Prefix: **?** 

## Commands:

### Info

?about - Infos über den Bot

?help - zeigt verfügbare Befehle an

?stats - uptime, etc

?ping - Ping zu heroku


### Fun & commands

?pod - Postet das NASA Picture of the day

?cock - pullt von [r/ratemycock](https://old.reddit.com/r/ratemycock/ "r/ratemycock") einen random Post

?trap - pullt von [r/traps](https://old.reddit.com/r/traps "r/traps") einen random Post

?pussy - pullt von [r/godpussy](https://old.reddit.com/r/godpussy "r/pussy") einen random Post

?ww - pullt von [r/wortwitzkasse](https://old.reddit.com/r/wortwitzkasse/ "r/wortwitzkasse") einen random Post

?echo - echo



------------



# Self-hosting (Heroku)

1. Lade das repo als ein .zip file herunter und entpacke den Inhalt, wohin du möchtest.

2. Öffne einen Termin im Projekt, z.B.: `cd C:\github\stammtisch-bot-master`
und tippe: `npm install` um den Bot zu installieren

3. `client.login(process.env.BOT_TOKEN);` bei heroku unter `Settings => Config Vars` definieren: `BOT_TOKEN` = Value

4. Unter `Overview` den Bot als worker definieren

5. `Prefix` unter `config.json` definieren

**WICHTIG**

Um `node-opus` unter Windows zu installieren, musst du `windows-build-tools` installiert haben. Dies funktioniert so: `npm install -g --production windows-build-tools`

Ausserdem brauchst du `FFMPEG`, welches du so installieren kannst: `npm install -g ffmpeg-binaries`

Wenn alles funktioniert hast, kannst du den Bot mit `node app.js` ausführen.

