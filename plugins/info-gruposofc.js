let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
✪𝗨𝗗-𝗠𝗗-𝗩1 𝗕𝗢𝗧 𝗢𝗙𝗙𝗜𝗖𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 𝗟𝗜𝗡𝗞✪
▒▒▒▒▒▒▐███████▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐░▀░▀░▀░▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄▒
▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐▒
*Owner° wa.me/19294515557*

*2° https://chat.whatsapp.com/Gz1gioZ6qBf9QPFyB6z1HE*
███▀▀▀▀███████████████
██░░░░░▄██████████████
█▌░░░░████░░██░░██░░██
██░░░░░▀██████████████
███▄▄▄▄███████████████
`.trim(), wm, media, [['🙊 𝙼𝙰𝙸𝙽 𝙼𝙰𝙽𝚄 🖤', '#allmenu']], m)
handler.command = /^linkgc|gruposofc$/i
export default handler
