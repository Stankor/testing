// Comando de memes.
const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Carregando...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    console.log(body.data.url)
}


module.exports.config = {
   name: "meme",
   noalias: "No Aliases",
   description: "Sends a meme from a website!",
   usage: "!meme",
   accessableby: "Members",
   aliases: []
}
