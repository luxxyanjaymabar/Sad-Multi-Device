import fs from 'fs' 
 import fetch from 'node-fetch' 
  
 let handler = async(m, { conn, text, usedPrefix: _p }) => { 
 let [number, pesan, boddy] = text.split `|` 
  
 let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
  
     if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m) 
     if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m) 
     if (text > 1000) return conn.reply(m.chat, 'Teks Kepanjangan!', m) 
      
     let user = global.db.data.users[m.sender] 
  
     let korban = `${number}` 
     var nomor = m.sender 
     let spam1 = `   *「 PESAN MENFES 」*\n\nDari: `*Rahasia* Pesan : ${pesan}\n\nKetik .menfes Untuk membalas pesan\n\n${global.wm}` 
  
     await conn.reply(korban + '@s.whatsapp.net', spam1, 0, { 
     contextInfo: { mentionedJid: [m.sender], 
     externalAdReply :{ 
     mediaUrl: '', 
     mediaType: 2, 
     title: global.wm,  
     body: 'Hai,Ini Balasan Pesan Dari Owner',   
     sourceUrl: sgc,  
     thumbnail: fs.readFileSync('./thumbnail.jpg') 
       }} 
      })     
  
 { 
  
     let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}` 
     conn.reply(m.chat, logs, m) 
 }} 
 handler.command = /^(menfes|menfess)$/i 
 handler.owner = false 
 handler.premium = false 
 handler.group = false 
 handler.private = false 
  
 handler.admin = false 
 handler.botAdmin = false 
  
 handler.fail = null 
 handler.limit = false 
  
 export default handler
