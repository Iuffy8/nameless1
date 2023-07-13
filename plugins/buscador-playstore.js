import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

let mystic = await translate(`${gPlay.descripcion}`, { to: 'ar', autoCorrect: true })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 موضوع البحث: ${gPlay.titulo}
⛓️ الرابط: ${gPlay.link}
📜 شرح مفصل: ${mystic.text}
💲 عملة العبة: ${gPlay.moneda}
💸 مبلغ شراها: ${gPlay.precio}
📈 تقيمها: ${gPlay.puntuacion}`},{quoted:m})
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] حدث خطاء اثناء جلب طلبك*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore|لعبة|لعبه)$/i
export default handler
