// Comando de memes.
const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {image} = await superagent
    .get(`https://api-to.get-a.life/meme`)
    console.log(image.file)
    if(!{image}) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setAuthor(`TestBot MEMES!`, message.guild.iconURL)
        .setImage(image)
        .setTimestamp()
        .setFooter(`TEST BOT`, client.user.displayAvatarURL)

        message.channel.send({embed: mEmbed})

        msg.delete();
}


module.exports.config = {
    name: "meme",
    noalias: "No Aliases",
    description: "Sends a meme from a website!",
    usage: "!meme",
    accessableby: "Members",
    aliases: []
}
