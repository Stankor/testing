// Comando de gatos
const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Carregando...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("Eu buguei! Tente novamente.")

        let mEmbed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setAuthor("Gatito", message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter("Sou um humano disfarçado", client.user.displayAvatarURL)

       message.channel.send({embed: mEmbed})

      msg.delete();
}

module.exports.config = {
    name: "cat",
    description: "Envia uma imagem de gato.",
    usage: ";cat",
    accessableby: "Membros",
    aliases: ["cat", "gato", "gatito"]
}
