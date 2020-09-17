"use strict";

exports.run = (client, message, args, callback) => {
    let user = args[0] || message.author;
    message.channel.send(
        `*dreht ${user}'s dreckige Kelly Family Musik leiser und spuckt ${user} ins Gesicht*`
    );
    callback();
};
