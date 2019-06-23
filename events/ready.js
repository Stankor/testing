const Discord = require("discord.js")


module.exports = client => {
     console.log(`${client.user.username} está online`)
    // bot.user.setActivity("Stankor Bot 2.0", {type: "STREAMING", url:"a"});

    let statuses = [
        `${client.guilds.size} servidores!`,
        "Use: ;help",
        `over ${client.users.size} usuários!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

}
