import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants, isPrems }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age, premiumTime } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*المنشن:* ${username} ${registered ? '(' + name + ') ': ''}
*رقمك:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*رابطك:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
*حد الاستخدام:* ${limit} 𝚄𝚂𝙾𝚂
*قسط:* ${registered ? 'نعم': 'No'}
*مسجل:* ${premiumTime > 0 ? 'نعم' : (isPrems ? 'نعم' : 'لا') || ''}
*رقم العملية:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['القائمة', '/menu']], m)}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^بروفايل|profile?$/i
export default handler
