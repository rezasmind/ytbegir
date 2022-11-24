const fs = require('fs')
const ytdl = require('ytdl-core')
const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config()

const token = process.env.token
const bot = new TelegramBot(token, {polling:true})

bot.onText(/\/video (.+)/, (msg, match) => {
    const chatId = msg.chat.id
    const videoURL = match[1]
    async () => {
        ytdl(videoURL, { quality: "18" }).pipe(
            await fs.createWriteStream("video2.mp4")
        )
    }
    bot.sendVideo(chatId,"video2.mp4")

})



// ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ",{quality: '18'}).pipe(
//   fs.createWriteStream("video2.mp4")
// );

