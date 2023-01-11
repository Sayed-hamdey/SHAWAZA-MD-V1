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
𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗧𝗛𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗨𝗠𝗔𝗥 𝗠𝗘𝗡𝗨
┏━━━━━━━━━━━━━┓
┃ *<COMANDOS CREADOR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👑 _${usedPrefix}cajafuerte_
┣ 👑 _${usedPrefix}enable *restrict*_
┣ 👑 _${usedPrefix}disable *restrict*_
┣ 👑 _${usedPrefix}enable *autoread*_
┣ 👑 _${usedPrefix}enable *welcome*_
┣ 👑 _${usedPrefix}enable *modohorny*_
┣ 👑 _${usedPrefix}disable *autoread*_
┣ 👑 _${usedPrefix}enable *public*_
┣ 👑 _${usedPrefix}disable *public*_
┣ 👑 _${usedPrefix}enable *pconly*_
┣ 👑 _${usedPrefix}disable *pconly*_
┣ 👑 _${usedPrefix}enable *gconly*_
┣ 👑 _${usedPrefix}disable *gconly*_
┣ 👑 _${usedPrefix}banchat2_
┣ 👑 _${usedPrefix}unbanchat2_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}bc *<texto>*_
┣ 👑 _${usedPrefix}bcchats *<texto>*_
┣ 👑 _${usedPrefix}bcgc *<texto>*_
┣ 👑 _${usedPrefix}cleartpm_
┣ 👑 _${usedPrefix}restart_
┣ 👑 _${usedPrefix}update_
┣ 👑 _${usedPrefix}addprem *<@tag>*_
┣ 👑 _${usedPrefix}delprem *<@tag>*_
┣ 👑 _${usedPrefix}listprem_
┣ 👑 _${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
┣ 👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣ 👑 _${usedPrefix}resetuser_
┣ 👑 _${usedPrefix}block_
┣ 👑 _${usedPrefix}unblock_
┣ 👑 _${usedPrefix}spamgp *link*_
┣ 👑 _${usedPrefix}banlist_ 
┣ 👑 _${usedPrefix}block *<@tag>*_
┣ 👑 _${usedPrefix}unblock *<@tag>*_
┣ 👑 _${usedPrefix}setprefix *<texto>*
┣ 👑 _${usedPrefix}resetprefix
┣ 👑 _${usedPrefix}autoadmin_
┣ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ 👑 _${usedPrefix}leavegc_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "𝙇𝙄𝙎𝙏 𝗢𝗙 𝙈𝙀𝙉𝙐😌", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucreador|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
