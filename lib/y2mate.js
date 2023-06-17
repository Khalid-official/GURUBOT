case 'play': case 'song': 
 if (!text) throw 'Provide a song name' 
 const search = await (await yts(text)).all 
 if (!search || search.length == 0) throw 'I could not find your song' 
 const dreadsong = await fetchJson('https://yt.nxr.my.id/yt2?url=https://youtu.be/' + search[0].videoId + '&type=audio') 
 await client.sendMessage(m.chat, {text: dreadwait}, {quoted: m}) 
 if (!dreadsong.status || !jsoni.data.url) throw `Failed to download your song!` 
 client.sendMessage(m.chat,{document: {url:dreadsong.data.url}, fileName: `${dreadsong.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m}) 
 break;
