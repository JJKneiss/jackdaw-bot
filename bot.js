require('dotenv').config();

const Discord = require('discord.js');
const { Client, Intents } = Discord;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
});

client.on('messageCreate', msg => {
    console.log(msg);
    if (msg.content === "ping") {
        msg.reply('pong!');
    }
});

client.login(process.env.BOT_TOKEN);