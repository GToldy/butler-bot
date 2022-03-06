const keepAlive = require("./server")

const Discord = require('discord.js')
const { Intents } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config();

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

const messageHandler = require("./commands/team_creator");

client.once('ready', () => {
    console.log(`${client.user.username} has logged in.`);
});

client.on('messageCreate', messageHandler);

keepAlive()
client.login(process.env.DISCORD_TOKEN);