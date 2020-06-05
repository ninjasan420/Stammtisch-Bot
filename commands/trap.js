const axios = require('axios')
const redditPostToEmbed = require('src/utils/redditPostToEmbed.js')
const log = require('src/utils/log.js')

async function find(message) {
    let mes = message.content.slice(14)
    let args = mes.split(' ')

    try {
        if (args[0] !== undefined && args[0] > 10) {
            await message.reply(
                `:confused:`
            )
            log('Reddit traps')
            return
        } else {
            let res = await axios.get(
                `https://www.reddit.com/r/traps/top.json?limit=1`
            )
            const posts = res.data.data.children
            if (posts.length == 0) {
                log('Reddit traps')
                return await message.reply(
                    `Kann nichts neues in **${args[0]}** finden :confused: `
                )
            }

            for (const post of posts) {
                if (post.data.over_18 === true && message.channel.nsfw === false) {
                    log('Reddit random')
                    return await message.reply(
                        `Der Post ist NSWF! Bitte poste in einem NSFW Channel! :confused:`
                    )
                } else {
                    const embed = redditPostToEmbed(post)
                    await message.channel.send({ embed })
                    log('Reddit traps')
                    return
                }
            }
        }
    } catch (Error) {
        console.log(Error)
        await message.reply('Kein Subreddit heisst `' + mes + '` :confused:')
        log('Reddit traps')
        return
    }
}

module.exports = find