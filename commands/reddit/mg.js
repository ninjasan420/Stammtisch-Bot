const getCuties = require("../lib/getCuties")

let subreddit = 'https://old.reddit.com/r/gonewildmetal'
let sorting = ''

module.exports = {
    name: 'mg',
    aliases: ['metalgirl'],

    execute(client, message, args) {
        try {
            getCuties.loadCuties(message, subreddit, sorting);
        } catch (err) {
            console.log(err);
        }
    }
}