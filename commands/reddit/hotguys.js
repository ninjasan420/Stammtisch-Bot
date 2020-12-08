const fetch = require('node-fetch');

function loadCuties(message) {
    fetch('https://www.reddit.com/r/ratemycock.json?limit=100&?sort=top&t=day')
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
            url: urls[randomNumber].url,
        }
    };
    message.channel.send({ embed: myEmbed });
}

module.exports = {
    name: 'hg',
    aliases: ['hotguys'],

    execute(client, message, args) {
        try {
            loadCuties(message);
        } catch (err) {
            console.log(err);
        }
    }
}
