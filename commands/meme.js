// Comando de memes.
const Discord = require('discord.js');
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

    let msg = await message.channel.send('Carregando...')

    let {body} = await superagent
    .get(`https://apis.duncte123.me/meme`)
    // console.log(body.file)
    if(!{body}) return message.channel.send('Eu buguei! Tente novamente.')

        let mEmbed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setAuthor('Memes', message.guild.iconURL)
            .setImage(body.url)
            .setTimestamp()
            .setFooter('Sou um humano disfarçado', bot.user.avatarURL)
        message.channel.send({embed: mEmbed})

        msg.delete();

}

module.exports.config = {
    name: "meme",
    noalias: "No Aliases",
    description: "Manda um meme de um site.",
    usage: "!meme",
    accessableby: "membros",
    aliases: []
}
