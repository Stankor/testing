// Comando de memes.
const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Carregando...")

    let {data} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    console.log(data.message)
}


module.exports.config = {
   name: "meme",
   noalias: "No Aliases",
   description: "Sends a meme from a website!",
   usage: "!meme",
   accessableby: "Members",
   aliases: []
}
