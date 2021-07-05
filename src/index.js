const fs = require("fs");
const Discord = require("discord.js");

const client = new Discord.Client();
client.commands = new Discord.Collection();

// A array of the commands
const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));

const { prefix } = require("../config.json");

client.on("ready", ({content}) => {
  console.log("Bot está funcionando!");
  content.channel.send("Estou funcionando!")
});

console.log(commandFiles);

commandFiles.map((file) => {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(process.env.BOT_TOKEN);
