import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw '⚠️ *_اخبرني ماذا ابحث عنه في اليوتيوب?_*'
  let results = await yts(text)
  let tes = results.all
  console.log(tes)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_الرابط :_* ${v.url}
↳ 🕒 *_مدة المقطع  :_* ${v.timestamp}
↳ 📥 *_قبل كم تم تنزيله :_* ${v.ago}
↳ 👁 *_عدد المشاهدين :_* ${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts', 'بحث-اغنيه'] 
export default handler
