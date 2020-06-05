const TurndownService = require('turndown')
const turndownService = new TurndownService()
const client = require('../client')

function redditPostToEmbed(post) {
    const text = post.data;
    const extension = [".jpg", ".png", ".svg", ".mp4", ".gif"];
    const date = new Date(text["created_utc"] * 1000);
    let image;
    let pre;
    let media;
    let des;

    if (text.selftext.length > 1000) {
        des = text.selftext.substring(0, 999) + "...";
    } else {
        des = text.selftext
    }

    if (text.preview !== undefined) {
        pre = text.preview.images[0].source.url;
    }

    if (text.media !== null) {
        media = text.thumbnail
    }

    if (extension.includes(text.url.slice(-4))) {
        image = text.url;
    } else if (pre !== null || media !== null) {
        if (media !== null) {
            image = media;
        } else {
            image = pre;
        }
    } else {
        image = null;
    }

    const embed = {
        title: `${text.title}`,
        url: `https://www.reddit.com${text.permalink}`,
        author: {
            name: text.author,
            icon_url: "https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png"
        },
        description: des,
        timestamp: date,
        image: {
            url: image
        },
        color: 16729344,
        footer: {
            text: "reddit bot by ninja",
            icon_url: "https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png"
        },
        "fields": [{
                "name": `${client.emojis.find(x => x.name === 'upvote')} Upvoted von`,
                "value": `${text.ups} Personen`,
                "inline": true
            },
            {
                "name": `${client.emojis.find(x => x.name === 'comment')} Kommentiert von`,
                "value": `${text.num_comments} Personen`,
                "inline": true
            }
        ]
    };
    return embed;
};

module.exports = redditPostToEmbed