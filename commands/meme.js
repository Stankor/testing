// Comando de memes.
const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setAuthor(`TestBot MEMES!`, message.guild.iconURL)
        .setImage(body.file)
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
