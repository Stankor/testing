const Discord = require("discord.js")


module.exports = client => {
     console.log(`${client.user.username} está online`)
    // bot.user.setActivity("Stankor Bot 2.0", {type: "STREAMING", url:"a"});

    let statuses = [
        `${bot.guilds.size} servers!`,
        "!help",
        `over ${bot.users.size} users!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

}
