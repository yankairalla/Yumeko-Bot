const fs = require("fs");
const path = require('path')
const { MessageAttachment } = require('discord.js');



module.exports = {
    name: "yumeko",
    description: "YUMEKO HAHAHA",
    execute(message, args) {
        const commandFiles = fs.readdirSync("./src/img/yumeko/");
        const randomMaxNum = Math.floor(Math.random() * commandFiles.length);
        const randomImg = commandFiles[randomMaxNum]

        const attachment = new MessageAttachment(path.join(__dirname, `../img/yumeko/${randomImg}`));

        message.channel.send(attachment);
    }
}

