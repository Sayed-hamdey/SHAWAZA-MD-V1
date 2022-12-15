import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `𝗟𝗜𝗦𝗧 𝗢𝗙 𝗠𝗘𝗡𝗨`,
rows: [
      {title: "🙈 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 🙊", description: '𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗧𝗢 𝗧𝗛𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗨𝗠𝗔𝗥', rowId: `${usedPrefix}creador`},
      {title: "🎁 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝗘 🎁", description: '𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘 𝗕𝗢𝗧 𝗠𝗘𝗡𝗨', rowId: `${usedPrefix}allmenu`},
      {title: "💎 𝗠𝗘𝗡𝗨 𝗚𝗥𝗢𝗨𝗣 💎", description: '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗧𝗛𝗘 𝗠𝗘𝗡𝗨 𝗢𝗙 𝗧𝗛𝗘 𝗚𝗥𝗢𝗨𝗣 👅', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 𝗠𝗘𝗡𝗨 𝗚𝗔𝗠𝗘𝗦/𝗧𝗢𝗣𝗦 🎮", description: '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗧𝗛𝗘 𝗠𝗘𝗡𝗨 𝗢𝗙 𝗚𝗔𝗠𝗘/𝗧𝗢𝗣𝗦', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎 🔊", description: '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗧𝗛𝗘 𝗠𝗘𝗡𝗨 𝗢𝗙 𝗔𝗨𝗗𝗜𝗢𝗦', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 𝗠𝗘𝗡𝗨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 👽", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 𝗘𝗙𝗙𝗘𝗖𝗧 𝗢𝗙 𝗔𝗨𝗗𝗜𝗢 🎤", description: '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗧𝗛𝗘 𝗔𝗨𝗗𝗜𝗢 𝗘𝗙𝗙𝗘𝗖𝗧 𝗠𝗘𝗡𝗨', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠 👾", description: '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗧𝗛𝗘 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨😅', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪 🔞", description: '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗧𝗛𝗘 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 𝙈𝙀𝙉𝙐 𝗢𝗙 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗦 📲", description: '𝗧𝗛𝗜𝗦 𝗧𝗛𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🤓', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦 🖍️", description: '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗧𝗛𝗘 𝗟𝗢𝗚𝗢𝗦 𝗠𝗘𝗡𝗨 🖤', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 𝗠𝗘𝗡𝗨 𝗦𝗘𝗔𝗥𝗖𝗛 🔍", description: '𝗧𝗛𝗜𝗦 𝗧𝗛𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 😆', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ 𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 ⚒️", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 𝙈𝙀𝙉𝙐 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 👑", description: '𝗧𝗛𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗠𝗘𝗡𝗨 𝗖𝗔𝗡 𝗨𝗦𝗘 𝗕𝗬 𝗢𝗡𝗟𝗬 𝗠𝗬 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗨𝗠𝗔𝗥 🙊', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 𝗛𝗘𝗟𝗟𝗢 𝗠𝗔𝗛 𝗟𝗢𝗩𝗘 _${name}_ 💖彡*
𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗧𝗛𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗨𝗠𝗔𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨
┏━━━━━━━━━━━━━┓
┃ *<𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 👅/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣° ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}play *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}playdoc *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}playlist *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}playlist2 *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}ringtone *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}soundcloud *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}imagen *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_
┣° ඬ⃟📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣° ඬ⃟📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┣° ඬ⃟📥 _${usedPrefix}igstory *<nombre de usuario>*_
┣° ඬ⃟📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
┣° ඬ⃟📥 _${usedPrefix}fb *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┣° ඬ⃟📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}twitter *<enlace / link / url>*_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝗦", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menudescargas|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
