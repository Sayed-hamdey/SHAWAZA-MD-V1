import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝗨𝗗-𝗠𝗗-𝗩1❗] 𝙼𝙸𝚂𝚂𝙸𝙽𝙶 𝚂𝙾𝙽𝙶 𝙽𝙰𝙼𝙴,𝙿𝙻𝙴𝙰𝚂𝙴 𝙸𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙲𝙾𝙼𝙰𝙽𝙳 𝙿𝙻𝚄𝚂 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴/𝚃𝙸𝚃𝙻𝙴 𝙾𝙵 𝚃𝙷𝙴 𝚂𝙾𝙽𝙶 🖤😌 *\n\n*—◉ 𝙵𝙾𝚁 𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command} 𝙿𝙸𝙽𝙳𝙸 𝙱𝙾𝚈𝚂 - 𝙱𝙴𝚂𝚃*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝗨𝗗-𝗠𝗗-𝗩1❗] 𝙷𝙴𝚈 𝙼𝙰𝙷 𝙻𝙾𝚅𝙴 𝙸𝙼 𝚂𝙾𝙾 𝚂𝙾𝚁𝚁𝚈,𝙸 𝙲𝙾𝚄𝙻𝙳𝙽'𝚃 𝙵𝙸𝙽𝙳 𝚃𝙷𝙴 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾 𝚃𝚁𝚈 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝙽𝚄𝙼𝙱𝙴𝚁/𝚃𝙸𝚃𝙻𝙴😌👅🙊*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${url}`, buttonText: { displayText: '🤤 𝐀𝐔𝐃𝐈𝐎 🤤' }, type: 1 },
{ buttonId: `#ytmp4 ${url}`, buttonText: { displayText: '👀 𝐕𝐈𝐃𝐄𝐎 👀' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '🔥 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 🔥' }, type: 1 }, ]    
let texto1 = `*◉—⌈🔥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 🇵🇰⌋—◉*\n
❏ 📌 *𝚃𝙸𝚃𝙻𝙴:* ${title}
❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲:* ${publishedTime}
❏ ⌚ *𝙳𝚄𝚁𝙰𝙸𝙾𝙽:* ${durationH}
❏ 👀 *𝚅𝙸𝙴𝚆𝚂:* ${viewH}
❏ 📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}`.trim()
let buttonMessage = {
"document": { url: "https://wa.me/19294515557" }, 
"fileName": '❏ 🌿 ʏᴏᴜᴛᴜʙᴇ 𝙿𝙻𝙰𝚈𝙴𝚁 👅', 
"mimetype": 'application/vnd.ms-excel',
"caption": texto1,
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": wm,
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `${title}`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": await (await fetch(thumbnail)).buffer(),
"mediaUrl": `${url}`,
"sourceUrl": `https://github.com/umar404/Ud-Md-V1` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙻𝙴𝚂𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽 😪*')}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
