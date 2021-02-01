const getCuties = require("../lib/getCuties")

let subreddit = 'https://www.reddit.com/r/bigasses'
let sorting = 'sort=top&t=day'

module.exports = {
    name: 'bigass',
    aliases: ['biga'],

    execute(client, message, args) {
        try {
            getCuties.loadCuties(message, subreddit, sorting);
        } catch (err) {
            console.log(err);
        }
    }
}