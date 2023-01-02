//Simple Code For Discord Bot By Lzybee
//Inspired by BorzXy 

const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    let prefix = "Your Prefix";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (cmd == `${prefix}hello`) {
        message.reply("World")
    }
});


client.login('Your Bot Token');