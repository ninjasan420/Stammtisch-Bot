const fetch = require('node-fetch');
const redgifs = require("./redgifs")

var loadCuties = function (message, subreddit, sorting) {
    if (sorting === '') {
        sorting = 'sort=top&t=day'
    }
    fetch(subreddit+'.json?limit=100&' + sorting)
        .then(res => res.json())
        .then(json => json.data.children.map(v => v.data))
        .then(urls => postRandomCutie(urls, message))
        .catch(error => console.log(error.message));
}

function postRandomCutie(urls, message) {
    let randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
    if (urls[randomNumber].pinned === true) {
        randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
    }

    let myEmbed = {
        title: urls[randomNumber].title,
        url: 'https://reddit.com' + urls[randomNumber].permalink,
        image: {
            url: urls[randomNumber].url_overridden_by_dest,
        }
    };

    if (myEmbed.image.url.includes("redgifs")) {
        let redgifLink = redgifs.getHotlink(myEmbed.image.url)
        redgifLink.then(
            redgifLink => {
                //myEmbed.image.url = redgifLink
                //message.channel.send({ embed: myEmbed });
                message.channel.send(redgifLink)
            }
        )
    } else {
        if (myEmbed.image.url.includes('.gifv')) {
            myEmbed.image.url.replace('.gifv', '.mp4')
        }
        message.channel.send({ embed: myEmbed });
    }


}

module.exports.loadCuties = loadCuties