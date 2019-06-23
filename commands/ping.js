// Comando de ping.

const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Esse é realmente meu ping?", "Está tudo bem? Eu não consigo ver", "Eu espero que isso não seja ruim"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`:envelope_with_arrow: ${response}: :satellite: Latência do bot: \`${ping}\`, :satellite: Latência da API: \`${Math.round(client.ping)}\``)
    })

}


module.exports.config = {
    name: "ping",
    description: "PONG! Exibe a latência do bot e da api",
    usage: "!ping",
    accessableby: "Members",
    aliases: ["latency"]
}
