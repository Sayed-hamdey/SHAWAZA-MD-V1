import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/bot.mp3'
let chat = global.db.data.chats[m.chat]
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝐒𝐇𝐀𝐖𝐀𝐙𝐀-𝐁𝐎𝐓', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}  
if (/^bot|بوت$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, '*معاك البوت أطلب واتمنى 🧞*', wm, [['𝙼𝙴𝙽𝚄 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: estiloaudio })}
return !0
}
export default handler
