// Comando de memes.
const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Carregando...")

    let {body} = await superagent
    .get(`https://apis.duncte123.me/meme`)
    console.log(image.file)
   
