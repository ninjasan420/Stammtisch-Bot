# Stammtisch Bot
Der Bot für den Discord Stammtisch

Prefix: **?** 

## Commands:

### Info

?about - Infos über den Bot

?help - zeigt verfügbare Befehle an

?stats - uptime, etc

?ping - Ping zu heroku


### Fun & commands (mosly NSFW)

?belle - pullt von [r/BelleDelphineLewds](https://old.reddit.com/r/BelleDelphineLewds/ "r/BelleDelphineLewds") einen random Post

?bondage - pullt von [r/bondage](https://old.reddit.com/r/bondage/ "r/bondage") einen random Post

?bp - pullt von [r/BustyPetite](https://old.reddit.com/r/BustyPetite/ "r/BustyPetite") einen random Post

?btg - pullt von [r/bigtiddygothgf](https://old.reddit.com/r/bigtiddygothgf/ "r/bigtiddygothgf") einen random Post

?cock - pullt von [r/ratemycock](https://old.reddit.com/r/ratemycock/ "r/ratemycock") einen random Post

?hb - pullt von [r/hugeboobs](https://old.reddit.com/r/hugeboobs/ "r/hugeboobs") einen random Post

?mtits - pullt von [r/MassiveTitsnAss](https://old.reddit.com/r/MassiveTitsnAss/ "r/MassiveTitsnAss") einen random Post

?pa - pullt von [r/ProgrammerAnimemes](https://old.reddit.com/r/ProgrammerAnimemes/ "r/ProgrammerAnimemes") einen random Post

?thicc - pullt von [r/thiccerthanyouthought](https://old.reddit.com/r/thiccerthanyouthought/ "r/thiccerthanyouthought") einen random Post

?thicc - pullt von [r/thiccerthanyouthought](https://old.reddit.com/r/thiccerthanyouthought/ "r/thiccerthanyouthought") einen random Post

?trap - pullt von [r/traps](https://old.reddit.com/r/traps "r/traps") einen random Post

?pussy - pullt von [r/godpussy](https://old.reddit.com/r/godpussy "r/pussy") einen random Post

?ww - pullt von [r/wortwitzkasse](https://old.reddit.com/r/wortwitzkasse/ "r/wortwitzkasse") einen random Post

?pod - Postet das NASA Picture of the day

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

