let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*الرسالة هي:* ${pesan}`
let teks = `*⺀نداء الى جميع المتواجدين⺀*\n\n❏ ${oi}\n\n❏ *الاعضاء هم:*\n`
for (let mem of participants) {
teks += `┣تست @${mem.id.split('@')[0]}\n`}
teks += `*└* 𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘 🍁 - 𝐁𝐨𝐭\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|منشن|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
