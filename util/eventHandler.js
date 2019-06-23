const reqEvent = (event) => require(`../events/${event}`)

module.exports = client => {
    bot.on("ready", function() {reqEvent("ready") (client) });
    bot.on("reconnecting", () => reqEvent("reconnecting") (client))
    bot.on("disconnect", () => reqEvent("disconnect") (client))
    bot.on("warn", reqEvent("warn"))
    bot.on("error", reqEvent("error"))
