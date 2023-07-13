/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 قائمة الدعم」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ مرحبا ${name}* 
*┃ ➤ نتمنى منك دعمنا لاجل ان نكمل ما بدنا به*   
*┃ ➤ مجموعة الواتس الخاصه بنا : 
 ┃ https://chat.whatsapp.com/KE0sVhqolaLDIlbwsgAds9*
*┃*
*┃ 👉🏻 اذا كان لديك اي استفسارات حول البوتكلمني*
*┃ wa.me/966591049717*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|دعم|apoyar$/i
export default handler
