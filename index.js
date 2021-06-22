/*
  **** INFO SCRIPT ****
  ** Author : Nayla
  ** Recode : zeeone
  ** Don't delete the author's name and my name
  ** For new updates please visit my YouTube Channel ZEEONE OFC
  **
  **** THANKS TO ****
  ** NAYLA CHAN
  ** RYNZ
  ** ARI
  ** ARA•ARA
  ** REST API PROVIDER IN MY BOT  
*/
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const speed = require('performance-now')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const { nyz } = require('./private')
const imgbb = require('imgbb-uploader')  
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))


/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	   
const { 
	bayarLimit, 
	limitAdd
} = require('./lib/limitatm.js') 
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

img = setting.img
botname2 = setting.botname2
thumb = setting.thumb
yt = setting.yt
grub= setting.grub
apikey = nayz.apikey
auth0r = nayz.auth0r
prefix = setting.prefix
limitawal = 25
blocked = []
botname = setting.botname
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz 
numberbot = setting.numberbot
apivhtear = setting.apivhtear
author = setting.author
naylachan = setting.naylachan
namebot = setting.namebot
ownername = setting.ownername
l0lhuman = setting.l0lhuman
 

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse(fs.readFileSync('./nayla/Elite.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./nayla/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./nayla/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./nayla/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))
const _limit = JSON.parse(fs.readFileSync('./nayla/limit.json'))
const botx = JSON.parse(fs.readFileSync('./nayla/botx.json'))
const ban = JSON.parse(fs.readFileSync('./nayla/banned.json')) 
const nayXi = JSON.parse(fs.readFileSync('./nayla/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./nayla/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./nayla/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./nayla/nayXix.json')) 

 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	 
            async function starts() {
        	const nayla = new WAConnection()
            nayla.version = [2, 2119, 6] 
	        nayla.logger.level = 'warn'
	        console.log(banner.string)
        	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('SUBSCRIBE YOUTUBE ZEEONE OFC'))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Subscribe YouTube ZEEONE OFC...')		   
        	})
	        nayla.on('open', () => {
	    	success('2', 'Connected')
	    	setTimeout( () => {
	    	console.log(color(`[❗] SUBSCRIBE YOUTUBE ZEEONE OFC`, 'pink'))
	    	}, 1000)    		    	     	
         	})         	
         	nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, `Successfully connected with your WhatsApp, don't forget to subscribe https://youtube.com/channel/UCdzWwbApjkyODby7_MoRYlA for more update`, MessageType.text)
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})
        nayla.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			nayla.sendMessage(call, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/6285706666337', MessageType.text)
			.then(() => nayla.blockUser(call, "add"))
			}, 100);
		})
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
            nayla.on('group-participants-update', async(chat) => {
        try {
            mem = chat.participants[0]
            try {
                var pp_user = await nayla.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                var pp_group = await nayla.getProfilePicture(chat.jid)
            } catch (e) {
                var pp_group = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (chat.action == 'add') {
            	ini_user = nayla.contacts[mem]
                group_info = await nayla.groupMetadata(chat.jid)
                ini_img = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=e966d3aac613b61dabd35cc6&img1=${pp_user}&img2=${pp_group}&background=${img}&username=${ini_user.notify}&member=${group_info.participants.length}&groupname= ${group_info.subject}`)
                welkam = `Hi @${mem.split('@')[0]}\n`
				welkam += `◪ Welcome in group:\n`
				welkam += `├─ ${group_info.subject}\n`
				welkam += `├─ Please introduce yourself\n`
				welkam += `├─ ❏ Name:\n`			
				welkam += `├─ ❏ Age: \n`
				welkam += `├─ ❏ Country: \n`
				welkam += `├─ ❏ Gender:\n`
				welkam += `└─ ❏ Number: ${mem.replace('@s.whatsapp.net', '')}\n`
				welkam += `We hope you enjoy~~\n`
                await nayla.sendMessage(chat.jid, ini_img, MessageType.image, { caption: welkam })
            }
            if (chat.action == 'remove') {
            	ini_user = nayla.contacts[mem]
                group_info = await nayla.groupMetadata(chat.jid)
                ini_img = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=e966d3aac613b61dabd35cc6&img1=${pp_user}&img2=${pp_group}&background=${img}&username=${ini_user.notify}&member=${group_info.participants.length}&groupname= ${group_info.subject}`)
                ini_out = `Bye bye🥳 @${mem.split('@')[0]} Please donate if you want to come back here again`
                await nayla.sendMessage(chat.jid, ini_img, MessageType.image, { caption: ini_out })
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	                 
	        
	        nayla.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.prefix
			global.blocked				 
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	runtime = process.uptime()   
	      	const fake3 = `${namebot}` 	
	      	const nay1 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': fake3, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`image/${thumb}.jpg`)} } }	
        	const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false
			const isNayXi = isGroup ? nayXi.includes(from) : false			     
			const isNayXix = isGroup ? nayXix.includes(from) : false			 		 
			const isPrem = prem.includes(sender) || isOwner				
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotx = isGroup ? botx.includes(from) : false
			pushname = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined									            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR ${command} TIDAK TERDAFTAR DIDALAM MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: nay1})
			}
			const nayz = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addEliteUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./nayla/Elite.json', JSON.stringify(_Elite))
            }	
            const checkEliteUser = (sender) => {
	        let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
        	 mess = {
				wait: '```Wait a minutes...```',
				success: '```Success```',
				error: {
				 bug: '```An Error Occurred Try Contacting Owner To Report Error```',
				stick: '```Failed, an error occurred while converting the image to a sticker, try again```',
				Iv: '```Invalid link```'
				},
			only: {
				group: '```Sorry, this command can only be used in groups```',
				benned: '```Sorry, your number has been banned, contact the bot owner to open your ban```',
				ownerG: '```Sorry, this command can only be used by the group owner```',
				ownerB: '```Sorry, this command can only be used by the bot owner```',
				premium: '```Sorry, this feature is only for premium users```',
				userB: `Hai ${pushname} You are not registered in the database, please type ${prefix}verify`,
				admin: '```Sorry, this command can only be used by group admins```',
				Badmin: '```Sorry this command can only be used when the bot is admin```',
				}
			}    
      
            const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = nayBulan[moment().format('MM') - 1]
			const isElite = checkEliteUser(sender)
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
            const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod"]
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			var _0x5510=["\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x33\x31\x33\x36\x35\x30\x35\x35\x39\x31\x2D\x31\x36\x31\x34\x39\x35\x33\x33\x33\x37\x40\x67\x2E\x75\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x6D\x67\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74\x2F\x64\x2F\x66\x2F\x41\x74\x30\x78\x37\x5A\x64\x49\x76\x75\x69\x63\x66\x6A\x6C\x66\x39\x6F\x57\x53\x36\x41\x33\x41\x52\x39\x58\x50\x68\x30\x50\x2D\x68\x5A\x49\x56\x50\x4C\x73\x49\x37\x30\x6E\x4D\x2E\x65\x6E\x63","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","","\x2B\x49\x61\x2B\x44\x77\x69\x62\x37\x30\x59\x31\x43\x57\x52\x4D\x41\x50\x39\x51\x4C\x4A\x4B\x6A\x49\x4A\x74\x35\x34\x66\x4B\x79\x63\x4F\x66\x42\x32\x4F\x45\x5A\x62\x54\x55\x3D","\x32\x38\x37\x37\x37","\x76\x58\x6D\x52\x52\x37\x5A\x55\x65\x44\x57\x6A\x58\x79\x35\x69\x51\x6B\x31\x37\x54\x72\x6F\x77\x42\x7A\x75\x77\x52\x79\x61\x30\x65\x72\x72\x41\x46\x6E\x58\x78\x62\x47\x63\x3D","\x73\x52\x39\x44\x32\x52\x53\x35\x4A\x53\x69\x66\x77\x34\x39\x48\x65\x42\x41\x44\x67\x75\x49\x32\x33\x66\x57\x44\x7A\x31\x61\x5A\x75\x34\x66\x61\x57\x47\x2F\x43\x79\x52\x59\x3D","\x2F\x76\x2F\x74\x36\x32\x2E\x37\x31\x31\x38\x2D\x32\x34\x2F\x32\x31\x34\x32\x37\x36\x34\x32\x5F\x38\x34\x30\x39\x35\x32\x36\x38\x36\x34\x37\x34\x35\x38\x31\x5F\x35\x37\x32\x37\x38\x38\x30\x37\x36\x33\x33\x32\x37\x36\x31\x34\x33\x30\x5F\x6E\x2E\x65\x6E\x63\x3F\x6F\x68\x3D\x33\x66\x35\x37\x63\x31\x62\x61\x32\x66\x63\x61\x62\x39\x35\x66\x32\x63\x30\x62\x62\x34\x37\x35\x64\x37\x32\x37\x32\x30\x62\x61\x26\x6F\x65\x3D\x36\x30\x32\x46\x33\x44\x36\x39","\x31\x36\x31\x30\x39\x39\x33\x34\x38\x36","\x69\x6D\x61\x67\x65\x2F","\x2E\x6A\x70\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6F\x61\x64\x63\x61\x73\x74","\x69\x6D\x61\x67\x65\x2F\x6A\x70\x65\x67","\x42\x45\x47\x49\x4E\x3A\x56\x43\x41\x52\x44\x5C\x6E\x56\x45\x52\x53\x49\x4F\x4E\x3A\x33\x2E\x30\x5C\x6E\x4E\x3A\x58\x4C\x3B","\x2C\x3B\x3B\x3B\x5C\x6E\x46\x4E\x3A","\x2C\x5C\x6E\x69\x74\x65\x6D\x31\x2E\x54\x45\x4C\x3B\x77\x61\x69\x64\x3D","\x40","\x73\x70\x6C\x69\x74","\x3A","\x5C\x6E\x69\x74\x65\x6D\x31\x2E\x58\x2D\x41\x42\x4C\x61\x62\x65\x6C\x3A\x50\x6F\x6E\x73\x65\x6C\x5C\x6E\x45\x4E\x44\x3A\x56\x43\x41\x52\x44","\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63"];const ffoto={key:{fromMe:false,participant:`${_0x5510[0]}`,...(from?{remoteJid:_0x5510[1]}:{})},message:{'\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65':{'\x75\x72\x6C':_0x5510[2],'\x6D\x69\x6D\x65\x74\x79\x70\x65':_0x5510[3],'\x63\x61\x70\x74\x69\x6F\x6E':`${_0x5510[4]}${namebot}${_0x5510[4]}`,'\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36':_0x5510[5],'\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68':_0x5510[6],'\x68\x65\x69\x67\x68\x74':1080,'\x77\x69\x64\x74\x68':1079,'\x6D\x65\x64\x69\x61\x4B\x65\x79':_0x5510[7],'\x66\x69\x6C\x65\x45\x6E\x63\x53\x68\x61\x32\x35\x36':_0x5510[8],'\x64\x69\x72\x65\x63\x74\x50\x61\x74\x68':_0x5510[9],'\x6D\x65\x64\x69\x61\x4B\x65\x79\x54\x69\x6D\x65\x73\x74\x61\x6D\x70':_0x5510[10],'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x5510[13]](`${_0x5510[11]}${thumb}${_0x5510[12]}`)}}};const ftoko={key:{fromMe:false,participant:`${_0x5510[0]}`,...(from?{remoteJid:_0x5510[14]}:{})},message:{'\x70\x72\x6F\x64\x75\x63\x74\x4D\x65\x73\x73\x61\x67\x65':{'\x70\x72\x6F\x64\x75\x63\x74':{'\x70\x72\x6F\x64\x75\x63\x74\x49\x6D\x61\x67\x65':{'\x6D\x69\x6D\x65\x74\x79\x70\x65':_0x5510[15],'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x5510[13]](`${_0x5510[11]}${thumb}${_0x5510[12]}`)},'\x74\x69\x74\x6C\x65':`${_0x5510[4]}${botname}${_0x5510[4]}`,'\x70\x72\x6F\x64\x75\x63\x74\x49\x6D\x61\x67\x65\x43\x6F\x75\x6E\x74':10},'\x62\x75\x73\x69\x6E\x65\x73\x73\x4F\x77\x6E\x65\x72\x4A\x69\x64':`${_0x5510[0]}`}},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}};const fkontak={key:{fromMe:false,participant:`${_0x5510[0]}`,...(from?{remoteJid:`${_0x5510[1]}`}:{})},message:{'\x63\x6F\x6E\x74\x61\x63\x74\x4D\x65\x73\x73\x61\x67\x65':{'\x64\x69\x73\x70\x6C\x61\x79\x4E\x61\x6D\x65':`${_0x5510[4]}${cr}${_0x5510[4]}`,'\x76\x63\x61\x72\x64':`${_0x5510[16]}${cr}${_0x5510[17]}${cr}${_0x5510[18]}${sender[_0x5510[20]](_0x5510[19])[0]}${_0x5510[21]}${sender[_0x5510[20]](_0x5510[19])[0]}${_0x5510[22]}`,'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x5510[13]](`${_0x5510[11]}${thumb}${_0x5510[12]}`),thumbnail:fs[_0x5510[13]](`${_0x5510[11]}${thumb}${_0x5510[12]}`),sendEphemeral:true}}};const ftroli={"\x6B\x65\x79":{"\x66\x72\x6F\x6D\x4D\x65":false,"\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74":_0x5510[0],"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x5510[1]},"\x6D\x65\x73\x73\x61\x67\x65":{orderMessage:{itemCount:10,status:200,thumbnail:fs[_0x5510[13]](`${_0x5510[11]}${thumb}${_0x5510[12]}`),surface:200,message:`${_0x5510[4]}${botname}${_0x5510[4]}`,orderTitle:_0x5510[23],sellerJid:_0x5510[0]}}}
            var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: ZEEONE\n` 
            + `ORG: AUTHOR;\n`
            + `TEL;type=CELL;type=VOICE;waid=62887435047326:+62887435047326\n`
            + 'END:VCARD' 
            colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color('Private Chat', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color(groupName, 'yellow'))			 
            const xxx = '```'  
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: nay})
            nayla.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : nay})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            nayla.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : nay})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            nayla.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: nay})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json',JSON.stringify(_limit))
            return false
            }
            }    
            if (isGroup && isElite && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            bayarLimit(sender, 3)
            await reply(nyz.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
            }
            } catch (err) {
            console.error(err)
            }
            }
           var _0xb948=["\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68","\x6E\x65\x6F\x66\x65\x74\x63\x68\x20\x2D\x2D\x73\x74\x64\x6F\x75\x74","\x75\x74\x66\x2D\x38","\x52\x61\x6D\x3A","\x72\x65\x70\x6C\x61\x63\x65","\x2A","\x53\x70\x65\x65\x64\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x53\x65\x63\x6F\x6E\x64\x2A","\x30","","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x6D\x61\x67\x65\x2F","\x2E\x6A\x70\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\u2501\u2501\x20\u2772\x20\x2A\x42\x4F\x54\x20\x57\x48\x41\x54\x53\x41\x50\x50\x2A\x20\u2773\x20\u2501\u2501\x0D\x0A\x09\x0D\x0A\u256D\u2500\u2500\u2500\u2500\u2749\x20\x49\x4E\x46\x4F\x20\x20\u2749\u2500\u2500\u2500\x20\x0D\x0A","\u2502\u2756\x20\x4F\x57\x4E\x45\x52\x20\x3A\x20","\x20\x0D\x0A\u2502\u2756\x20\x41\x55\x54\x48\x4F\x52\x20\x3A\x20","\x20\x0D\x0A\u2502\u2756\x20\x4D\x4F\x4E\x54\x48\x20\x3A\x20","\x20\x0D\x0A\u2502\u2756\x20\x43\x48\x41\x54\x20\x3A\x20","\x0D\x0A\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x0D\x0A\x0D\x0A\u2706\x20\x57\x68\x61\x74\x73\x41\x70\x70\x0D\x0A\x20\x5C\x60\x5C\x60\x5C\x60\x20","\x77\x61","\x5C\x60\x5C\x60\x5C\x60\x20\x20\x0D\x0A\u26FE\x20\x44\x6F\x6E\x61\x74\x65\x0D\x0A\x20\x5C\x60\x5C\x60\x5C\x60\x20","\x64\x6F\x6E\x61\x74\x65","\x5C\x60\x5C\x60\x5C\x60\x20\x20\x0D\x0A\u2389\x20\x49\x6E\x73\x74\x61\x67\x72\x61\x6D\x0D\x0A\x20\x5C\x60\x5C\x60\x5C\x60\x20","\x69\x67","\x5C\x60\x5C\x60\x5C\x60\x20\x20\x0D\x0A\u229C\x20\x47\x69\x74\x68\x75\x62\x0D\x0A\x20\x5C\x60\x5C\x60\x5C\x60\x20","\x67\x74","\x5C\x60\x5C\x60\x5C\x60\x20\x20\x0D\x0A\u2707\x20\x47\x72\x6F\x75\x70\x20\x57\x68\x61\x74\x73\x61\x70\x70\x0D\x0A\x20\x5C\x60\x5C\x60\x5C\x60\x20","\x67\x72\x75\x62","\x5C\x60\x5C\x60\x5C\x60\x20\x0D\x0A\u229B\x20\x59\x6F\x75\x54\x75\x62\x65\x0D\x0A\x20\x5C\x60\x5C\x60\x5C\x60\x20","\x79\x74","\x5C\x60\x5C\x60\x5C\x60\x0D\x0A\x20\x0D\x0A\x20\x0D\x0A\u256D\u2500\u2500\u2772\x20\x2A\x4C\x49\x53\x54\x20\x4D\x45\x4E\x55\x2A\x20\x20\u2773\u2500\u2500\u2500\x0D\x0A","\u2502\u2022\x20","\x61\x6C\x6C\x6D\x65\x6E\x75\x0D\x0A\u2502\u2022\x20","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x67\x72\x75\x70\x6D\x65\x6E\x75\x20\x20\x0D\x0A\u2502\u2022\x20","\x70\x72\x6F\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x73\x6F\x75\x6E\x64\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x70\x6F\x72\x6E\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x63\x65\x6B\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x73\x70\x65\x73\x69\x61\x6C\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x74\x61\x67\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x67\x61\x6D\x65\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x72\x61\x6E\x64\x6F\x6D\x74\x65\x78\x74\x20\x0D\x0A\u2502\u2022\x20","\x66\x61\x73\x74\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x73\x65\x72\x74\x69\x66\x69\x6B\x61\x74\x20\x0D\x0A\u2502\u2022\x20","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x73\x74\x69\x63\x6B\x6D\x65\x6E\x75\x20\x0D\x0A\u2502\u2022\x20","\x6E\x65\x77\x73\x6D\x65\x6E\x75","\x0D\x0A\u2570\u2500\u2500\u2772\x20","\x62\x6F\x74\x6E\x61\x6D\x65\x32","\x20\u2773\u2500\u2500\u2500\x0D\x0A\x0D\x0A\u256D\u2500\u2500\u2749\x20\x2A\x54\x48\x41\x4E\x4B\x53\x20\x54\x4F\x2A\x20\u2749\u2500\u2500\u2500\x0D\x0A","\u2502\u2756\x20\x41\x4C\x4C\x20\x43\x52\x45\x41\x54\x4F\x52\x20\x42\x4F\x54\x20\x0D\x0A\u2502\u2756\x20\x4E\x41\x59\x4C\x41\x43\x48\x41\x4E\x20\x0D\x0A\u2502\u2756\x20\x52\x59\x4E\x5A\x20\x0D\x0A\u2502\u2756\x20\x4C\x4F\x4C\x49\x20\x4B\x49\x4C\x4C\x45\x52\x53\x20\x0D\x0A\u2502\u2756\x20\x41\x52\x41\x2D\x41\x52\x41\x20\x0D\x0A\u2502\u2756\x20\x5A\x45\x45\x4F\x4E\x45","\x0D\x0A\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x0D\x0A\x0D\x0A\u2501\u2501\x20\u2772\x20\x2A\x42\x4F\x54\x20\x57\x48\x41\x54\x53\x41\x50\x50\x2A\x20\u2773\x20\u2501\u2501\x0D\x0A","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x39\x35\x32\x33\x32\x35\x38\x36\x34\x39\x2D\x31\x36\x30\x34\x35\x39\x35\x35\x39\x38\x40\x67\x2E\x75\x73","\x31\x37\x34\x32\x33\x38\x36\x31\x34\x35\x36\x39\x34\x38\x31","\x49\x4E\x51\x55\x49\x52\x59","\x43\x41\x54\x41\x4C\x4F\x47","\x41\x52\x36\x78\x42\x4B\x62\x58\x5A\x6E\x30\x58\x77\x6D\x75\x37\x36\x4B\x73\x79\x64\x37\x72\x6E\x78\x49\x2B\x52\x78\x38\x37\x48\x66\x69\x6E\x56\x6C\x57\x34\x6C\x77\x58\x61\x36\x4A\x41\x3D\x3D","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const stc=nay[_0xb948[1]][_0xb948[0]];if(stc){if(stc[_0xb948[2]]== 7292){const timestamp=speed();const latensi=speed()- timestamp;exec(`${_0xb948[3]}`,(_0xbfccx4,_0xbfccx5,_0xbfccx6)=>{const _0xbfccx7=_0xbfccx5.toString(_0xb948[4]);const _0xbfccx8=_0xbfccx7[_0xb948[6]](/Memory:/,_0xb948[5]);const _0xbfccx9=`${_0xb948[7]}${_0xbfccx8}${_0xb948[8]}${latensi[_0xb948[9]](4)}${_0xb948[10]}`;reply(_0xbfccx9)})}};if(stc){if(stc[_0xb948[2]]== 7446){numbernye= _0xb948[11];var itsmee=`${_0xb948[12]}${numbernye}${_0xb948[13]}`;var splitt=`${_0xb948[12]}${cr}${_0xb948[12]}`;wew= fs[_0xb948[16]](`${_0xb948[14]}${thumb}${_0xb948[15]}`);const bruhhhhh={contextInfo:{participant:itsmee,quotedMessage:{extendedTextMessage:{text:splitt}}}};alphay= `${_0xb948[17]}${xxx}${_0xb948[18]}${ownername}${_0xb948[19]}${auth0r}${_0xb948[20]}${bulan}${_0xb948[21]}${tchat}${_0xb948[12]}${xxx}${_0xb948[22]}${setting[_0xb948[23]]}${_0xb948[24]}${setting[_0xb948[25]]}${_0xb948[26]}${setting[_0xb948[27]]}${_0xb948[28]}${setting[_0xb948[29]]}${_0xb948[30]}${setting[_0xb948[31]]}${_0xb948[32]}${setting[_0xb948[33]]}${_0xb948[34]}${xxx}${_0xb948[35]}${prefix}${_0xb948[36]}${prefix}${_0xb948[37]}${prefix}${_0xb948[38]}${prefix}${_0xb948[39]}${prefix}${_0xb948[40]}${prefix}${_0xb948[41]}${prefix}${_0xb948[42]}${prefix}${_0xb948[43]}${prefix}${_0xb948[44]}${prefix}${_0xb948[45]}${prefix}${_0xb948[46]}${prefix}${_0xb948[47]}${prefix}${_0xb948[48]}${prefix}${_0xb948[49]}${prefix}${_0xb948[50]}${prefix}${_0xb948[51]}${prefix}${_0xb948[52]}${prefix}${_0xb948[53]}${xxx}${_0xb948[54]}${setting[_0xb948[55]]}${_0xb948[56]}${xxx}${_0xb948[57]}${xxx}${_0xb948[58]}`;nayla[_0xb948[65]](from,wew,image,{quoted:{key:{fromMe:false,participant:`${_0xb948[59]}`,...(from?{remoteJid:_0xb948[60]}:{})},message:{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0xb948[61],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xb948[16]](`${_0xb948[14]}${thumb}${_0xb948[15]}`),"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":10,"\x73\x74\x61\x74\x75\x73":_0xb948[62],"\x73\x75\x72\x66\x61\x63\x65":_0xb948[63],"\x6D\x65\x73\x73\x61\x67\x65":`${_0xb948[12]}${botname2}${_0xb948[12]}`,"\x74\x6F\x6B\x65\x6E":_0xb948[64]}}},caption:alphay,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}}
            const _0x4ae3=['FlVIh','PANZU','FpbOA','zpBZJ','158359HzexhG','22037dZbBAG','kJwfq','mrmPP','hhxfT','e)\x20{}','KyDwR','0-9a-','kelzE','vTPXb','actio','zA-Z_','lKSrp','FTvsv','vIklI','FmhAI','ype=V','1JKPfng','\x20(tru','ctor(','ayPgI','APARF','Iysmz','LmKdl','DsOaF','FRYAx','owner','SKPJK','ZEEON','n\x20(fu','while','debu','wEoOi','excep','conso','vyJjq','log','RIBE\x20','\x5c+\x5c+\x20','ieIvb','sSSdd','TtFvq','ber','ebUgl','QPwNC','__pro','NCAdg','qeKbu','Psinl','conte','jNwxY','IpEiv','AOqqh','END:V','rfJBn','xzQgL','sendM','onedJ','TEL;t','sqpkX','ijEyU','lpHIO','jid','XsjPm','fgwVL','FxHvo','VERSI','lbWID','GQnNb','tDjFd','CARD','PvuEh','{}.co','n()\x20','grdBU','xtInf','eqiVe','hLBxs','DDpoh','LSqYU','eXONv','qvHkf','bgsoB',']+(\x20+','TEwIn','YOYvZ','XcYCD','toStr','mxfGQ','*(?:[','DcOCd','ing','ckOtU','fTuoR','ype=C','n\x20/\x22\x20','FbzJL','RJxKa','FteGN','quote','CoKiQ','AyENn','JyBiG','ELL;t','ion\x20*','test','308856Wuyqll','^([^\x20','11447SUcSRn','wvuwi','\x20owne','r\x20num','LnFZn','\x22retu','apply','gger','yOYiF','aLVsT','ElhaX','JGPxX','Glkph','nctio','menti','QfNxT','input','CXLYs','a-zA-','gapKb','uBOHH','state','bTvRI','FQaXj','ZZfOY','hZELt','yiMdG','funct','FnOeG','dCEXY','rumvQ','proto','essag','hPlTf','UudNn','bind','[^\x20]+','FN:','CGgeT','AiHnk','2XAUGcG','Uhqlt','zjTut','trim','Cudky','4RANJNt','ziNAz','aJxdy','WMKPK','AopON','AcWbW','chDma','info','RVpqg','CaluE','XZNzF','ayNam','ength','BHcqs','zDDTe','PszEg','WXhaG','type','hhFnK','yFDuq','HisNH','1543XROonP','HeOEX','gtXSy','fgkBr','gaTzA','WfNGi',':VCAR','BYofF','jZLpa','IJmBc','eHukp','GnmgF','name','WNAqh','WwKRw','DdgTF','qwGWY','cNOsW','FXqRU','SwyXD','aoizM','pVAoy','jnoXM','to__','lVCFt','avxEp','jRcPz','fAhIL','gxLdR','waid=','RUeZF','NKWTu','const','ddELC','bwcRh','MWean','FhWZL','JZLWP','SiVQD','s\x20+\x20\x22','iTwUh','sRNxJ','ON:3.','vpUwJ','This\x20','fileL','mbXDr','Z_$][','init','EzQLf','^\x20]}','TdIIy','Numbe','VwEFv','is\x20my','Bmqbc','nGjwk','+\x20thi','ugOuT','qdOXJ','FAVsb','ehHBW','kuKvQ','text','BEGIN','ukfMM','nRmfy','ructo','CmueG','VwDRe','AAHqt','15sUcqxM','NwUzz','OICE;','table','lstkE','zNQvw','gfJMu','qWpeH','HnJEf','DULML','mFVWE','gmorJ','ClBNz','khfJL','YLnZY','zhzIR','yCTxB','LRgWv','ORG:\x20','count','rn\x20th','$]*)','NqhWX','YuEvP','mvqXz','warn','displ','lzoDA','retur','fDGlh','\x5c(\x20*\x5c','strin','MYRcO','CbTib','sSJFR','jmVUC','uEGYV','Aingh','xtupU','LaYLB','gJTxn','call','bUzcN',')+)+[','HaoJv','14452wFFKRZ','UtzCL','KMWZV','lengt','nliOD','ReOib','chain','dPHtg','nstru','oqduW','JJsEy','HYKQL','push','Tdwlt','E\x20OFC','LwcYR','OywDF','tion','EGbPP','xjUhL','is\x22)(','YhoBs','HQqmL','BMloe','trace','KtaqF','uIlJt','XDyad','MqylX','NYWIA','70652Hevlcy','TCYhm','ovjdS','domXv','gniEJ','ejsur','VnWfQ','2zAdgEg','28ormlQp','wesUY','SUBSC','IsHJG','vcard','Objec','zdiLl','UZlBh','epokV','jyFin','qbMjM','error'];const _0x5bd37f=function(_0x53ea03,_0x4c3efa,_0x20f51f,_0x40d853,_0x546663){return _0x3aee(_0x20f51f- -0x359,_0x40d853);},_0x13e6cd=function(_0x21dd3e,_0x198130,_0x150c15,_0x42101e,_0x474dde){return _0x3aee(_0x150c15- -0x359,_0x42101e);},_0x2c3bc4=function(_0xc7e47b,_0x3095fd,_0x11d618,_0x11afd4,_0x28dbd4){return _0x3aee(_0x11d618- -0x359,_0x11afd4);},_0x3c1754=function(_0x3cf50c,_0x4a02bb,_0x8f9e91,_0x5a3f49,_0x3cada8){return _0x3aee(_0x8f9e91- -0x359,_0x5a3f49);},_0x5020f6=function(_0x5c9a51,_0x55e05e,_0x1d6fef,_0x55da71,_0x187602){return _0x3aee(_0x1d6fef- -0x359,_0x55da71);};function _0x3aee(_0x5f5421,_0x51fb5c){return _0x3aee=function(_0x546ab0,_0x542de0){_0x546ab0=_0x546ab0-(-0x270e+0x72*0x2+0x1*0x277f);let _0x324bd1=_0x4ae3[_0x546ab0];return _0x324bd1;},_0x3aee(_0x5f5421,_0x51fb5c);}(function(_0x14bddc,_0x2da664){const _0x58f654=function(_0x11d3b9,_0x1f1d35,_0x19b672,_0x2cd4fc,_0x5d2299){return _0x3aee(_0x19b672- -0x9,_0x5d2299);},_0xc0a1bc=function(_0x166b0f,_0x1b92da,_0x158458,_0x44ad1e,_0x59e8ac){return _0x3aee(_0x158458- -0x9,_0x59e8ac);},_0x1d238b=function(_0x4a353b,_0x1cf520,_0x4c3f06,_0x1703b5,_0x2a97ea){return _0x3aee(_0x4c3f06- -0x9,_0x2a97ea);},_0x465c03=function(_0x381632,_0x56d6a4,_0x53ff95,_0xd0a84e,_0x561b0d){return _0x3aee(_0x53ff95- -0x9,_0x561b0d);},_0x56e521=function(_0x47eaf8,_0x107ff3,_0x5e0573,_0x78de6f,_0x1d67c8){return _0x3aee(_0x5e0573- -0x9,_0x1d67c8);};while(!![]){try{const _0x54d937=-parseInt(_0x58f654(0x16d,0x1cb,0x155,0x1f1,0x152))*-parseInt(_0xc0a1bc(0x263,0x15b,0x1de,0x141,0x1d2))+-parseInt(_0x58f654(0x1ed,0x141,0x197,0x11e,0x158))*-parseInt(_0xc0a1bc(0x250,0x278,0x231,0x1e5,0x290))+parseInt(_0x56e521(0x2af,0x248,0x241,0x26a,0x232))*-parseInt(_0x465c03(0x1fb,0x1e5,0x252,0x28f,0x237))+-parseInt(_0x56e521(0x1f7,0x2cd,0x242,0x1aa,0x200))*-parseInt(_0x465c03(0x25c,0x1e9,0x230,0x2da,0x193))+parseInt(_0x56e521(0x170,0xb3,0x153,0x141,0x126))+parseInt(_0x56e521(0xe2,0x130,0x17d,0xe5,0x166))*parseInt(_0x1d238b(0x1c0,0x194,0x20b,0x214,0x1d5))+-parseInt(_0x465c03(0x1a2,0x158,0x182,0x13b,0x149))*parseInt(_0x465c03(0x270,0x211,0x229,0x1a6,0x2a9));if(_0x54d937===_0x2da664)break;else _0x14bddc['push'](_0x14bddc['shift']());}catch(_0x13fbbb){_0x14bddc['push'](_0x14bddc['shift']());}}}(_0x4ae3,-0x1*-0x206f3+0x417*0x21+-0x2d6a));const _0x16a954=function(){const _0x503cf4=function(_0x582e75,_0x5a8af8,_0xff308f,_0x64cc19,_0x2c9484){return _0x3aee(_0xff308f-0xbc,_0x5a8af8);},_0x482353=function(_0x39f525,_0x28d77b,_0x2fc8a6,_0x1079ae,_0x1371b4){return _0x3aee(_0x2fc8a6-0xbc,_0x28d77b);},_0x38d3e2=function(_0x34842b,_0x1f34dc,_0x1166d1,_0x1e09dd,_0x4719e7){return _0x3aee(_0x1166d1-0xbc,_0x1f34dc);},_0x4cc61c=function(_0x417371,_0x869807,_0x1fc76b,_0x469ebe,_0x233d37){return _0x3aee(_0x1fc76b-0xbc,_0x869807);},_0x4084bc=function(_0x4c2154,_0x3bc1c0,_0x505b96,_0x2ea3db,_0x38d0cb){return _0x3aee(_0x505b96-0xbc,_0x3bc1c0);},_0xde0f2b={};_0xde0f2b[_0x503cf4(0x316,0x35b,0x2e6,0x2c2,0x2fa)]=function(_0x3d7d5e,_0x3e4892){return _0x3d7d5e!==_0x3e4892;},_0xde0f2b[_0x503cf4(0x3ba,0x342,0x33c,0x3c7,0x2db)]=_0x482353(0x327,0x327,0x35a,0x375,0x3dd),_0xde0f2b[_0x503cf4(0x348,0x295,0x338,0x2ec,0x35b)]=_0x503cf4(0x22e,0x223,0x24c,0x210,0x2a2),_0xde0f2b[_0x4084bc(0x32f,0x28f,0x2d5,0x2f7,0x2ae)]=function(_0x113c0b,_0x171885){return _0x113c0b!==_0x171885;},_0xde0f2b[_0x38d3e2(0x2f9,0x39a,0x303,0x31d,0x278)]=_0x4cc61c(0x20c,0x27c,0x232,0x2b5,0x29c),_0xde0f2b[_0x38d3e2(0x379,0x2ba,0x31b,0x29e,0x355)]=_0x482353(0x215,0x2fa,0x255,0x23d,0x2d3),_0xde0f2b[_0x4cc61c(0x2fc,0x204,0x291,0x2b0,0x256)]=function(_0x1d4bc9,_0x33a307){return _0x1d4bc9!==_0x33a307;},_0xde0f2b[_0x503cf4(0x2d3,0x2e6,0x35c,0x3f5,0x374)]=_0x4cc61c(0x279,0x34c,0x2e7,0x322,0x30f),_0xde0f2b[_0x482353(0x1bc,0x25d,0x222,0x207,0x186)]=_0x4cc61c(0x37d,0x37d,0x35e,0x364,0x335);const _0x43eb3f=_0xde0f2b;let _0x4fe83e=!![];return function(_0x2b8ccb,_0x147e3d){const _0x585dc4=function(_0x1ccebf,_0x593e31,_0x3e0a03,_0x5a18e4,_0x42a2b2){return _0x503cf4(_0x1ccebf-0xc7,_0x1ccebf,_0x593e31- -0x317,_0x5a18e4-0x101,_0x42a2b2-0x57);},_0x1c90a0=function(_0x57eedf,_0x5e442f,_0x5695bc,_0x4f7311,_0x47182b){return _0x38d3e2(_0x57eedf-0xb2,_0x57eedf,_0x5e442f- -0x317,_0x4f7311-0x61,_0x47182b-0x1a8);},_0x26eea1=function(_0x2cd19c,_0x291134,_0x5633cc,_0x3a958d,_0x5c0d1d){return _0x503cf4(_0x2cd19c-0x1c8,_0x2cd19c,_0x291134- -0x317,_0x3a958d-0x13e,_0x5c0d1d-0x1a5);},_0x4ea48b=function(_0x38db93,_0x5234bb,_0x5741ef,_0x5cf49c,_0x4ca085){return _0x4084bc(_0x38db93-0x35,_0x38db93,_0x5234bb- -0x317,_0x5cf49c-0x6a,_0x4ca085-0x15e);},_0x4bddaa=function(_0x4eb799,_0x5d893d,_0x850d77,_0x34e2b9,_0x257cf2){return _0x4084bc(_0x4eb799-0x136,_0x4eb799,_0x5d893d- -0x317,_0x34e2b9-0x7c,_0x257cf2-0x34);},_0x1be03c={};_0x1be03c[_0x585dc4(0x5c,0x1d,-0x20,-0x2e,0x8a)]=function(_0xb079f9,_0x54aa5d){const _0x56e4ac=function(_0x49053c,_0x41ed85,_0x7bc80,_0x4d81a1,_0xad582d){return _0x585dc4(_0xad582d,_0x49053c- -0x223,_0x7bc80-0xc9,_0x4d81a1-0x3c,_0xad582d-0x2b);};return _0x43eb3f[_0x56e4ac(-0x254,-0x1b8,-0x251,-0x269,-0x296)](_0xb079f9,_0x54aa5d);},_0x1be03c[_0x585dc4(-0x7f,-0x6e,-0x83,-0x81,-0x81)]=_0x43eb3f[_0x26eea1(0x29,0x25,0xca,0x23,0x91)],_0x1be03c[_0x26eea1(-0x134,-0xb4,-0xf4,-0xaf,-0x25)]=_0x43eb3f[_0x1c90a0(0xc6,0x21,0x32,-0x14,0x70)],_0x1be03c[_0x585dc4(-0xcf,-0xe7,-0x51,-0x115,-0x77)]=function(_0x1bce7d,_0x22c004){const _0x44b721=function(_0x532599,_0x1f8da8,_0xbc365,_0x400430,_0x2f5f31){return _0x4bddaa(_0x532599,_0xbc365-0x374,_0xbc365-0x84,_0x400430-0x93,_0x2f5f31-0x4);};return _0x43eb3f[_0x44b721(0x35d,0x392,0x332,0x2e4,0x3da)](_0x1bce7d,_0x22c004);},_0x1be03c[_0x585dc4(-0x6b,0x22,0x17,0xa1,-0x11)]=_0x43eb3f[_0x4ea48b(-0x2d,-0x14,-0x49,0x0,-0xab)],_0x1be03c[_0x585dc4(-0x39,-0x2c,-0xb7,-0x4b,-0xa3)]=_0x43eb3f[_0x1c90a0(0x3c,0x4,0x2a,-0xa6,0x98)];const _0x1ab705=_0x1be03c;if(_0x43eb3f[_0x1c90a0(-0x44,-0x86,-0x113,-0x13,-0xe9)](_0x43eb3f[_0x4ea48b(0x8b,0x45,0x8d,0x5,0x30)],_0x43eb3f[_0x4bddaa(-0x178,-0xf5,-0xcc,-0x109,-0x6d)])){const _0x5c3e96=_0x4fe83e?function(){const _0x5a5a25=function(_0x2928f8,_0x5caeef,_0x5e2844,_0x59b301,_0x1baa09){return _0x4ea48b(_0x5caeef,_0x5e2844-0x2aa,_0x5e2844-0x15a,_0x59b301-0x1a8,_0x1baa09-0x10b);},_0xb7d81a=function(_0xd321a8,_0x585658,_0x3a23f5,_0x595108,_0x4c5a47){return _0x26eea1(_0x585658,_0x3a23f5-0x2aa,_0x3a23f5-0x181,_0x595108-0x148,_0x4c5a47-0xe9);},_0x3adb08=function(_0x56205d,_0xd288d5,_0x1a302e,_0x54b4e1,_0x4977d4){return _0x26eea1(_0xd288d5,_0x1a302e-0x2aa,_0x1a302e-0x5c,_0x54b4e1-0x44,_0x4977d4-0x9c);},_0x42a986=function(_0x498896,_0x3d5b58,_0x296bf9,_0x280fc8,_0x1cb84e){return _0x585dc4(_0x3d5b58,_0x296bf9-0x2aa,_0x296bf9-0x19e,_0x280fc8-0x1da,_0x1cb84e-0x10c);},_0x3ee87e=function(_0x1dd6d0,_0xf24e43,_0x58f328,_0x5171cf,_0x3f812d){return _0x4ea48b(_0xf24e43,_0x58f328-0x2aa,_0x58f328-0xcd,_0x5171cf-0x79,_0x3f812d-0x1f4);};if(_0x1ab705[_0x5a5a25(0x337,0x34a,0x2c7,0x326,0x304)](_0x1ab705[_0x5a5a25(0x19c,0x2c9,0x23c,0x250,0x246)],_0x1ab705[_0xb7d81a(0x236,0x14f,0x1f6,0x27f,0x24a)])){if(_0x147e3d){if(_0x1ab705[_0x3adb08(0x128,0x1a8,0x1c3,0x126,0x183)](_0x1ab705[_0xb7d81a(0x332,0x237,0x2cc,0x34c,0x262)],_0x1ab705[_0xb7d81a(0x302,0x215,0x27e,0x2fe,0x2b7)])){const _0x5f115a=_0x147e3d[_0x42a986(0x168,0x181,0x1b3,0x23d,0x12a)](_0x2b8ccb,arguments);return _0x147e3d=null,_0x5f115a;}else return![];}}else _0x38b15c=_0x1d1e94;}:function(){};return _0x4fe83e=![],_0x5c3e96;}else return _0x1f9526;};}(),_0x324bd1=_0x16a954(this,function(){const _0x49cdc3=function(_0x301422,_0x563c92,_0x32e091,_0x44edb1,_0x23c69c){return _0x3aee(_0x44edb1-0x2f,_0x301422);},_0x4bd7d2=function(_0xd0a4d9,_0x5e35f5,_0x546408,_0x140caa,_0x4a904e){return _0x3aee(_0x140caa-0x2f,_0xd0a4d9);},_0x5de7f6=function(_0x1d539c,_0x2fe338,_0x3713fc,_0x4bc887,_0x4bfa81){return _0x3aee(_0x4bc887-0x2f,_0x1d539c);},_0x39aa7c=function(_0x4506d3,_0x38e5ce,_0x396db6,_0x38e9e9,_0x2682c6){return _0x3aee(_0x38e9e9-0x2f,_0x4506d3);},_0xb7e870=function(_0x5ef16e,_0x499d9a,_0x1710d1,_0x28bba4,_0x2375eb){return _0x3aee(_0x28bba4-0x2f,_0x5ef16e);},_0x229ecd={};_0x229ecd[_0x49cdc3(0x1c0,0x248,0x1cb,0x222,0x1db)]=function(_0x4eec05,_0x27c7c7){return _0x4eec05!==_0x27c7c7;},_0x229ecd[_0x49cdc3(0x1bd,0x1af,0x18b,0x1df,0x1f8)]=_0x4bd7d2(0x264,0x26c,0x358,0x2d3,0x272),_0x229ecd[_0x5de7f6(0x1bf,0x19f,0x20b,0x20a,0x198)]=_0x49cdc3(0x2db,0x1db,0x1a0,0x232,0x258)+_0x4bd7d2(0x36c,0x279,0x34b,0x2d8,0x2dc)+_0x4bd7d2(0x28b,0x1d5,0x17e,0x208,0x16c)+_0x49cdc3(0x275,0x299,0x24a,0x1f6,0x277)+'/',_0x229ecd[_0x5de7f6(0x124,0x229,0x135,0x1c4,0x1d8)]=_0x49cdc3(0x163,0x1b4,0x12f,0x18c,0x231)+_0x39aa7c(0x34d,0x25d,0x337,0x2cc,0x234)+_0xb7e870(0x15c,0x1e5,0x137,0x1b1,0x1c8)+_0x4bd7d2(0x1f1,0x242,0x1e0,0x241,0x2bd)+_0x39aa7c(0x200,0x17d,0x15b,0x201,0x22d),_0x229ecd[_0x49cdc3(0x28b,0x2d9,0x225,0x26c,0x2ad)]=function(_0x2be499){return _0x2be499();};const _0x4ead74=_0x229ecd,_0x3954e8=function(){const _0x28beb7=function(_0x24bf82,_0x2ff988,_0x27aadc,_0x2bb418,_0x2917c1){return _0x4bd7d2(_0x2bb418,_0x2ff988-0x1e0,_0x27aadc-0xc8,_0x27aadc-0x3b6,_0x2917c1-0xd2);},_0x5e4253=function(_0x2b78dc,_0x4371f2,_0x3a9cf0,_0x295130,_0x2ae124){return _0x49cdc3(_0x295130,_0x4371f2-0xd7,_0x3a9cf0-0xd8,_0x3a9cf0-0x3b6,_0x2ae124-0x149);},_0x104763=function(_0x357db7,_0x30c966,_0x4e686a,_0x3ecd76,_0x2d7a7e){return _0xb7e870(_0x3ecd76,_0x30c966-0x13b,_0x4e686a-0xd0,_0x4e686a-0x3b6,_0x2d7a7e-0x104);},_0x40be58=function(_0x4f25a8,_0x449221,_0x228562,_0x1bce42,_0x51ec96){return _0x49cdc3(_0x1bce42,_0x449221-0xf,_0x228562-0x1af,_0x228562-0x3b6,_0x51ec96-0x2a);},_0x5bee4b=function(_0x1f4f0b,_0x9020b1,_0x1905bd,_0x1bc1fb,_0x5e7931){return _0x4bd7d2(_0x1bc1fb,_0x9020b1-0x1cb,_0x1905bd-0x1ad,_0x1905bd-0x3b6,_0x5e7931-0x7f);};if(_0x4ead74[_0x28beb7(0x57a,0x535,0x5d8,0x5d4,0x625)](_0x4ead74[_0x5e4253(0x5c2,0x5de,0x595,0x5c9,0x5cf)],_0x4ead74[_0x28beb7(0x5a3,0x514,0x595,0x5f9,0x545)])){const _0x42598b=_0x197a65[_0x104763(0x5c2,0x59f,0x549,0x5f0,0x4c7)](_0x4d4ba7,arguments);return _0x1c1f3f=null,_0x42598b;}else{const _0x3a2ca8=_0x3954e8[_0x5bee4b(0x59c,0x53c,0x5a5,0x63b,0x5b1)+_0x104763(0x54f,0x60c,0x5c8,0x625,0x579)+'r'](_0x4ead74[_0x40be58(0x5db,0x583,0x5c0,0x592,0x604)])()[_0x5e4253(0x5b8,0x501,0x5a5,0x553,0x5fe)+_0x104763(0x59b,0x62f,0x5c8,0x54f,0x53d)+'r'](_0x4ead74[_0x40be58(0x620,0x579,0x57a,0x543,0x4f0)]);return!_0x3a2ca8[_0x5bee4b(0x555,0x4eb,0x540,0x53a,0x50a)](_0x324bd1);}};return _0x4ead74[_0x39aa7c(0x300,0x224,0x251,0x26c,0x246)](_0x3954e8);});_0x324bd1();const _0x51fb5c=function(){const _0x2b9da0=function(_0x5bfb5e,_0x5b52f0,_0x331252,_0x414844,_0x147dc1){return _0x3aee(_0x147dc1- -0x6a,_0x414844);},_0x5a9f62=function(_0x9672d6,_0x1385bc,_0x8a6f90,_0x5356ef,_0x205f6c){return _0x3aee(_0x205f6c- -0x6a,_0x5356ef);},_0x2c0af1=function(_0x3c20ca,_0x596427,_0x46257b,_0x19a75d,_0x1ac09f){return _0x3aee(_0x1ac09f- -0x6a,_0x19a75d);},_0x4d9cc2=function(_0x525e47,_0x13a539,_0x19fd3a,_0xc6e083,_0x3fc5cf){return _0x3aee(_0x3fc5cf- -0x6a,_0xc6e083);},_0x10c098=function(_0xc30206,_0x55c77c,_0x47a755,_0x57a227,_0x5748a6){return _0x3aee(_0x5748a6- -0x6a,_0x57a227);},_0x418e57={};_0x418e57[_0x2b9da0(0xf7,0x15a,0x18c,0x152,0x1a3)]=function(_0x2cbe01,_0x451652){return _0x2cbe01!==_0x451652;},_0x418e57[_0x2b9da0(0x29b,0x19f,0x1cd,0x280,0x1f8)]=_0x2b9da0(0x1af,0x27d,0x24a,0x298,0x209),_0x418e57[_0x2c0af1(0xd9,0x201,0xf7,0x14c,0x184)]=_0x4d9cc2(0x217,0x122,0x121,0x170,0x193),_0x418e57[_0x5a9f62(0x257,0x2a5,0x18c,0x1fa,0x22d)]=function(_0x322181,_0x33757e){return _0x322181===_0x33757e;},_0x418e57[_0x2c0af1(0x131,0x1e5,0x1ca,0x221,0x178)]=_0x5a9f62(0xbb,0xd5,0xf6,0xe9,0xf8),_0x418e57[_0x4d9cc2(0x1fa,0x17e,0x1c8,0x138,0x18e)]=_0x2c0af1(0x19b,0x113,0x141,0x13c,0x19d),_0x418e57[_0x5a9f62(0xf3,0x70,0xaf,0xee,0x11b)]=function(_0xa54871){return _0xa54871();},_0x418e57[_0x5a9f62(0x2e0,0x1e3,0x1c1,0x228,0x23d)]=_0x5a9f62(0x18f,0x23a,0x29c,0x17f,0x1fe)+_0x10c098(0x247,0x16b,0x1fb,0x16b,0x1f2)+_0x2b9da0(0x1c4,0x1d8,0x1c7,0x157,0x1e5),_0x418e57[_0x5a9f62(0x17e,0x1ae,0x1a7,0x286,0x1f6)]=_0x2c0af1(0x1c3,0x11a,0x114,0x20f,0x190)+'er',_0x418e57[_0x5a9f62(0x11c,0x1d7,0xc4,0x18e,0x15b)]=function(_0x5ac40c,_0x52868d){return _0x5ac40c===_0x52868d;},_0x418e57[_0x10c098(0x247,0x1c9,0x211,0x14b,0x1de)]=_0x2c0af1(0x5a,0x82,0xd4,0xd0,0xec);const _0x405eb0=_0x418e57;let _0x185085=!![];return function(_0x49270c,_0xb86ba8){const _0x173686=function(_0x552435,_0x33a2f1,_0x5020b1,_0x18d2b3,_0x474ee1){return _0x2c0af1(_0x552435-0x193,_0x33a2f1-0xe0,_0x5020b1-0x9,_0x33a2f1,_0x552435- -0x18b);},_0x2833dd=function(_0x4a34cd,_0x3bf864,_0xe9da4f,_0x532761,_0x3d3774){return _0x10c098(_0x4a34cd-0x10c,_0x3bf864-0x18b,_0xe9da4f-0xcc,_0x3bf864,_0x4a34cd- -0x18b);},_0x597e10=function(_0x35489c,_0x99f218,_0x4b8934,_0x149290,_0x5a7847){return _0x10c098(_0x35489c-0x1ed,_0x99f218-0x129,_0x4b8934-0x10c,_0x99f218,_0x35489c- -0x18b);},_0x254582=function(_0xe0558b,_0x4c22e8,_0x2236f5,_0x5e2370,_0x434656){return _0x10c098(_0xe0558b-0xc8,_0x4c22e8-0xa9,_0x2236f5-0x190,_0x4c22e8,_0xe0558b- -0x18b);},_0x53a437=function(_0x102e55,_0x139018,_0x5bde83,_0x5944b2,_0x58663b){return _0x2c0af1(_0x102e55-0x19c,_0x139018-0x1d0,_0x5bde83-0x98,_0x139018,_0x102e55- -0x18b);},_0x5e70d9={};_0x5e70d9[_0x173686(0x46,-0x5e,-0x3d,0x63,0x96)]=_0x405eb0[_0x173686(0xb2,0x6f,0x108,0x109,0x7b)],_0x5e70d9[_0x2833dd(-0x24,-0x7b,-0x2e,0x49,-0xd0)]=_0x405eb0[_0x2833dd(0x6b,0x8a,0x4f,0x6c,0x7c)];const _0x1dbf27=_0x5e70d9;if(_0x405eb0[_0x597e10(-0x30,-0x2a,-0xbd,-0x33,0x55)](_0x405eb0[_0x173686(0x53,0xf2,0x5d,0x9a,0x1a)],_0x405eb0[_0x53a437(0x53,0xdf,0x2f,0x2d,0xd5)])){const _0x386a00=_0x185085?function(){const _0x46047a=function(_0x2081c5,_0x5417c8,_0x2ebaff,_0x3e6a5a,_0x3cd286){return _0x173686(_0x5417c8-0x25d,_0x2ebaff,_0x2ebaff-0x79,_0x3e6a5a-0x1c3,_0x3cd286-0x12b);},_0x35b196=function(_0x18ae80,_0x31b4a0,_0x524520,_0x5db185,_0x41d99b){return _0x2833dd(_0x31b4a0-0x25d,_0x524520,_0x524520-0x1,_0x5db185-0xdf,_0x41d99b-0x173);},_0x34dd93=function(_0x5f1d64,_0x3ce9df,_0x4fc53d,_0x363f19,_0x29c6e4){return _0x254582(_0x3ce9df-0x25d,_0x4fc53d,_0x4fc53d-0x54,_0x363f19-0x124,_0x29c6e4-0x1c5);},_0xe8c747=function(_0x5c2bfa,_0x3a5d86,_0x4388f5,_0xd053ad,_0x28400e){return _0x53a437(_0x3a5d86-0x25d,_0x4388f5,_0x4388f5-0xda,_0xd053ad-0x64,_0x28400e-0xaa);},_0x988bef=function(_0x3b264d,_0x19dafd,_0x5a10bf,_0x54ca08,_0x16e8b1){return _0x53a437(_0x19dafd-0x25d,_0x5a10bf,_0x5a10bf-0x18d,_0x54ca08-0x10a,_0x16e8b1-0x9b);};if(_0x405eb0[_0x46047a(0x2df,0x275,0x1d8,0x2dd,0x2a0)](_0x405eb0[_0x35b196(0x350,0x2ca,0x356,0x22b,0x282)],_0x405eb0[_0x35b196(0x1f1,0x256,0x2e4,0x271,0x239)])){if(_0xb86ba8){if(_0x405eb0[_0x46047a(0x351,0x2ff,0x258,0x2a9,0x357)](_0x405eb0[_0x988bef(0x2e6,0x24a,0x288,0x263,0x2de)],_0x405eb0[_0x988bef(0x1e4,0x260,0x2ce,0x2a3,0x23e)])){if(_0xe2fe93){const _0x2d19b0=_0x291678[_0x34dd93(0x23a,0x1cc,0x21c,0x240,0x1ca)](_0x131c4f,arguments);return _0x50e61e=null,_0x2d19b0;}}else{const _0x50ae3e=_0xb86ba8[_0x988bef(0x150,0x1cc,0x203,0x1c4,0x12c)](_0x49270c,arguments);return _0xb86ba8=null,_0x50ae3e;}}}else return function(_0x44a9c6){}[_0x35b196(0x271,0x228,0x199,0x288,0x1c0)+_0x35b196(0x236,0x24b,0x260,0x1e0,0x2e4)+'r'](_0x1dbf27[_0x35b196(0x27a,0x2a3,0x2a8,0x30c,0x293)])[_0x35b196(0x1dc,0x1cc,0x208,0x143,0x1a8)](_0x1dbf27[_0x35b196(0x24d,0x239,0x28b,0x291,0x285)]);}:function(){};return _0x185085=![],_0x386a00;}else _0x405eb0[_0x53a437(-0x70,-0xcf,-0x69,-0x52,-0x59)](_0x261cbb);};}();(function(){const _0x2809c2=function(_0x65870,_0x40706c,_0x2a7a94,_0x3e4d06,_0x470031){return _0x3aee(_0x65870- -0x301,_0x40706c);},_0x5ee9d5=function(_0x86af5b,_0x4affef,_0x5cd217,_0x230c52,_0x170339){return _0x3aee(_0x86af5b- -0x301,_0x4affef);},_0x13f6d6=function(_0x28a539,_0xde609e,_0x2474cf,_0x852aa0,_0x707b5e){return _0x3aee(_0x28a539- -0x301,_0xde609e);},_0x2fdd92=function(_0x4248f9,_0x582a6e,_0x3b9d0c,_0x33bd8a,_0x191fd6){return _0x3aee(_0x4248f9- -0x301,_0x582a6e);},_0x573bfe=function(_0xb45b1d,_0x1cf841,_0x6ebb69,_0x4b8c95,_0x4eded3){return _0x3aee(_0xb45b1d- -0x301,_0x1cf841);},_0x5d5219={};_0x5d5219[_0x2809c2(-0x173,-0xfe,-0x1cb,-0x1fc,-0xd9)]=function(_0x13d9e2,_0x34a87e){return _0x13d9e2+_0x34a87e;},_0x5d5219[_0x2809c2(-0x175,-0xeb,-0xeb,-0xfe,-0x13d)]=_0x5ee9d5(-0x98,-0xcc,0x10,-0xfd,-0xae),_0x5d5219[_0x13f6d6(-0xd3,-0xe7,-0x7c,-0xb5,-0xab)]=_0x2809c2(-0x19c,-0x125,-0x169,-0x23b,-0xfe),_0x5d5219[_0x573bfe(-0x166,-0x134,-0x149,-0xbb,-0x12b)]=_0x2fdd92(-0x18e,-0x1ad,-0x1a5,-0x1b7,-0x1b7)+_0x5ee9d5(-0xc2,-0x58,-0x68,-0x36,-0x74)+'t',_0x5d5219[_0x5ee9d5(-0x76,-0x7a,-0x18,-0x8c,-0x10e)]=function(_0x18de1f,_0x6dcf8f){return _0x18de1f===_0x6dcf8f;},_0x5d5219[_0x2809c2(-0x83,-0x10d,-0xff,-0x24,-0x42)]=_0x573bfe(-0x160,-0xd0,-0x1b4,-0x134,-0xc4),_0x5d5219[_0x2fdd92(-0x9e,-0x42,0xc,-0xc7,-0xeb)]=_0x2809c2(-0x188,-0x196,-0x1d5,-0x1d8,-0x149)+_0x2809c2(-0x1a7,-0x1f0,-0x16d,-0x209,-0xff)+_0x573bfe(-0xfc,-0x86,-0xbe,-0xf4,-0x105)+')',_0x5d5219[_0x5ee9d5(-0x6b,-0xb3,-0xdb,-0x9b,-0x50)]=_0x2809c2(-0x91,-0x77,-0xf6,-0x77,-0x119)+_0x2fdd92(-0x5e,-0xfd,-0xde,-0xf6,-0x89)+_0x13f6d6(-0x191,-0x22c,-0x13b,-0x13d,-0xf0)+_0x13f6d6(-0x132,-0x171,-0x11a,-0x95,-0x8b)+_0x13f6d6(-0xb0,-0x8a,-0xaf,-0xf0,-0xc0)+_0x573bfe(-0xac,-0x4f,-0xbe,-0xa8,-0x154)+_0x2fdd92(-0x105,-0x13c,-0xc9,-0xd9,-0xd0),_0x5d5219[_0x13f6d6(-0x1aa,-0x1c3,-0x158,-0x21f,-0x23d)]=function(_0x257ffc,_0x4f2755){return _0x257ffc(_0x4f2755);},_0x5d5219[_0x5ee9d5(-0x90,-0xe0,-0x2a,-0x66,0x7)]=_0x13f6d6(-0x131,-0x1b3,-0xcc,-0x175,-0x104),_0x5d5219[_0x573bfe(-0x94,-0xb1,-0x41,-0x65,-0xd7)]=_0x2fdd92(-0xe7,-0xe4,-0x4c,-0x75,-0x8e),_0x5d5219[_0x13f6d6(-0xf0,-0xc3,-0x8c,-0x50,-0xca)]=_0x5ee9d5(-0x193,-0x17c,-0x187,-0x179,-0x132),_0x5d5219[_0x5ee9d5(-0x182,-0x19f,-0x220,-0x209,-0x208)]=_0x13f6d6(-0xd1,-0x53,-0x115,-0x2d,-0x167),_0x5d5219[_0x573bfe(-0x18a,-0x21a,-0x20c,-0x10d,-0x108)]=function(_0x26ecfa,_0x5955b1){return _0x26ecfa!==_0x5955b1;},_0x5d5219[_0x2fdd92(-0x181,-0x1a8,-0x190,-0xd5,-0x1f0)]=_0x13f6d6(-0x97,-0x125,-0x20,-0xaf,-0x10d),_0x5d5219[_0x573bfe(-0x7a,-0x111,-0x5b,-0x54,-0x48)]=function(_0x4f4c42){return _0x4f4c42();},_0x5d5219[_0x2809c2(-0x8b,-0x57,-0xfd,-0xaa,0x1f)]=function(_0x1f0bd3,_0x205bdd,_0x5aeae3){return _0x1f0bd3(_0x205bdd,_0x5aeae3);};const _0xd4fb3f=_0x5d5219;_0xd4fb3f[_0x13f6d6(-0x8b,-0x12f,-0x2c,-0x128,-0x85)](_0x51fb5c,this,function(){const _0x6f20bb=function(_0x594f37,_0x5e4b66,_0xfc6a79,_0x44160d,_0xd0f7de){return _0x13f6d6(_0x594f37-0x3,_0xd0f7de,_0xfc6a79-0xfc,_0x44160d-0xc,_0xd0f7de-0x1eb);},_0x27f0ba=function(_0x5bade7,_0x30d72b,_0x1ae267,_0x231adb,_0x475968){return _0x13f6d6(_0x5bade7-0x3,_0x475968,_0x1ae267-0x30,_0x231adb-0x12c,_0x475968-0xf0);},_0x53166d=function(_0xdfcaeb,_0x91d595,_0x4c65b0,_0x77045b,_0x3e699a){return _0x2809c2(_0xdfcaeb-0x3,_0x3e699a,_0x4c65b0-0x138,_0x77045b-0x69,_0x3e699a-0x1e9);},_0x546455=function(_0x151290,_0x19fae9,_0x5712da,_0x25500c,_0x4f4984){return _0x573bfe(_0x151290-0x3,_0x4f4984,_0x5712da-0xac,_0x25500c-0x174,_0x4f4984-0x19e);},_0x4ac51d=function(_0x5d882a,_0x4654ad,_0xf2f0ac,_0x148135,_0x34c609){return _0x13f6d6(_0x5d882a-0x3,_0x34c609,_0xf2f0ac-0xdf,_0x148135-0x15e,_0x34c609-0x90);};if(_0xd4fb3f[_0x6f20bb(-0x73,-0x6,-0x70,-0x51,0x16)](_0xd4fb3f[_0x6f20bb(-0x80,-0x46,-0x8d,0x28,-0x15)],_0xd4fb3f[_0x53166d(-0x80,-0x67,-0x114,-0x98,-0x15)])){const _0x42e2e3=new RegExp(_0xd4fb3f[_0x53166d(-0x9b,-0x27,-0x45,-0x122,-0x1e)]),_0x40c6bc=new RegExp(_0xd4fb3f[_0x4ac51d(-0x68,0x5,-0xea,-0xba,-0x93)],'i'),_0x4e1e0a=_0xd4fb3f[_0x27f0ba(-0x1a7,-0x20b,-0x18a,-0x14c,-0x144)](_0x5f5421,_0xd4fb3f[_0x6f20bb(-0x8d,-0xe,-0x46,-0x53,-0x16)]);if(!_0x42e2e3[_0x6f20bb(-0x1a3,-0x1e2,-0x160,-0x1d9,-0x1cd)](_0xd4fb3f[_0x53166d(-0x170,-0x178,-0x108,-0x208,-0x18c)](_0x4e1e0a,_0xd4fb3f[_0x4ac51d(-0x91,-0xc7,0x6,-0xc5,-0x2e)]))||!_0x40c6bc[_0x6f20bb(-0x1a3,-0x110,-0x127,-0x10c,-0x22a)](_0xd4fb3f[_0x546455(-0x170,-0x1b2,-0x1f5,-0x20d,-0x1ed)](_0x4e1e0a,_0xd4fb3f[_0x27f0ba(-0xed,-0x199,-0xb5,-0xd6,-0x79)])))_0xd4fb3f[_0x27f0ba(-0x73,-0xfd,0x2f,-0x89,-0x73)](_0xd4fb3f[_0x6f20bb(-0x17f,-0x10d,-0x19e,-0xf4,-0x1a3)],_0xd4fb3f[_0x546455(-0x17f,-0x15f,-0xe1,-0x195,-0x103)])?_0xd4fb3f[_0x546455(-0x1a7,-0x170,-0x1c3,-0x206,-0x1fa)](_0x4e1e0a,'0'):function(){return![];}[_0x4ac51d(-0x13e,-0x196,-0x191,-0x1d9,-0xd3)+_0x4ac51d(-0x11b,-0x190,-0x176,-0xed,-0x16e)+'r'](_0xd4fb3f[_0x6f20bb(-0x170,-0x1f7,-0xe1,-0x1b1,-0x123)](_0xd4fb3f[_0x6f20bb(-0x172,-0x172,-0x183,-0x1da,-0x13b)],_0xd4fb3f[_0x4ac51d(-0xd0,-0x104,-0x4b,-0x9e,-0xd9)]))[_0x4ac51d(-0x19a,-0x180,-0x189,-0x141,-0x1d7)](_0xd4fb3f[_0x4ac51d(-0x163,-0x10e,-0x120,-0x20b,-0x1ec)]);else{if(_0xd4fb3f[_0x4ac51d(-0x187,-0x1ee,-0x119,-0x1d9,-0x1b7)](_0xd4fb3f[_0x4ac51d(-0x17e,-0xff,-0x16e,-0x1e0,-0x1ab)],_0xd4fb3f[_0x53166d(-0x17e,-0x12f,-0x19c,-0x1d7,-0x141)]))return!![];else _0xd4fb3f[_0x53166d(-0x77,-0x1b,0x21,-0x3,0x2a)](_0x5f5421);}}else{const _0x301120=_0x1d40db?function(){const _0xd8e290=function(_0x138912,_0x2500fd,_0x74ddc1,_0x474f42,_0x85680f){return _0x546455(_0x2500fd- -0x348,_0x2500fd-0x6b,_0x74ddc1-0x1f4,_0x474f42-0x172,_0x138912);};if(_0x2c2b3e){const _0x3ab658=_0x11de69[_0xd8e290(-0x458,-0x4e2,-0x4eb,-0x4a9,-0x46d)](_0x201947,arguments);return _0x1dca89=null,_0x3ab658;}}:function(){};return _0x19b854=![],_0x301120;}})();}());const _0x585ef2=function(){const _0x14e415=function(_0x2cabb2,_0x1ac319,_0x2fbee7,_0x2ceb0a,_0x106356){return _0x3aee(_0x2ceb0a-0x2d4,_0x2cabb2);},_0x82862d=function(_0x1f2558,_0x34a829,_0x3c28a1,_0x5013b9,_0x1a7148){return _0x3aee(_0x5013b9-0x2d4,_0x1f2558);},_0x552807=function(_0x124d4e,_0xf11dab,_0x24e5e4,_0x39f3d7,_0x2e249c){return _0x3aee(_0x39f3d7-0x2d4,_0x124d4e);},_0x3ee63f=function(_0x55e7c2,_0x3be031,_0x51c0e0,_0x120ed9,_0x1b8134){return _0x3aee(_0x120ed9-0x2d4,_0x55e7c2);},_0x56af91=function(_0x41ff48,_0x1f0cb4,_0x47d2f2,_0x18e092,_0x37b994){return _0x3aee(_0x18e092-0x2d4,_0x41ff48);},_0x1acd27={};_0x1acd27[_0x14e415(0x463,0x415,0x54a,0x4ae,0x4c3)]=function(_0x4d9d4b,_0x4ad38a){return _0x4d9d4b==_0x4ad38a;},_0x1acd27[_0x14e415(0x492,0x406,0x515,0x46e,0x44f)]=function(_0x13253d,_0x4de01d){return _0x13253d+_0x4de01d;},_0x1acd27[_0x552807(0x423,0x3e9,0x421,0x44c,0x3fa)]=function(_0x2e9b07,_0x989907){return _0x2e9b07+_0x989907;},_0x1acd27[_0x552807(0x54d,0x524,0x554,0x4f8,0x576)]=function(_0x1957b5,_0x167912){return _0x1957b5+_0x167912;},_0x1acd27[_0x552807(0x5c7,0x528,0x582,0x565,0x59c)]=_0x82862d(0x522,0x4f5,0x4c2,0x4b4,0x535)+_0x3ee63f(0x469,0x4cc,0x422,0x47a,0x446)+'D\x0a',_0x1acd27[_0x82862d(0x432,0x4f3,0x41c,0x48e,0x3f3)]=_0x56af91(0x524,0x4c2,0x55d,0x560,0x55d)+_0x3ee63f(0x3f9,0x4f3,0x413,0x49e,0x40d)+'0\x0a',_0x1acd27[_0x14e415(0x468,0x4a7,0x441,0x4cb,0x49b)]=_0x552807(0x54e,0x58b,0x4c3,0x553,0x5b7)+_0x82862d(0x50f,0x4e5,0x550,0x564,0x603),_0x1acd27[_0x82862d(0x577,0x480,0x54d,0x4e9,0x575)]=_0x3ee63f(0x4eb,0x44f,0x3f4,0x4a0,0x4f6)+_0x14e415(0x54d,0x53a,0x53d,0x4aa,0x507)+_0x3ee63f(0x3b5,0x476,0x46a,0x434,0x462)+_0x552807(0x3b2,0x420,0x4d9,0x435,0x4ae)+_0x3ee63f(0x5cb,0x502,0x504,0x548,0x549),_0x1acd27[_0x14e415(0x558,0x510,0x4cb,0x4fd,0x546)]=_0x552807(0x4d6,0x3ed,0x4db,0x44d,0x4a3)+_0x552807(0x38b,0x3da,0x397,0x42e,0x3f9)+_0x3ee63f(0x552,0x471,0x530,0x4d9,0x558)+')',_0x1acd27[_0x82862d(0x473,0x523,0x480,0x4ab,0x511)]=_0x56af91(0x5a9,0x4b8,0x5ef,0x544,0x5b2)+_0x56af91(0x502,0x572,0x5b6,0x577,0x59f)+_0x3ee63f(0x39d,0x47a,0x43e,0x444,0x426)+_0x56af91(0x436,0x521,0x470,0x4a3,0x3f9)+_0x14e415(0x533,0x5ce,0x592,0x525,0x536)+_0x3ee63f(0x4b9,0x5d0,0x5b9,0x529,0x531)+_0x14e415(0x4b7,0x52c,0x491,0x4d0,0x55a),_0x1acd27[_0x56af91(0x560,0x514,0x4af,0x518,0x5b9)]=function(_0x146bc,_0x560d22){return _0x146bc(_0x560d22);},_0x1acd27[_0x552807(0x592,0x48b,0x55f,0x532,0x48c)]=_0x14e415(0x4f7,0x4a9,0x421,0x4a4,0x548),_0x1acd27[_0x82862d(0x42c,0x482,0x4bc,0x4d6,0x540)]=_0x3ee63f(0x53d,0x587,0x4bf,0x4ee,0x4fa),_0x1acd27[_0x3ee63f(0x4a3,0x513,0x4a6,0x4df,0x474)]=_0x82862d(0x45f,0x4bc,0x400,0x442,0x3e0),_0x1acd27[_0x82862d(0x46a,0x470,0x404,0x495,0x49a)]=function(_0x4eeaea){return _0x4eeaea();},_0x1acd27[_0x82862d(0x4e7,0x463,0x5a1,0x4fa,0x58e)]=function(_0x18ab94,_0x28e7e1,_0x367b26){return _0x18ab94(_0x28e7e1,_0x367b26);},_0x1acd27[_0x56af91(0x533,0x468,0x4a9,0x4f5,0x47a)]=function(_0x3f43e6,_0x58d9ba){return _0x3f43e6!==_0x58d9ba;},_0x1acd27[_0x14e415(0x4e2,0x4e9,0x4a4,0x4e0,0x434)]=_0x82862d(0x4be,0x47e,0x58d,0x516,0x51c),_0x1acd27[_0x56af91(0x3fb,0x49a,0x48b,0x467,0x450)]=_0x3ee63f(0x513,0x503,0x544,0x4bf,0x46b),_0x1acd27[_0x14e415(0x5ad,0x585,0x561,0x507,0x4a3)]=function(_0xd38d54,_0x382689){return _0xd38d54===_0x382689;},_0x1acd27[_0x14e415(0x4b9,0x4aa,0x4ec,0x4b0,0x473)]=_0x82862d(0x555,0x56f,0x4c2,0x555,0x57d),_0x1acd27[_0x552807(0x51f,0x4fd,0x56b,0x4c8,0x56d)]=_0x14e415(0x4d3,0x529,0x56a,0x559,0x59c),_0x1acd27[_0x3ee63f(0x4b9,0x533,0x417,0x49c,0x4b5)]=_0x14e415(0x3f2,0x476,0x4aa,0x45c,0x3b2),_0x1acd27[_0x82862d(0x4e2,0x496,0x4a5,0x43c,0x400)]=_0x56af91(0x5c5,0x514,0x4b0,0x527,0x535);const _0x1979a9=_0x1acd27;let _0x5249a0=!![];return function(_0x7680f6,_0x2f7455){const _0x29fee3=function(_0x1e3854,_0x12566d,_0x239395,_0x49c127,_0x4c88ab){return _0x82862d(_0x12566d,_0x12566d-0x1cc,_0x239395-0x1cd,_0x1e3854-0x3a8,_0x4c88ab-0x14c);},_0x4c2dac=function(_0x1ef4bb,_0x1fc706,_0x5214f2,_0xaa5748,_0xa51c7e){return _0x82862d(_0x1fc706,_0x1fc706-0x12b,_0x5214f2-0xa8,_0x1ef4bb-0x3a8,_0xa51c7e-0xd1);},_0xf7c3b3=function(_0x316be5,_0x308d52,_0x58f3e7,_0x43d3d4,_0x36ba05){return _0x56af91(_0x308d52,_0x308d52-0x1b0,_0x58f3e7-0xb2,_0x316be5-0x3a8,_0x36ba05-0x1b3);},_0xfebcd=function(_0x4929fc,_0x425d3a,_0x399b21,_0x537d85,_0x4b6e70){return _0x14e415(_0x425d3a,_0x425d3a-0x1c,_0x399b21-0x58,_0x4929fc-0x3a8,_0x4b6e70-0x13);};if(_0x1979a9[_0x29fee3(0x8af,0x8f6,0x8cb,0x90a,0x828)](_0x1979a9[_0x29fee3(0x844,0x824,0x86c,0x7f4,0x86c)],_0x1979a9[_0x29fee3(0x7e4,0x7b9,0x87e,0x882,0x7be)])){if(_0x5e69cb){const _0x12ed52=_0x3c67ec[_0xf7c3b3(0x7e0,0x840,0x764,0x735,0x814)](_0x512c98,arguments);return _0x269ce9=null,_0x12ed52;}}else{const _0xa8d7b9=_0x5249a0?function(){const _0x3d5f99=function(_0x2ce2fa,_0x4aef39,_0x21c005,_0x757c9a,_0x3eb600){return _0x29fee3(_0x2ce2fa- -0x26f,_0x21c005,_0x21c005-0x39,_0x757c9a-0xd8,_0x3eb600-0x3c);},_0x58b687=function(_0x5b5ad3,_0x1e8d7f,_0x41b658,_0x3bd93b,_0x4d08ad){return _0xfebcd(_0x5b5ad3- -0x26f,_0x41b658,_0x41b658-0xc5,_0x3bd93b-0x89,_0x4d08ad-0x12d);},_0x2547f3=function(_0x4502f4,_0x1f0f19,_0x43b39c,_0x3e4374,_0x4b9efa){return _0x4c2dac(_0x4502f4- -0x26f,_0x43b39c,_0x43b39c-0xae,_0x3e4374-0x16e,_0x4b9efa-0xec);},_0x4b57b1=function(_0x12d12b,_0x1769f0,_0x1a6a3d,_0x563e95,_0x5d6ba2){return _0xfebcd(_0x12d12b- -0x26f,_0x1a6a3d,_0x1a6a3d-0x16e,_0x563e95-0xfc,_0x5d6ba2-0x1f3);},_0x110f44=function(_0x4b194d,_0x853c9f,_0x1b74b6,_0x54cd34,_0x3fca67){return _0xf7c3b3(_0x4b194d- -0x26f,_0x1b74b6,_0x1b74b6-0x1dd,_0x54cd34-0x15e,_0x3fca67-0x16f);},_0x19ea1a={};_0x19ea1a[_0x3d5f99(0x6b9,0x74b,0x6e8,0x669,0x722)]=function(_0x1533dc,_0x3b93be){const _0x1b039a=function(_0x6cf727,_0x5a7184,_0x4ab472,_0x2a914a,_0x20616a){return _0x3d5f99(_0x2a914a-0x1a2,_0x5a7184-0xa,_0x20616a,_0x2a914a-0x13e,_0x20616a-0xcc);};return _0x1979a9[_0x1b039a(0x7b1,0x782,0x754,0x789,0x7e6)](_0x1533dc,_0x3b93be);},_0x19ea1a[_0x58b687(0x5c5,0x536,0x60c,0x5f5,0x5a4)]=function(_0x5a7a7c,_0x12b3c4){const _0x1a8936=function(_0x2e68ed,_0x2637e2,_0x55be7,_0x3e85b0,_0x177f52){return _0x3d5f99(_0x177f52-0x227,_0x2637e2-0x97,_0x2e68ed,_0x3e85b0-0xde,_0x177f52-0xef);};return _0x1979a9[_0x1a8936(0x81a,0x7b0,0x874,0x79c,0x7ce)](_0x5a7a7c,_0x12b3c4);},_0x19ea1a[_0x58b687(0x565,0x53b,0x5d6,0x4c7,0x5f3)]=function(_0x423c21,_0x133534){const _0x44bce7=function(_0x4dd50a,_0x3f89fe,_0x621a0d,_0x3c7341,_0x106bf4){return _0x2547f3(_0x3f89fe-0x13b,_0x3f89fe-0x5f,_0x621a0d,_0x3c7341-0xf0,_0x106bf4-0x175);};return _0x1979a9[_0x44bce7(0x65e,0x6e2,0x760,0x6f7,0x74d)](_0x423c21,_0x133534);},_0x19ea1a[_0x3d5f99(0x63e,0x6d1,0x621,0x5a4,0x5bd)]=function(_0xa3dfa,_0x4ca3d3){const _0x2553dd=function(_0x5c3b4e,_0x459b1d,_0x1a43a5,_0x54ff6a,_0x2a8567){return _0x3d5f99(_0x2a8567- -0x2b,_0x459b1d-0x11e,_0x459b1d,_0x54ff6a-0x1be,_0x2a8567-0x140);};return _0x1979a9[_0x2553dd(0x539,0x4b6,0x5d1,0x538,0x55a)](_0xa3dfa,_0x4ca3d3);},_0x19ea1a[_0x58b687(0x6a5,0x6b2,0x6a7,0x6d9,0x63c)]=function(_0x285b61,_0x2ab67a){const _0x33487a=function(_0x5bc2b3,_0x36bc80,_0x2d2590,_0xe2abeb,_0x20dffb){return _0x110f44(_0x20dffb-0xd6,_0x36bc80-0x109,_0x2d2590,_0xe2abeb-0x158,_0x20dffb-0x107);};return _0x1979a9[_0x33487a(0x693,0x665,0x724,0x6d4,0x707)](_0x285b61,_0x2ab67a);},_0x19ea1a[_0x58b687(0x597,0x628,0x55d,0x5cc,0x526)]=_0x1979a9[_0x58b687(0x69e,0x6de,0x6da,0x649,0x668)],_0x19ea1a[_0x4b57b1(0x5c2,0x5db,0x61f,0x5c6,0x5d8)]=_0x1979a9[_0x110f44(0x5c7,0x673,0x5dd,0x53e,0x605)],_0x19ea1a[_0x110f44(0x687,0x6b7,0x6de,0x6c3,0x693)]=_0x1979a9[_0x2547f3(0x604,0x5b0,0x62f,0x5e2,0x57c)],_0x19ea1a[_0x2547f3(0x696,0x6d3,0x713,0x741,0x5ec)]=_0x1979a9[_0x58b687(0x622,0x6cc,0x61b,0x6cb,0x642)],_0x19ea1a[_0x4b57b1(0x62c,0x691,0x624,0x689,0x653)]=_0x1979a9[_0x58b687(0x636,0x68f,0x68b,0x593,0x67f)],_0x19ea1a[_0x4b57b1(0x665,0x5f5,0x62a,0x6e2,0x6f1)]=_0x1979a9[_0x3d5f99(0x5e4,0x583,0x547,0x577,0x5d8)],_0x19ea1a[_0x2547f3(0x644,0x63e,0x677,0x5ec,0x665)]=function(_0x5cadea,_0x2dff33){const _0x52b47b=function(_0x422555,_0x4c5d33,_0x8d809f,_0x10a245,_0x1fd931){return _0x58b687(_0x4c5d33-0x22b,_0x4c5d33-0xa3,_0x8d809f,_0x10a245-0xda,_0x1fd931-0x1ce);};return _0x1979a9[_0x52b47b(0x874,0x87c,0x867,0x86d,0x7f1)](_0x5cadea,_0x2dff33);},_0x19ea1a[_0x58b687(0x62a,0x630,0x698,0x59e,0x605)]=_0x1979a9[_0x110f44(0x66b,0x644,0x5de,0x6eb,0x68e)],_0x19ea1a[_0x4b57b1(0x5f2,0x637,0x5a4,0x596,0x649)]=function(_0xca9551,_0x1639cc){const _0x2ead1c=function(_0x552aeb,_0x2277b0,_0x1be713,_0x483848,_0x32fa4a){return _0x4b57b1(_0x1be713-0x57,_0x2277b0-0xd5,_0x552aeb,_0x483848-0x7b,_0x32fa4a-0x46);};return _0x1979a9[_0x2ead1c(0x6b0,0x6fb,0x688,0x72f,0x5f4)](_0xca9551,_0x1639cc);},_0x19ea1a[_0x4b57b1(0x591,0x4f5,0x60f,0x5de,0x606)]=_0x1979a9[_0x4b57b1(0x60f,0x6a7,0x599,0x61b,0x5fc)],_0x19ea1a[_0x4b57b1(0x672,0x60d,0x5f8,0x6db,0x664)]=function(_0x49697d,_0xd6fb29){const _0x42868f=function(_0xd72da8,_0xcb8044,_0x3be63c,_0x2c3149,_0x4f6e2f){return _0x2547f3(_0x2c3149- -0x12a,_0xcb8044-0x1e0,_0xd72da8,_0x2c3149-0xc8,_0x4f6e2f-0xb5);};return _0x1979a9[_0x42868f(0x516,0x48d,0x47b,0x507,0x58b)](_0x49697d,_0xd6fb29);},_0x19ea1a[_0x58b687(0x686,0x625,0x6ee,0x67d,0x71d)]=_0x1979a9[_0x4b57b1(0x618,0x62d,0x68f,0x580,0x5e3)],_0x19ea1a[_0x2547f3(0x5ff,0x5ff,0x57b,0x624,0x600)]=function(_0x51fe65){const _0x26c352=function(_0x3756ba,_0x21a7b8,_0x2a665e,_0x39def5,_0x3a178d){return _0x3d5f99(_0x21a7b8- -0x3e5,_0x21a7b8-0x96,_0x3756ba,_0x39def5-0x178,_0x3a178d-0x16d);};return _0x1979a9[_0x26c352(0x209,0x1e9,0x183,0x179,0x1e5)](_0x51fe65);},_0x19ea1a[_0x2547f3(0x5bb,0x5c2,0x57c,0x5bc,0x606)]=function(_0x1eaffb,_0x366fb9,_0x32642c){const _0x58826e=function(_0x4917a8,_0x540f06,_0x51efa7,_0x22c3a0,_0x148356){return _0x3d5f99(_0x22c3a0-0x17a,_0x540f06-0x104,_0x51efa7,_0x22c3a0-0x16a,_0x148356-0xd9);};return _0x1979a9[_0x58826e(0x727,0x7d1,0x7e3,0x7ad,0x7dc)](_0x1eaffb,_0x366fb9,_0x32642c);};const _0x244f9b=_0x19ea1a;if(_0x1979a9[_0x110f44(0x62e,0x590,0x592,0x64e,0x621)](_0x1979a9[_0x4b57b1(0x619,0x639,0x5ef,0x5c5,0x584)],_0x1979a9[_0x110f44(0x5a0,0x53e,0x5f4,0x61a,0x644)])){if(_0x2f7455){if(_0x1979a9[_0x3d5f99(0x640,0x65b,0x63a,0x61f,0x687)](_0x1979a9[_0x2547f3(0x5e9,0x573,0x5aa,0x5ad,0x658)],_0x1979a9[_0x2547f3(0x601,0x64b,0x630,0x576,0x670)])){if(_0x244f9b[_0x4b57b1(0x6b9,0x741,0x66d,0x663,0x625)](_0x444f25[_0x58b687(0x5da,0x554,0x583,0x5f3,0x5ff)+_0x4b57b1(0x5a4,0x5e2,0x503,0x5c2,0x4fa)],0x107+0x172c+0xe5*0x5)){_0x5dfeab=[];for(let _0x1e46d0 of _0x533e6b){_0x3cc7f4[_0x58b687(0x62d,0x5fc,0x5c1,0x6b0,0x6ae)](_0x1e46d0[_0x4b57b1(0x695,0x5fd,0x6d4,0x602,0x5f9)]);}_0x5a6d9c=_0x244f9b[_0x4b57b1(0x5c5,0x63d,0x626,0x573,0x595)](_0x244f9b[_0x2547f3(0x565,0x57d,0x5e5,0x533,0x60f)](_0x244f9b[_0x2547f3(0x63e,0x67f,0x6e0,0x6a1,0x6c1)](_0x244f9b[_0x110f44(0x6a5,0x637,0x746,0x6c8,0x670)](_0x244f9b[_0x3d5f99(0x6a5,0x5fb,0x66b,0x6cb,0x709)](_0x244f9b[_0x3d5f99(0x597,0x572,0x584,0x578,0x623)],_0x244f9b[_0x4b57b1(0x5c2,0x65b,0x581,0x65a,0x551)]),_0x58b687(0x590,0x5ca,0x5be,0x516,0x548)+_0xf14786[_0x4b57b1(0x671,0x61c,0x677,0x6f6,0x5dc)+_0x58b687(0x5b9,0x5b9,0x5ac,0x56e,0x5bf)]+'\x0a'),_0x3d5f99(0x606,0x5bc,0x652,0x63c,0x5ed)+_0x3d5f99(0x649,0x650,0x68d,0x5d4,0x62f)+_0x3d5f99(0x67c,0x6f7,0x6b8,0x6ac,0x6ee)+_0x58b687(0x673,0x706,0x6f0,0x694,0x700)+_0x4b57b1(0x62f,0x5ce,0x69d,0x62e,0x5a3)+';\x0a'),_0x110f44(0x691,0x6db,0x69d,0x66b,0x6eb)+_0x110f44(0x6b5,0x757,0x64e,0x744,0x730)+_0x2547f3(0x566,0x551,0x603,0x54e,0x5a2)+_0x110f44(0x667,0x642,0x6d0,0x6f0,0x70a)+_0x3d5f99(0x5f6,0x60c,0x555,0x609,0x593)+_0x58b687(0x5ca,0x552,0x63c,0x5f8,0x642)+_0x5c9278[_0x3d5f99(0x671,0x630,0x673,0x6ed,0x5f6)+_0x2547f3(0x5e1,0x5d8,0x61d,0x65c,0x60c)+'r']+':'+_0x16de3a[_0x3d5f99(0x671,0x6b6,0x67a,0x673,0x616)+_0x2547f3(0x5e1,0x5ea,0x606,0x5a6,0x5d2)+'rr']+'\x0a'),_0x244f9b[_0x110f44(0x687,0x60c,0x6bc,0x72a,0x608)][_0x2547f3(0x596,0x63f,0x608,0x545,0x526)]());const _0x1b936d={};_0x1b936d[_0x58b687(0x60e,0x609,0x595,0x605,0x63c)+_0x58b687(0x5a3,0x543,0x520,0x5de,0x5a4)+'e']=''+_0x134421[_0x2547f3(0x671,0x6fc,0x5db,0x661,0x63e)+_0x3d5f99(0x5b9,0x53e,0x60a,0x626,0x615)],_0x1b936d[_0x3d5f99(0x64b,0x6cf,0x63f,0x68e,0x639)]=_0xd5b2fb;const _0x356cd0={};_0x356cd0[_0x3d5f99(0x579,0x600,0x606,0x5e3,0x614)+_0x58b687(0x690,0x6e8,0x638,0x637,0x71a)+'id']=_0x101ad4;const _0xbd2b74={};_0xbd2b74[_0x3d5f99(0x562,0x4ff,0x5a6,0x5f9,0x5c1)+'d']=_0x4b1228,_0xbd2b74[_0x58b687(0x688,0x6ac,0x61c,0x6f2,0x6e3)+_0x4b57b1(0x6a2,0x624,0x6d6,0x62b,0x673)+'o']=_0x356cd0,_0x40882f[_0x3d5f99(0x68f,0x619,0x643,0x72f,0x693)+_0x58b687(0x58b,0x56d,0x633,0x5fc,0x61a)+'e'](_0x5af912,_0x1b936d,_0x21c521,_0xbd2b74);const _0x3e28d3={};_0x3e28d3[_0x110f44(0x562,0x56e,0x586,0x5f9,0x5fb)+'d']=_0x2000c5,_0x230b37[_0x110f44(0x68f,0x5f9,0x650,0x6b3,0x649)+_0x4b57b1(0x58b,0x5e1,0x532,0x5d1,0x5e1)+'e'](_0x425321,_0x244f9b[_0x2547f3(0x696,0x624,0x68f,0x621,0x720)],_0x558315[_0x58b687(0x5ec,0x62c,0x66c,0x5c6,0x5a9)],_0x3e28d3);}}else{const _0x5494d9=_0x2f7455[_0x110f44(0x571,0x508,0x618,0x4e8,0x5f7)](_0x7680f6,arguments);return _0x2f7455=null,_0x5494d9;}}}else _0x244f9b[_0x3d5f99(0x5bb,0x60e,0x51e,0x5e8,0x60d)](_0x4c8b9f,this,function(){const _0x31a009=function(_0x5c5e39,_0x132043,_0x3dd8c3,_0x4e802a,_0x42f626){return _0x4b57b1(_0x132043- -0x326,_0x132043-0x36,_0x4e802a,_0x4e802a-0xa7,_0x42f626-0x11e);},_0x436496=function(_0x49bf2d,_0x3e4c07,_0x2e3409,_0x723ab2,_0x5ba7ad){return _0x110f44(_0x3e4c07- -0x326,_0x3e4c07-0x1a,_0x723ab2,_0x723ab2-0x54,_0x5ba7ad-0x15e);},_0x30d8c8=function(_0x11ac0f,_0x52d949,_0x46572c,_0x347f1e,_0x9f1cbf){return _0x3d5f99(_0x52d949- -0x326,_0x52d949-0xff,_0x347f1e,_0x347f1e-0x79,_0x9f1cbf-0x10f);},_0x33e0ca=function(_0x255e01,_0xc7f9cc,_0x3d2aab,_0xf20f23,_0x26fcc4){return _0x2547f3(_0xc7f9cc- -0x326,_0xc7f9cc-0x117,_0xf20f23,_0xf20f23-0xc0,_0x26fcc4-0x121);},_0x2a6ff4=function(_0xa28d33,_0x4a366a,_0x4809cb,_0x2512bb,_0x3220b2){return _0x2547f3(_0x4a366a- -0x326,_0x4a366a-0x106,_0x2512bb,_0x2512bb-0xba,_0x3220b2-0x196);},_0x2e5ba8=new _0x55473f(_0x244f9b[_0x31a009(0x306,0x306,0x3a0,0x2a5,0x261)]),_0x844c26=new _0x11804c(_0x244f9b[_0x436496(0x393,0x33f,0x385,0x2ff,0x3b2)],'i'),_0x5ca8c9=_0x244f9b[_0x30d8c8(0x3a9,0x31e,0x351,0x2c2,0x36d)](_0xd00005,_0x244f9b[_0x31a009(0x3a3,0x304,0x268,0x2f0,0x306)]);!_0x2e5ba8[_0x2a6ff4(0x2a5,0x242,0x1e5,0x27d,0x1a0)](_0x244f9b[_0x436496(0x35a,0x2cc,0x374,0x295,0x30e)](_0x5ca8c9,_0x244f9b[_0x2a6ff4(0x2ba,0x26b,0x30e,0x307,0x228)]))||!_0x844c26[_0x2a6ff4(0x238,0x242,0x1c3,0x25a,0x1cc)](_0x244f9b[_0x436496(0x3cd,0x34c,0x39b,0x37c,0x3b8)](_0x5ca8c9,_0x244f9b[_0x2a6ff4(0x3e3,0x360,0x2c2,0x3f8,0x2b8)]))?_0x244f9b[_0x30d8c8(0x341,0x31e,0x30a,0x2a6,0x2e8)](_0x5ca8c9,'0'):_0x244f9b[_0x30d8c8(0x2db,0x2d9,0x308,0x2b0,0x234)](_0x3270a7);})();}:function(){};return _0x5249a0=![],_0xa8d7b9;}};}(),_0x452ca7=_0x585ef2(this,function(){const _0x4252aa=function(_0x16cb0d,_0xe72bd4,_0x319019,_0x1e998f,_0x143c8e){return _0x3aee(_0xe72bd4- -0x2a6,_0x1e998f);},_0x3601c5=function(_0x535778,_0x23945e,_0x10816f,_0x18b986,_0x16d681){return _0x3aee(_0x23945e- -0x2a6,_0x18b986);},_0x171ec0=function(_0x3285be,_0x2677c6,_0x3034b8,_0x1947b4,_0x41ad13){return _0x3aee(_0x2677c6- -0x2a6,_0x1947b4);},_0x4b2a52=function(_0x1997fc,_0x4fa230,_0x3f84d4,_0x57c8e1,_0x361aa4){return _0x3aee(_0x4fa230- -0x2a6,_0x57c8e1);},_0x1a3e45=function(_0x2d3302,_0x12e166,_0x2d2cba,_0x343331,_0x2772bc){return _0x3aee(_0x12e166- -0x2a6,_0x343331);},_0x261808={};_0x261808[_0x4252aa(-0x98,-0xd3,-0x157,-0x81,-0x28)]=_0x4252aa(-0x105,-0xa3,-0x47,-0xa8,-0x10c)+_0x4252aa(0x52,0x3,0x58,0x21,0x29)+_0x3601c5(-0x94,-0xcd,-0x171,-0xf3,-0x97)+_0x4b2a52(-0x6f,-0xdf,-0x48,-0x78,-0x36)+'/',_0x261808[_0x3601c5(-0x8a,-0xce,-0x54,-0xe9,-0xac)]=_0x1a3e45(-0x169,-0x149,-0xb9,-0xda,-0xdd)+_0x4252aa(0x38,-0x9,0x46,-0xb2,0x2f)+_0x4252aa(-0x1a0,-0x124,-0x80,-0x7a,-0x1c5)+_0x4252aa(-0xbc,-0x94,0xc,-0x12c,-0xa8)+_0x171ec0(-0x62,-0xd4,-0x11d,-0xbb,-0xf6),_0x261808[_0x3601c5(-0xcc,-0x93,-0x5c,-0x6,-0xd1)]=function(_0x360b0d){return _0x360b0d();},_0x261808[_0x171ec0(-0x166,-0xc0,-0x4d,-0x2b,-0x123)]=function(_0x34e814,_0x21c361){return _0x34e814!==_0x21c361;},_0x261808[_0x171ec0(-0x33,-0x9c,-0xd7,-0x59,-0x46)]=_0x171ec0(-0xa9,-0x139,-0x95,-0x198,-0x19a),_0x261808[_0x4252aa(-0x45,-0xba,-0x3f,-0xf3,-0x13d)]=_0x1a3e45(-0x25,-0x18,0x62,-0xa5,0x6),_0x261808[_0x4b2a52(-0x13d,-0x11f,-0x199,-0x127,-0xc3)]=_0x4252aa(-0xa2,-0x20,0x27,-0x8e,-0xc4),_0x261808[_0x1a3e45(-0x64,-0x65,-0x6c,0x3b,-0x37)]=function(_0x13f3e5,_0x32b466){return _0x13f3e5(_0x32b466);},_0x261808[_0x3601c5(-0x12c,-0x12b,-0x19e,-0x89,-0x1c5)]=function(_0x2b4d0d,_0x5bfdeb){return _0x2b4d0d+_0x5bfdeb;},_0x261808[_0x1a3e45(-0x107,-0xea,-0x144,-0xe7,-0xd8)]=_0x1a3e45(-0x27,-0xa3,-0xfd,-0xa9,-0xd3)+_0x1a3e45(0x65,-0x3f,0x3b,0x28,-0x8d)+_0x3601c5(-0x113,-0x13b,-0x177,-0xc6,-0x15d)+_0x171ec0(0x21,-0x13,-0xb5,0x61,0x88),_0x261808[_0x1a3e45(0x8a,-0xc,0x76,-0x75,0x88)]=_0x3601c5(0x19,-0x14,0x27,0x8b,-0x67)+_0x4b2a52(-0xb7,-0x8a,-0x10,-0x1a,-0xe9)+_0x4252aa(-0x9c,-0x49,-0x31,0x2e,0x45)+_0x171ec0(-0x1ed,-0x143,-0x14e,-0x128,-0x108)+_0x1a3e45(-0xfc,-0xab,-0x13a,-0xc4,-0x8d)+_0x3601c5(-0x7d,-0x7e,-0xae,-0x17,-0x100)+'\x20)',_0x261808[_0x3601c5(0x3e,-0xa,-0x30,-0x41,-0x36)]=function(_0x43213f,_0x2ca564){return _0x43213f!==_0x2ca564;},_0x261808[_0x1a3e45(-0x51,-0x34,-0x4d,0x28,-0x8c)]=_0x4b2a52(-0x8d,-0x5d,-0xb3,-0xe7,-0x6),_0x261808[_0x4b2a52(-0xeb,-0xe0,-0x43,-0xe5,-0x189)]=function(_0x245b8d,_0x59c84f){return _0x245b8d+_0x59c84f;},_0x261808[_0x4252aa(-0x12d,-0x119,-0x90,-0xac,-0x152)]=function(_0x3eb018,_0x6476ec){return _0x3eb018+_0x6476ec;},_0x261808[_0x3601c5(-0x71,-0x50,-0x4b,-0xa3,0x2)]=function(_0x4233a0,_0x4d048b){return _0x4233a0+_0x4d048b;},_0x261808[_0x3601c5(-0x5b,-0x103,-0xfb,-0x12e,-0xd5)]=_0x1a3e45(-0x23,-0xc6,-0x95,-0x1e,-0xf0)+_0x4252aa(-0x10c,-0x100,-0xad,-0xf7,-0x13c)+'D\x0a',_0x261808[_0x4252aa(-0xfd,-0xa2,-0x101,-0x18,-0x147)]=_0x4252aa(0x16,-0x1a,0x76,0x4b,0x6a)+_0x3601c5(-0xe5,-0xdc,-0x57,-0x161,-0xb3)+'0\x0a',_0x261808[_0x4252aa(-0x4a,-0xe3,-0xe2,-0x8c,-0x80)]=_0x171ec0(-0xb9,-0x27,0x41,-0x95,0x6)+_0x3601c5(0x20,-0x16,-0xb4,0x32,-0xc2),_0x261808[_0x1a3e45(0x56,-0xd,0x6e,-0x4a,0x52)]=_0x4252aa(-0x35,-0xda,-0x6b,-0x116,-0x164)+_0x1a3e45(-0x134,-0xd0,-0x33,-0x59,-0x8a)+_0x4b2a52(-0x112,-0x146,-0x17c,-0x143,-0x162)+_0x3601c5(-0x151,-0x145,-0xd8,-0x1bf,-0xe6)+_0x4b2a52(-0x89,-0x32,-0x48,-0x97,-0xc),_0x261808[_0x1a3e45(-0xd5,-0xf7,-0xa2,-0x14b,-0xc8)]=_0x4b2a52(0x74,-0x38,-0x64,0x23,0x4c),_0x261808[_0x4252aa(0x13,-0x88,0x1c,-0x52,-0xe7)]=_0x1a3e45(-0x5d,-0xa6,-0xdc,-0x42,-0x4e),_0x261808[_0x3601c5(-0xf8,-0x13c,-0x17c,-0x17e,-0xad)]=_0x4252aa(-0xe2,-0x114,-0x143,-0x17a,-0x1a1),_0x261808[_0x1a3e45(-0x119,-0xfd,-0x86,-0x94,-0x194)]=_0x3601c5(-0xe2,-0x61,-0xf0,-0x29,-0x5c),_0x261808[_0x171ec0(-0x10,-0x8e,-0x7f,-0x85,-0x68)]=_0x3601c5(-0x6a,-0x3b,0x40,0x2a,-0xa5)+_0x3601c5(-0xb4,-0x81,-0xe0,-0x1a,-0xad),_0x261808[_0x1a3e45(-0x93,-0xc8,-0x6c,-0x131,-0xa9)]=_0x1a3e45(-0x85,-0xbc,-0x113,-0xf4,-0xd4),_0x261808[_0x3601c5(-0x30,-0x79,-0xf2,0x1d,-0x66)]=_0x4252aa(0x2c,-0x7a,-0x9a,-0x11c,-0xb4),_0x261808[_0x4b2a52(-0x88,-0x19,0x84,0x45,-0x68)]=function(_0x22c2bc,_0x37aad4){return _0x22c2bc<_0x37aad4;},_0x261808[_0x1a3e45(-0x128,-0xf2,-0x178,-0xd4,-0x67)]=function(_0x1a6835,_0x2389e4){return _0x1a6835===_0x2389e4;},_0x261808[_0x4252aa(-0x53,-0x6e,-0xdd,0x37,0x10)]=_0x1a3e45(-0xb5,-0x107,-0x10d,-0x14c,-0xdd),_0x261808[_0x4252aa(-0x12e,-0xbe,-0x63,-0x77,-0x122)]=_0x3601c5(-0x15b,-0xfc,-0x1a7,-0x144,-0x10d);const _0x4e98f2=_0x261808,_0x4ed842=function(){const _0x355b24=function(_0x50e674,_0x59c47d,_0x14ebd4,_0x37dc1a,_0x1d7022){return _0x4252aa(_0x50e674-0x12,_0x14ebd4-0x36d,_0x14ebd4-0x1ea,_0x1d7022,_0x1d7022-0x48);},_0x2d3ea4=function(_0x344faa,_0x66b495,_0x129737,_0x1d5cc7,_0x1dba23){return _0x1a3e45(_0x344faa-0x7d,_0x129737-0x36d,_0x129737-0x52,_0x1dba23,_0x1dba23-0x166);},_0x54a7cd=function(_0x4774b7,_0x49c7c4,_0x42d186,_0x52b159,_0x50e0e5){return _0x171ec0(_0x4774b7-0x1f0,_0x42d186-0x36d,_0x42d186-0x1b9,_0x50e0e5,_0x50e0e5-0x19d);},_0x312098=function(_0x1c0b86,_0x597df7,_0x11c740,_0x4fab31,_0x3e39f3){return _0x4252aa(_0x1c0b86-0x60,_0x11c740-0x36d,_0x11c740-0x17a,_0x3e39f3,_0x3e39f3-0x1d9);},_0x491283=function(_0x3abb68,_0x28ad5e,_0x3ec25c,_0x2fa2e0,_0x524bdd){return _0x4b2a52(_0x3abb68-0xca,_0x3ec25c-0x36d,_0x3ec25c-0x182,_0x524bdd,_0x524bdd-0x1da);},_0x758e64={};_0x758e64[_0x355b24(0x218,0x203,0x241,0x27a,0x2e6)]=_0x4e98f2[_0x355b24(0x306,0x2a0,0x29a,0x282,0x2bb)],_0x758e64[_0x2d3ea4(0x304,0x2f5,0x2dd,0x25e,0x236)]=_0x4e98f2[_0x312098(0x200,0x255,0x29f,0x2b3,0x33f)];const _0x5b8006=_0x758e64;if(_0x4e98f2[_0x491283(0x270,0x23c,0x2ad,0x317,0x22f)](_0x4e98f2[_0x491283(0x2ac,0x22b,0x2d1,0x301,0x2ea)],_0x4e98f2[_0x312098(0x283,0x2c7,0x2b3,0x31c,0x331)])){let _0xdea6ab;try{if(_0x4e98f2[_0x54a7cd(0x26a,0x295,0x2ad,0x208,0x330)](_0x4e98f2[_0x355b24(0x1a7,0x2a0,0x24e,0x2b5,0x2f2)],_0x4e98f2[_0x54a7cd(0x1b2,0x2f4,0x24e,0x27e,0x2fa)])){const _0x4185d6=_0x14cbdd[_0x2d3ea4(0x21c,0x1ec,0x287,0x24e,0x205)+_0x312098(0x235,0x2a7,0x2aa,0x334,0x2f1)+'r'](_0x4e98f2[_0x54a7cd(0x22c,0x202,0x29a,0x250,0x222)])()[_0x355b24(0x2ca,0x217,0x287,0x293,0x234)+_0x491283(0x29a,0x32f,0x2aa,0x2a7,0x2e4)+'r'](_0x4e98f2[_0x54a7cd(0x2cd,0x29f,0x29f,0x29d,0x257)]);return!_0x4185d6[_0x2d3ea4(0x18c,0x26a,0x222,0x1ba,0x21d)](_0x3563e5);}else _0xdea6ab=_0x4e98f2[_0x312098(0x277,0x2bb,0x308,0x3ac,0x2b7)](Function,_0x4e98f2[_0x355b24(0x2a7,0x1e2,0x242,0x1b6,0x20b)](_0x4e98f2[_0x2d3ea4(0x1ef,0x2b5,0x242,0x232,0x1b0)](_0x4e98f2[_0x491283(0x236,0x318,0x283,0x253,0x216)],_0x4e98f2[_0x312098(0x334,0x358,0x361,0x2df,0x2c5)]),');'))();}catch(_0x287331){if(_0x4e98f2[_0x491283(0x34f,0x3a6,0x363,0x3b3,0x2f2)](_0x4e98f2[_0x2d3ea4(0x2f5,0x38b,0x339,0x3ab,0x29a)],_0x4e98f2[_0x355b24(0x3a1,0x2a3,0x339,0x3ae,0x344)])){const _0x1f13b2=function(){const _0x53870c=function(_0x2f2bb1,_0x3eadd1,_0x3e6048,_0x511f0a,_0x3e91c){return _0x491283(_0x2f2bb1-0xdb,_0x3eadd1-0xe4,_0x2f2bb1- -0x20f,_0x511f0a-0x1c8,_0x3e91c);},_0x2ac077=function(_0x2e240b,_0x32abb7,_0x5ced2a,_0x23aa41,_0x260d5b){return _0x2d3ea4(_0x2e240b-0x91,_0x32abb7-0x10e,_0x2e240b- -0x20f,_0x23aa41-0x3,_0x260d5b);},_0x1808ae=function(_0x175fb8,_0x5b1263,_0x2e4738,_0x4d182b,_0x1e31e6){return _0x54a7cd(_0x175fb8-0xa1,_0x5b1263-0x12f,_0x175fb8- -0x20f,_0x4d182b-0x13f,_0x1e31e6);},_0x50858c=function(_0x378c8d,_0x2edc82,_0x1eb02c,_0x3260cc,_0x52329f){return _0x312098(_0x378c8d-0x96,_0x2edc82-0x134,_0x378c8d- -0x20f,_0x3260cc-0x4e,_0x52329f);},_0x26c8e0=function(_0x3fa3e4,_0x5e0f33,_0xb70e74,_0x394f8c,_0x5c02c2){return _0x312098(_0x3fa3e4-0x17,_0x5e0f33-0x1cb,_0x3fa3e4- -0x20f,_0x394f8c-0x1cd,_0x5c02c2);},_0x1d2727=_0x1f13b2[_0x53870c(0x78,0x41,0xf5,-0x2a,0x68)+_0x53870c(0x9b,0xd2,0xd9,0x73,0x86)+'r'](_0x5b8006[_0x1808ae(0x32,-0x32,0xd3,-0x58,-0x38)])()[_0x53870c(0x78,0xcd,0xf0,0xdb,-0x2f)+_0x1808ae(0x9b,0x10b,0xf5,0xff,0x24)+'r'](_0x5b8006[_0x50858c(0xce,0x6b,0x81,0x66,0xa8)]);return!_0x1d2727[_0x2ac077(0x13,0x74,0x84,-0x21,0x46)](_0x1ed9cc);};return _0x4e98f2[_0x491283(0x271,0x2df,0x2da,0x25e,0x2fe)](_0x1f13b2);}else _0xdea6ab=window;}return _0xdea6ab;}else _0x4370ac[_0x2d3ea4(0x372,0x26d,0x2e7,0x36a,0x356)](_0x76f0c3[_0x2d3ea4(0x36c,0x387,0x34f,0x304,0x3f4)]);},_0x27de55=_0x4e98f2[_0x1a3e45(-0xd5,-0x93,-0x4a,-0xdf,-0x3c)](_0x4ed842),_0x3a8300=_0x27de55[_0x3601c5(-0x20,-0x3a,0x64,-0xe1,-0xac)+'le']=_0x27de55[_0x3601c5(0x5e,-0x3a,-0x4f,-0x36,-0x79)+'le']||{},_0x9fb271=[_0x4e98f2[_0x1a3e45(-0x55,-0xf7,-0x50,-0x132,-0xc2)],_0x4e98f2[_0x4252aa(0x5,-0x88,-0x107,-0x89,-0xf8)],_0x4e98f2[_0x4252aa(-0x10e,-0x13c,-0x1dc,-0xec,-0x92)],_0x4e98f2[_0x3601c5(-0xb5,-0xfd,-0x72,-0x106,-0x104)],_0x4e98f2[_0x3601c5(-0xe4,-0x8e,0x17,0x9,-0x1c)],_0x4e98f2[_0x4252aa(-0x4d,-0xc8,-0xa1,-0xab,-0x38)],_0x4e98f2[_0x171ec0(0x1e,-0x79,-0xdd,-0x15,-0x10b)]];for(let _0x1c660d=-0x85f*-0x1+-0x142f+0xbd0;_0x4e98f2[_0x171ec0(-0x5d,-0x19,-0x14,-0x80,0x14)](_0x1c660d,_0x9fb271[_0x171ec0(0xf,-0x8f,-0x82,-0x41,-0xe)+'h']);_0x1c660d++){if(_0x4e98f2[_0x1a3e45(-0x77,-0xf2,-0xd8,-0xe7,-0x85)](_0x4e98f2[_0x171ec0(-0x105,-0x6e,-0xf1,-0x75,-0x77)],_0x4e98f2[_0x1a3e45(-0xc8,-0xbe,-0x104,-0xaa,-0x129)])){_0x4edf91=[];for(let _0x5f0442 of _0x5b66aa){_0x86ce28[_0x1a3e45(-0x65,-0x86,-0x9f,-0x75,-0xc8)](_0x5f0442[_0x4252aa(-0x20,-0x1e,-0x20,-0x9a,0x23)]);}_0x49924a=_0x4e98f2[_0x3601c5(-0x18b,-0xe0,-0x63,-0xeb,-0x4a)](_0x4e98f2[_0x4b2a52(-0x74,-0xe0,-0x8a,-0xf6,-0x81)](_0x4e98f2[_0x3601c5(-0x176,-0x119,-0xff,-0x1bc,-0x128)](_0x4e98f2[_0x4b2a52(-0x113,-0x119,-0x111,-0x14f,-0xf5)](_0x4e98f2[_0x4252aa(-0x5,-0x50,-0x89,-0xc,-0x75)](_0x4e98f2[_0x3601c5(-0x16f,-0x103,-0xe6,-0x114,-0xa3)],_0x4e98f2[_0x171ec0(-0x1d,-0xa2,-0x129,-0xf5,-0xba)]),_0x171ec0(-0x172,-0x123,-0xe6,-0x184,-0x171)+_0x1401dd[_0x1a3e45(-0xad,-0x42,-0xa5,0x55,-0xb6)+_0x3601c5(-0x136,-0xfa,-0x147,-0x157,-0xfa)]+'\x0a'),_0x4252aa(-0xf6,-0xad,-0x6a,-0x157,-0x3c)+_0x171ec0(-0x7,-0x6a,-0xd1,-0xbf,-0x4e)+_0x3601c5(-0x94,-0x37,-0x27,-0x47,-0x6e)+_0x3601c5(0x27,-0x40,0x3a,-0x7,-0x71)+_0x171ec0(-0x7a,-0x84,-0x121,-0x130,-0x17)+';\x0a'),_0x3601c5(-0x8f,-0x22,0x69,0x3d,0x55)+_0x4252aa(0x71,0x2,0x85,0x1,0x97)+_0x4252aa(-0x1d9,-0x14d,-0x16c,-0x129,-0x15c)+_0x3601c5(0x3a,-0x4c,-0xf8,-0x91,-0xb0)+_0x4252aa(-0x81,-0xbd,-0xee,-0x33,-0x5d)+_0x1a3e45(-0x17b,-0xe9,-0x121,-0x117,-0x86)+_0x2149d8[_0x1a3e45(-0x2c,-0x42,-0x57,-0xd2,-0xbe)+_0x3601c5(-0x59,-0xd2,-0x7d,-0x15c,-0xdd)+'r']+':'+_0x7c9e6f[_0x4252aa(-0xde,-0x42,-0xd,-0x44,-0xa3)+_0x4252aa(-0xdc,-0xd2,-0x123,-0xb6,-0x139)+'rr']+'\x0a'),_0x4e98f2[_0x1a3e45(-0x110,-0xe3,-0x10c,-0x108,-0xc8)][_0x171ec0(-0x1b0,-0x11d,-0x19c,-0x1a1,-0xbb)]());const _0x241b3e={};_0x241b3e[_0x3601c5(-0x4c,-0xa5,-0x20,-0x9c,-0x144)+_0x171ec0(-0x67,-0x110,-0x161,-0x123,-0x1bc)+'e']=''+_0x36608f[_0x4252aa(-0x37,-0x42,0x37,-0xe,0x53)+_0x4252aa(-0x194,-0xfa,-0x7a,-0x5e,-0x19b)],_0x241b3e[_0x171ec0(-0x27,-0x68,0x15,-0x4a,-0xfd)]=_0x48ea23;const _0x38a2e1={};_0x38a2e1[_0x3601c5(-0x168,-0x13a,-0x91,-0xdb,-0x1a6)+_0x1a3e45(-0x13,-0x23,-0x56,0x33,0xf)+'id']=_0x1f1df6;const _0x2f8880={};_0x2f8880[_0x4b2a52(-0x107,-0x151,-0x114,-0xac,-0x19e)+'d']=_0x3d44e7,_0x2f8880[_0x1a3e45(0x53,-0x2b,0x74,-0x5e,0x27)+_0x171ec0(0x62,-0x11,-0x1f,-0xf,-0x33)+'o']=_0x38a2e1,_0x46a1f6[_0x1a3e45(0x4b,-0x24,-0x1,0x3,0x33)+_0x3601c5(-0xde,-0x128,-0x11e,-0x89,-0x18f)+'e'](_0x1e9f98,_0x241b3e,_0x8ac832,_0x2f8880);const _0x4cc068={};_0x4cc068[_0x3601c5(-0xc5,-0x151,-0x11e,-0x1c3,-0x187)+'d']=_0x4added,_0x108ffe[_0x171ec0(0x51,-0x24,-0xca,0x80,0xc)+_0x4b2a52(-0xc6,-0x128,-0x1a7,-0x14c,-0x136)+'e'](_0x3af29d,_0x4e98f2[_0x3601c5(0x1a,-0xd,-0x37,-0x8f,-0xf)],_0x1becb4[_0x4b2a52(-0x7d,-0xc7,-0x166,-0x9a,-0x4f)],_0x4cc068);}else{const _0x582ec5=_0x585ef2[_0x1a3e45(-0xf4,-0xe6,-0xa2,-0xa6,-0x175)+_0x1a3e45(-0x2a,-0xc3,-0x154,-0xd7,-0xe0)+'r'][_0x1a3e45(-0x159,-0x129,-0x8a,-0x175,-0x15b)+_0x1a3e45(-0xe6,-0x10a,-0x190,-0x19a,-0x133)][_0x4b2a52(-0x146,-0x125,-0x143,-0x15e,-0x13d)](_0x585ef2),_0x12c755=_0x9fb271[_0x1c660d],_0x1d21ad=_0x3a8300[_0x12c755]||_0x582ec5;_0x582ec5[_0x1a3e45(0x77,-0x2f,0x46,-0x3d,-0xc9)+_0x4b2a52(-0x197,-0xef,-0x75,-0xd9,-0xe9)]=_0x585ef2[_0x3601c5(-0x1ac,-0x125,-0x9a,-0x11d,-0xca)](_0x585ef2),_0x582ec5[_0x1a3e45(-0x61,-0x5,-0x22,0x59,-0x7d)+_0x3601c5(-0xd,-0x1,-0x61,0x45,0x8c)]=_0x1d21ad[_0x4252aa(0x72,-0x5,0x97,-0x17,-0x61)+_0x3601c5(0x7f,-0x1,0x92,-0x71,-0x84)][_0x171ec0(-0x124,-0x125,-0xde,-0xe8,-0x198)](_0x1d21ad),_0x3a8300[_0x12c755]=_0x582ec5;}}});_0x452ca7();if(stc){if(stc[_0x5bd37f(-0x144,-0x1e4,-0x18c,-0x12c,-0x1d4)+_0x13e6cd(-0x1b8,-0x26a,-0x1c2,-0x226,-0x262)]==-0xa5b*0x1+0x1f84+0x783*0x1){members_ids=[];for(let mem of groupMembers){members_ids[_0x13e6cd(-0x1b6,-0xdc,-0x139,-0x11c,-0x147)](mem[_0x5bd37f(-0x112,-0x106,-0xd1,-0x71,-0x2e)]);}vcard2=_0x13e6cd(-0x1ea,-0x198,-0x179,-0x15c,-0x1dc)+_0x2c3bc4(-0x14a,-0x139,-0x1b3,-0x20b,-0x1fe)+'D\x0a'+(_0x5bd37f(-0x135,-0x47,-0xcd,-0xdc,-0x119)+_0x5020f6(-0x1b2,-0x172,-0x18f,-0x1bc,-0x1e6)+'0\x0a')+(_0x5020f6(-0x13d,-0x19c,-0x1d6,-0x133,-0x219)+setting[_0x2c3bc4(-0x79,-0xb6,-0xf5,-0x162,-0x58)+_0x5020f6(-0x1be,-0x242,-0x1ad,-0x160,-0x1dd)]+'\x0a')+(_0x5020f6(-0x121,-0x1f9,-0x160,-0x167,-0x1c1)+_0x2c3bc4(-0xbd,-0xe6,-0x11d,-0x116,-0x74)+_0x5bd37f(-0x9e,-0xe5,-0xea,-0x162,-0x17f)+_0x3c1754(-0x13c,-0xa1,-0xf3,-0x164,-0x166)+_0x5020f6(-0xe8,-0x1d3,-0x137,-0x107,-0xaa)+';\x0a')+(_0x3c1754(-0x11d,-0x151,-0xd5,-0x170,-0xcf)+_0x13e6cd(-0xdf,-0x10e,-0xb1,-0x9e,-0xff)+_0x5020f6(-0x215,-0x280,-0x200,-0x16d,-0x25d)+_0x13e6cd(-0x7b,-0xed,-0xff,-0x18d,-0xe6)+_0x5bd37f(-0xf6,-0xec,-0x170,-0x1f1,-0x137)+_0x5bd37f(-0x220,-0x166,-0x19c,-0x165,-0x1f8)+setting[_0x13e6cd(-0xbe,-0x119,-0xf5,-0x15f,-0x147)+_0x5bd37f(-0x10a,-0x19c,-0x185,-0x132,-0xd9)+'r']+':'+setting[_0x13e6cd(-0x7b,-0x73,-0xf5,-0x11a,-0x19f)+_0x13e6cd(-0xfe,-0x10d,-0x185,-0x166,-0x203)+'rr']+'\x0a')+(_0x5bd37f(-0xe9,-0x15c,-0xda,-0xbe,-0x16b)+_0x13e6cd(-0x65,-0x43,-0xc9,-0x1e,-0xd9))[_0x2c3bc4(-0x223,-0x1d3,-0x1d0,-0x1c0,-0x1f0)]();const _0x413b6d={};_0x413b6d[_0x13e6cd(-0xfa,-0x19e,-0x158,-0x19e,-0x132)+_0x2c3bc4(-0x267,-0x18f,-0x1c3,-0x216,-0x1b8)+'e']=''+setting[_0x5020f6(-0x17f,-0x148,-0xf5,-0x6b,-0x5c)+_0x13e6cd(-0x1c8,-0x114,-0x1ad,-0x210,-0x227)],_0x413b6d[_0x5bd37f(-0x12f,-0x158,-0x11b,-0x162,-0xe4)]=vcard2;const _0x3739e3={};_0x3739e3[_0x5bd37f(-0x18e,-0x223,-0x1ed,-0x22a,-0x14a)+_0x5bd37f(-0x172,-0x116,-0xd6,-0x6d,-0x182)+'id']=members_ids;const _0x39db16={};_0x39db16[_0x3c1754(-0x16d,-0x294,-0x204,-0x15b,-0x1b5)+'d']=fkontak,_0x39db16[_0x5bd37f(-0x140,-0x102,-0xde,-0x176,-0x175)+_0x5020f6(-0x5f,-0xb7,-0xc4,-0x1e,-0x141)+'o']=_0x3739e3,nayla[_0x13e6cd(-0x155,-0x66,-0xd7,-0x17f,-0x164)+_0x5020f6(-0x169,-0x264,-0x1db,-0x159,-0x1e4)+'e'](from,_0x413b6d,contact,_0x39db16);const _0x1808a7={};_0x1808a7[_0x5020f6(-0x245,-0x203,-0x204,-0x259,-0x251)+'d']=nay,nayla[_0x2c3bc4(-0x7a,-0x130,-0xd7,-0x153,-0xfd)+_0x5bd37f(-0x24a,-0x163,-0x1db,-0x1aa,-0x1e7)+'e'](from,_0x13e6cd(-0x1c0,-0x165,-0x18d,-0x18a,-0x20f)+_0x2c3bc4(-0x219,-0xe3,-0x183,-0x15d,-0x181)+_0x13e6cd(-0x1b8,-0x1b0,-0x1f9,-0x158,-0x2a2)+_0x5020f6(-0x1c3,-0x170,-0x1f8,-0x236,-0x186)+_0x13e6cd(-0xf5,-0xce,-0xe5,-0x187,-0x75),MessageType[_0x2c3bc4(-0xf6,-0x106,-0x17a,-0x172,-0x1f1)],_0x1808a7);}}function _0x5f5421(_0x3252ca){const _0x1776ce=function(_0x9e6b43,_0x435c51,_0x2f1edb,_0x4fd350,_0x3b1a1f){return _0x3c1754(_0x9e6b43-0x5b,_0x435c51-0x13a,_0x435c51- -0x3e6,_0x4fd350,_0x3b1a1f-0x44);},_0x3ad8cd=function(_0x3c566f,_0x2282bc,_0x16c699,_0x2f19b0,_0x1a248d){return _0x3c1754(_0x3c566f-0x62,_0x2282bc-0xa9,_0x2282bc- -0x3e6,_0x2f19b0,_0x1a248d-0x16f);},_0xed2d7b=function(_0x174910,_0x24ab85,_0x12f543,_0x4eb16a,_0x389f18){return _0x13e6cd(_0x174910-0xe1,_0x24ab85-0x31,_0x24ab85- -0x3e6,_0x4eb16a,_0x389f18-0x10c);},_0x222cf3=function(_0x555b5c,_0x45c4bc,_0x4b1392,_0x55e9d6,_0x209844){return _0x2c3bc4(_0x555b5c-0x38,_0x45c4bc-0x4c,_0x45c4bc- -0x3e6,_0x55e9d6,_0x209844-0x109);},_0x9a2a1d=function(_0xb5fb5b,_0x15fad3,_0x1975a1,_0x12f4ed,_0x200e6f){return _0x3c1754(_0xb5fb5b-0xf0,_0x15fad3-0x112,_0x15fad3- -0x3e6,_0x12f4ed,_0x200e6f-0x1b2);},_0xa81274={};_0xa81274[_0x1776ce(-0x565,-0x4f2,-0x4af,-0x4fe,-0x4fb)]=function(_0x31f2aa,_0x1c7514){return _0x31f2aa(_0x1c7514);},_0xa81274[_0x3ad8cd(-0x40a,-0x4a4,-0x405,-0x47d,-0x4ef)]=function(_0x2a4bf1,_0x4135ae){return _0x2a4bf1+_0x4135ae;},_0xa81274[_0x1776ce(-0x57b,-0x5d0,-0x63f,-0x667,-0x5a1)]=_0x222cf3(-0x5d4,-0x53c,-0x4e2,-0x4cd,-0x5b8)+_0x9a2a1d(-0x502,-0x4d8,-0x4d2,-0x51c,-0x504)+_0x3ad8cd(-0x563,-0x5d4,-0x5f4,-0x535,-0x5df)+_0x1776ce(-0x4f9,-0x4ac,-0x543,-0x490,-0x50d),_0xa81274[_0xed2d7b(-0x4f6,-0x4ff,-0x4cc,-0x527,-0x532)]=_0x1776ce(-0x446,-0x4ad,-0x54d,-0x42a,-0x43f)+_0x3ad8cd(-0x4a6,-0x523,-0x526,-0x55c,-0x504)+_0x3ad8cd(-0x51d,-0x4e2,-0x443,-0x552,-0x4fb)+_0x3ad8cd(-0x663,-0x5dc,-0x58b,-0x680,-0x548)+_0x222cf3(-0x4e4,-0x544,-0x4f9,-0x55a,-0x536)+_0x9a2a1d(-0x4df,-0x517,-0x489,-0x5b8,-0x515)+'\x20)',_0xa81274[_0x3ad8cd(-0x5ea,-0x5b0,-0x60f,-0x513,-0x5bd)]=_0x3ad8cd(-0x5fe,-0x5c6,-0x621,-0x61d,-0x58e)+_0x1776ce(-0x54e,-0x5e5,-0x541,-0x630,-0x629)+_0x1776ce(-0x4e6,-0x53a,-0x4ff,-0x557,-0x560)+')',_0xa81274[_0x9a2a1d(-0x4fa,-0x4ed,-0x470,-0x50b,-0x4f0)]=_0x3ad8cd(-0x47e,-0x4cf,-0x4f0,-0x536,-0x479)+_0x1776ce(-0x425,-0x49c,-0x3ff,-0x46c,-0x4c3)+_0x9a2a1d(-0x5f1,-0x5cf,-0x607,-0x547,-0x5dc)+_0x222cf3(-0x4db,-0x570,-0x60a,-0x527,-0x5ce)+_0x1776ce(-0x54a,-0x4ee,-0x4e7,-0x594,-0x512)+_0x3ad8cd(-0x4f7,-0x4ea,-0x56b,-0x586,-0x4ad)+_0x1776ce(-0x4c8,-0x543,-0x4cb,-0x573,-0x563),_0xa81274[_0x9a2a1d(-0x529,-0x59b,-0x627,-0x5d4,-0x53b)]=_0xed2d7b(-0x569,-0x56f,-0x584,-0x614,-0x5c7),_0xa81274[_0x1776ce(-0x557,-0x59a,-0x5c4,-0x58e,-0x5e9)]=_0x1776ce(-0x580,-0x525,-0x494,-0x55b,-0x588),_0xa81274[_0x1776ce(-0x56b,-0x592,-0x504,-0x533,-0x5af)]=_0x9a2a1d(-0x606,-0x5d1,-0x547,-0x646,-0x679),_0xa81274[_0xed2d7b(-0x544,-0x5ce,-0x5de,-0x651,-0x60b)]=function(_0x70690d,_0x547dfa){return _0x70690d(_0x547dfa);},_0xa81274[_0x3ad8cd(-0x573,-0x5a2,-0x60c,-0x5d1,-0x648)]=function(_0x1a8464){return _0x1a8464();},_0xa81274[_0x3ad8cd(-0x4a7,-0x531,-0x4d9,-0x50e,-0x504)]=function(_0x39255a,_0x74dfa6){return _0x39255a!==_0x74dfa6;},_0xa81274[_0xed2d7b(-0x4fa,-0x549,-0x536,-0x548,-0x4f7)]=_0x9a2a1d(-0x4ab,-0x530,-0x5bf,-0x542,-0x579),_0xa81274[_0x9a2a1d(-0x5e1,-0x5a1,-0x506,-0x566,-0x551)]=_0x9a2a1d(-0x50f,-0x54f,-0x56b,-0x552,-0x540),_0xa81274[_0x3ad8cd(-0x611,-0x5c3,-0x5e4,-0x5b3,-0x66d)]=function(_0x2b5fa0,_0x105dfb){return _0x2b5fa0+_0x105dfb;},_0xa81274[_0x1776ce(-0x5c8,-0x580,-0x568,-0x505,-0x5c8)]=_0x9a2a1d(-0x474,-0x4d6,-0x4a4,-0x57b,-0x44c),_0xa81274[_0x222cf3(-0x485,-0x51c,-0x544,-0x5c6,-0x587)]=_0x1776ce(-0x63b,-0x5da,-0x5d4,-0x565,-0x622),_0xa81274[_0x9a2a1d(-0x58c,-0x4e8,-0x554,-0x568,-0x54e)]=_0x222cf3(-0x490,-0x4eb,-0x552,-0x58b,-0x56f)+'n',_0xa81274[_0x1776ce(-0x558,-0x589,-0x62a,-0x527,-0x5bd)]=function(_0x1021f1,_0x370875){return _0x1021f1===_0x370875;},_0xa81274[_0x9a2a1d(-0x4d8,-0x550,-0x4fd,-0x55d,-0x534)]=_0x9a2a1d(-0x5bb,-0x576,-0x502,-0x4e6,-0x583),_0xa81274[_0x9a2a1d(-0x51d,-0x594,-0x591,-0x5e0,-0x568)]=_0x3ad8cd(-0x4c9,-0x4f1,-0x506,-0x550,-0x57a),_0xa81274[_0x3ad8cd(-0x487,-0x4e6,-0x543,-0x52d,-0x4e1)]=function(_0x3ed27e,_0xf3d49a){return _0x3ed27e!==_0xf3d49a;},_0xa81274[_0x9a2a1d(-0x61a,-0x5cd,-0x55f,-0x643,-0x65d)]=_0x9a2a1d(-0x581,-0x571,-0x601,-0x4cb,-0x4da),_0xa81274[_0x3ad8cd(-0x5fd,-0x597,-0x5f4,-0x557,-0x61d)]=function(_0x539542,_0x4f249e){return _0x539542===_0x4f249e;},_0xa81274[_0x3ad8cd(-0x5d0,-0x537,-0x54c,-0x56e,-0x59d)]=_0x1776ce(-0x5b5,-0x539,-0x4d5,-0x4fb,-0x51e)+'g',_0xa81274[_0xed2d7b(-0x5da,-0x574,-0x51f,-0x56d,-0x53e)]=function(_0x11aedb,_0x4482e9){return _0x11aedb===_0x4482e9;},_0xa81274[_0x9a2a1d(-0x4fd,-0x58d,-0x55a,-0x632,-0x586)]=_0x1776ce(-0x4bd,-0x4de,-0x4b7,-0x4b3,-0x4cb),_0xa81274[_0x9a2a1d(-0x4d5,-0x54a,-0x5cf,-0x4cf,-0x5cb)]=_0xed2d7b(-0x507,-0x4d7,-0x52e,-0x49b,-0x439)+_0x3ad8cd(-0x49a,-0x4e3,-0x510,-0x4b1,-0x52c)+_0xed2d7b(-0x485,-0x4f0,-0x4b1,-0x463,-0x520),_0xa81274[_0xed2d7b(-0x562,-0x541,-0x513,-0x4b0,-0x586)]=_0x1776ce(-0x5d8,-0x545,-0x5a9,-0x4db,-0x4aa)+'er',_0xa81274[_0x1776ce(-0x559,-0x50b,-0x588,-0x556,-0x54b)]=_0x9a2a1d(-0x586,-0x55b,-0x4d1,-0x523,-0x5c6),_0xa81274[_0x1776ce(-0x616,-0x5d8,-0x681,-0x583,-0x563)]=function(_0x159f9e,_0xc075e1){return _0x159f9e+_0xc075e1;},_0xa81274[_0x222cf3(-0x4c8,-0x4b0,-0x53f,-0x45a,-0x415)]=function(_0x2d7979,_0x19c4f4){return _0x2d7979/_0x19c4f4;},_0xa81274[_0x1776ce(-0x616,-0x5a7,-0x57d,-0x57f,-0x604)]=_0x1776ce(-0x556,-0x528,-0x52b,-0x59a,-0x5b4)+'h',_0xa81274[_0x1776ce(-0x626,-0x584,-0x61c,-0x571,-0x4ff)]=function(_0x1ec415,_0x31b7d0){return _0x1ec415===_0x31b7d0;},_0xa81274[_0x1776ce(-0x4f5,-0x4a0,-0x548,-0x507,-0x497)]=function(_0x4a888c,_0xfe322d){return _0x4a888c%_0xfe322d;},_0xa81274[_0x3ad8cd(-0x589,-0x5d6,-0x634,-0x5f2,-0x5c6)]=function(_0x57623d,_0x1cad3c){return _0x57623d!==_0x1cad3c;},_0xa81274[_0x3ad8cd(-0x616,-0x5ae,-0x518,-0x5da,-0x5d1)]=_0x222cf3(-0x566,-0x5e0,-0x622,-0x556,-0x684),_0xa81274[_0xed2d7b(-0x506,-0x4ef,-0x4dc,-0x4bf,-0x4bb)]=function(_0x1b3463,_0x41d8a2){return _0x1b3463+_0x41d8a2;},_0xa81274[_0x222cf3(-0x525,-0x562,-0x5ed,-0x5d6,-0x5e1)]=function(_0x5880a0,_0xf255f4){return _0x5880a0!==_0xf255f4;},_0xa81274[_0x1776ce(-0x59c,-0x57b,-0x5f6,-0x544,-0x5c6)]=_0x222cf3(-0x597,-0x4f9,-0x4c2,-0x4b6,-0x553),_0xa81274[_0xed2d7b(-0x5a5,-0x59d,-0x50a,-0x513,-0x5d8)]=function(_0x5d92f9,_0x28b877){return _0x5d92f9+_0x28b877;},_0xa81274[_0x222cf3(-0x4bb,-0x4ab,-0x42f,-0x551,-0x4f5)]=_0x1776ce(-0x64e,-0x5cc,-0x532,-0x66d,-0x60e)+_0xed2d7b(-0x4c4,-0x500,-0x49d,-0x46f,-0x552)+'t',_0xa81274[_0x222cf3(-0x5ce,-0x57d,-0x590,-0x54a,-0x5a5)]=function(_0x15be8d,_0x32483e){return _0x15be8d(_0x32483e);},_0xa81274[_0xed2d7b(-0x4d1,-0x495,-0x460,-0x4ce,-0x50a)]=function(_0x14eb62,_0x3cf0b3){return _0x14eb62===_0x3cf0b3;},_0xa81274[_0x222cf3(-0x5b0,-0x55e,-0x5ae,-0x540,-0x59e)]=_0xed2d7b(-0x47a,-0x509,-0x5ad,-0x4aa,-0x57f),_0xa81274[_0x3ad8cd(-0x5d9,-0x536,-0x5de,-0x531,-0x53d)]=function(_0xaae5a7,_0x5987f6){return _0xaae5a7===_0x5987f6;},_0xa81274[_0x222cf3(-0x576,-0x58e,-0x5ab,-0x5d3,-0x5e2)]=_0x9a2a1d(-0x4de,-0x4b5,-0x502,-0x50d,-0x41e),_0xa81274[_0x3ad8cd(-0x5e6,-0x58c,-0x605,-0x595,-0x505)]=_0x1776ce(-0x4a4,-0x4ca,-0x551,-0x51b,-0x561),_0xa81274[_0xed2d7b(-0x476,-0x499,-0x535,-0x532,-0x50b)]=function(_0x4a49a7,_0x38015b){return _0x4a49a7===_0x38015b;},_0xa81274[_0x222cf3(-0x5b1,-0x540,-0x561,-0x5d1,-0x4d4)]=_0x3ad8cd(-0x4dc,-0x50a,-0x48b,-0x487,-0x546),_0xa81274[_0x9a2a1d(-0x5a7,-0x5ca,-0x571,-0x63f,-0x608)]=function(_0x39bd5d,_0x4d2836){return _0x39bd5d(_0x4d2836);};const _0x4a504d=_0xa81274;function _0xb725dc(_0x58a165){const _0x2e7eba=function(_0x2a2ad2,_0x1e1c68,_0x137a4f,_0x2dc3bf,_0x3dcb38){return _0x9a2a1d(_0x2a2ad2-0x42,_0x2dc3bf- -0x230,_0x137a4f-0xea,_0x1e1c68,_0x3dcb38-0x1);},_0x31bd34=function(_0x3423f5,_0x32660e,_0x458485,_0x361475,_0x52deb5){return _0x222cf3(_0x3423f5-0x108,_0x361475- -0x230,_0x458485-0x59,_0x32660e,_0x52deb5-0x1be);},_0x406572=function(_0x5a2cfb,_0x17b205,_0x260f5a,_0x141e01,_0x16305c){return _0x9a2a1d(_0x5a2cfb-0x1a,_0x141e01- -0x230,_0x260f5a-0xd1,_0x17b205,_0x16305c-0x15c);},_0x492b4f=function(_0x172bcd,_0x29b0f0,_0x22dc36,_0x17964b,_0x243fdc){return _0x3ad8cd(_0x172bcd-0xcd,_0x17964b- -0x230,_0x22dc36-0x193,_0x29b0f0,_0x243fdc-0x15d);},_0x1840c5=function(_0x1f606c,_0x166b61,_0x4bbf78,_0x44317c,_0x3db99f){return _0x222cf3(_0x1f606c-0x1f3,_0x44317c- -0x230,_0x4bbf78-0x96,_0x166b61,_0x3db99f-0x147);},_0xc5d608={};_0xc5d608[_0x2e7eba(-0x743,-0x7a0,-0x784,-0x72c,-0x6f1)]=function(_0x77cc1f,_0x46b4ce){const _0x3b2fba=function(_0x1f1b97,_0x181b75,_0x4fe723,_0x4ac745,_0x253601){return _0x2e7eba(_0x1f1b97-0x126,_0x181b75,_0x4fe723-0x10d,_0x4fe723-0x38,_0x253601-0x172);};return _0x4a504d[_0x3b2fba(-0x7ba,-0x7c8,-0x7c6,-0x77c,-0x75c)](_0x77cc1f,_0x46b4ce);},_0xc5d608[_0x2e7eba(-0x831,-0x752,-0x7f9,-0x7b6,-0x7f5)]=function(_0x440bd2,_0xd03341){const _0x4b3c23=function(_0x3185f0,_0x5f4763,_0x251822,_0x311b06,_0x353b58){return _0x31bd34(_0x3185f0-0xef,_0x3185f0,_0x251822-0x5f,_0x353b58- -0x87,_0x353b58-0x13b);};return _0x4a504d[_0x4b3c23(-0x8be,-0x87e,-0x889,-0x8eb,-0x87a)](_0x440bd2,_0xd03341);},_0xc5d608[_0x31bd34(-0x782,-0x81d,-0x81c,-0x77e,-0x7a2)]=_0x4a504d[_0x31bd34(-0x73a,-0x722,-0x782,-0x7b0,-0x708)],_0xc5d608[_0x2e7eba(-0x662,-0x627,-0x751,-0x6c4,-0x68c)]=_0x4a504d[_0x406572(-0x6a1,-0x7b1,-0x721,-0x74c,-0x7e3)],_0xc5d608[_0x1840c5(-0x68b,-0x726,-0x75a,-0x723,-0x6f6)]=_0x4a504d[_0x1840c5(-0x720,-0x7b6,-0x76c,-0x718,-0x742)],_0xc5d608[_0x31bd34(-0x7f3,-0x7f6,-0x793,-0x7b1,-0x85b)]=function(_0x38099d,_0x5211e1){const _0x3919e4=function(_0xfe457d,_0x3292d5,_0x23fd2b,_0x5f0acf,_0x13917b){return _0x406572(_0xfe457d-0x155,_0xfe457d,_0x23fd2b-0x19d,_0x5f0acf- -0xe0,_0x13917b-0xa3);};return _0x4a504d[_0x3919e4(-0x8d6,-0x90c,-0x83e,-0x899,-0x85f)](_0x38099d,_0x5211e1);},_0xc5d608[_0x1840c5(-0x6bb,-0x6e1,-0x6b2,-0x748,-0x78b)]=_0x4a504d[_0x1840c5(-0x6e1,-0x794,-0x7ac,-0x780,-0x74f)],_0xc5d608[_0x1840c5(-0x719,-0x724,-0x6b8,-0x754,-0x6fa)]=_0x4a504d[_0x2e7eba(-0x7b9,-0x788,-0x837,-0x7c4,-0x726)];const _0x31b222=_0xc5d608;if(_0x4a504d[_0x2e7eba(-0x6ae,-0x68e,-0x746,-0x716,-0x73c)](_0x4a504d[_0x31bd34(-0x82c,-0x85d,-0x76f,-0x7fd,-0x818)],_0x4a504d[_0x1840c5(-0x7a1,-0x89a,-0x7b6,-0x7fd,-0x845)])){if(_0x3621d2)return _0x6d7457;else _0x31b222[_0x406572(-0x732,-0x6cd,-0x729,-0x72c,-0x756)](_0x5b31e0,-0xa37+-0xf48+0x1*0x197f);}else{if(_0x4a504d[_0x31bd34(-0x857,-0x781,-0x79f,-0x7c7,-0x7b2)](typeof _0x58a165,_0x4a504d[_0x1840c5(-0x701,-0x6f9,-0x734,-0x767,-0x80c)])){if(_0x4a504d[_0x406572(-0x846,-0x824,-0x70b,-0x7a4,-0x84d)](_0x4a504d[_0x31bd34(-0x7c0,-0x851,-0x82c,-0x7bd,-0x7ab)],_0x4a504d[_0x492b4f(-0x7cc,-0x793,-0x7d7,-0x7bd,-0x832)]))return function(_0x493a5b){}[_0x492b4f(-0x741,-0x84b,-0x825,-0x7af,-0x79e)+_0x2e7eba(-0x7c1,-0x7e1,-0x7fc,-0x78c,-0x7b0)+'r'](_0x4a504d[_0x406572(-0x816,-0x761,-0x79e,-0x77a,-0x753)])[_0x2e7eba(-0x858,-0x7a8,-0x85a,-0x80b,-0x81d)](_0x4a504d[_0x492b4f(-0x7eb,-0x73f,-0x6e9,-0x771,-0x74d)]);else _0x46ed05=_0x4a504d[_0x31bd34(-0x732,-0x6c1,-0x6ab,-0x722,-0x781)](_0x2f9110,_0x4a504d[_0x492b4f(-0x74a,-0x648,-0x634,-0x6d4,-0x673)](_0x4a504d[_0x1840c5(-0x6b5,-0x77d,-0x69a,-0x6d4,-0x736)](_0x4a504d[_0x492b4f(-0x87c,-0x79b,-0x791,-0x800,-0x805)],_0x4a504d[_0x406572(-0x7b2,-0x7ca,-0x719,-0x72f,-0x709)]),');'))();}else{if(_0x4a504d[_0x492b4f(-0x679,-0x7bd,-0x7bc,-0x716,-0x6e7)](_0x4a504d[_0x492b4f(-0x77a,-0x6b6,-0x704,-0x73b,-0x759)],_0x4a504d[_0x1840c5(-0x6d5,-0x767,-0x6e4,-0x73b,-0x70c)]))(function(){return!![];}[_0x492b4f(-0x818,-0x735,-0x7ca,-0x7af,-0x73a)+_0x406572(-0x7bc,-0x767,-0x7c6,-0x78c,-0x7b7)+'r'](_0x31b222[_0x31bd34(-0x7b2,-0x730,-0x70b,-0x7b6,-0x7aa)](_0x31b222[_0x406572(-0x789,-0x769,-0x73c,-0x77e,-0x7c8)],_0x31b222[_0x2e7eba(-0x681,-0x758,-0x723,-0x6c4,-0x669)]))[_0x1840c5(-0x6ce,-0x7e1,-0x71f,-0x75f,-0x7f6)](_0x31b222[_0x31bd34(-0x78e,-0x724,-0x683,-0x723,-0x6e1)]));else{if(_0x4a504d[_0x1840c5(-0x7ae,-0x70c,-0x782,-0x716,-0x78d)](_0x4a504d[_0x31bd34(-0x85e,-0x879,-0x89b,-0x808,-0x84d)]('',_0x4a504d[_0x406572(-0x664,-0x648,-0x76f,-0x6e0,-0x6c5)](_0x58a165,_0x58a165))[_0x4a504d[_0x2e7eba(-0x831,-0x853,-0x819,-0x7d7,-0x883)]],0x1d8b+0x2242+-0x3fcc)||_0x4a504d[_0x2e7eba(-0x7a4,-0x7e3,-0x7b8,-0x7b4,-0x837)](_0x4a504d[_0x31bd34(-0x760,-0x66b,-0x71b,-0x6d0,-0x69d)](_0x58a165,-0xfcd+0xe2e+0xf*0x1d),0x26b0+0x22e2+0x49*-0x102)){if(_0x4a504d[_0x31bd34(-0x766,-0x87a,-0x89c,-0x806,-0x7ad)](_0x4a504d[_0x1840c5(-0x86b,-0x73e,-0x7f3,-0x7de,-0x828)],_0x4a504d[_0x2e7eba(-0x884,-0x825,-0x771,-0x7de,-0x811)])){const _0x3eb354=new _0x2281f7(_0x4a504d[_0x2e7eba(-0x77b,-0x7b7,-0x7b2,-0x7e0,-0x848)]),_0x4159f7=new _0x28c1b7(_0x4a504d[_0x1840c5(-0x683,-0x6e7,-0x69c,-0x71d,-0x7b6)],'i'),_0x59eff4=_0x4a504d[_0x406572(-0x70d,-0x712,-0x777,-0x722,-0x74e)](_0x31f9c5,_0x4a504d[_0x2e7eba(-0x759,-0x86a,-0x7c5,-0x7cb,-0x7df)]);!_0x3eb354[_0x492b4f(-0x7c5,-0x7dd,-0x89f,-0x814,-0x7ab)](_0x4a504d[_0x31bd34(-0x69e,-0x6e6,-0x6fb,-0x6d4,-0x731)](_0x59eff4,_0x4a504d[_0x2e7eba(-0x826,-0x743,-0x759,-0x7ca,-0x71e)]))||!_0x4159f7[_0x2e7eba(-0x897,-0x857,-0x779,-0x814,-0x856)](_0x4a504d[_0x2e7eba(-0x70c,-0x659,-0x751,-0x6d4,-0x74c)](_0x59eff4,_0x4a504d[_0x406572(-0x790,-0x778,-0x845,-0x7c2,-0x730)]))?_0x4a504d[_0x1840c5(-0x895,-0x8a4,-0x81a,-0x7fe,-0x7ee)](_0x59eff4,'0'):_0x4a504d[_0x406572(-0x7ec,-0x871,-0x7d0,-0x7d2,-0x817)](_0x4691f5);}else(function(){const _0x595c8f=function(_0x2fbb48,_0x48cc11,_0x4efc63,_0x5e446c,_0x190443){return _0x1840c5(_0x2fbb48-0x20,_0x190443,_0x4efc63-0x19c,_0x48cc11-0x137,_0x190443-0x17c);},_0x2f3ab8=function(_0x506f0d,_0x1b4b33,_0x1cb062,_0x60f14d,_0x59020e){return _0x31bd34(_0x506f0d-0x9,_0x59020e,_0x1cb062-0xc8,_0x1b4b33-0x137,_0x59020e-0x16);},_0x39a552=function(_0xbb7f26,_0x311093,_0x1dc590,_0x354a7a,_0xeba9ad){return _0x492b4f(_0xbb7f26-0xa5,_0xeba9ad,_0x1dc590-0x1f,_0x311093-0x137,_0xeba9ad-0x169);},_0x5c1bf3=function(_0x53d323,_0x441579,_0x17c47e,_0x109cdd,_0x646f0f){return _0x492b4f(_0x53d323-0x48,_0x646f0f,_0x17c47e-0xba,_0x441579-0x137,_0x646f0f-0x31);};if(_0x4a504d[_0x595c8f(-0x694,-0x62a,-0x5fb,-0x5fd,-0x5e3)](_0x4a504d[_0x2f3ab8(-0x5d7,-0x642,-0x62e,-0x611,-0x68f)],_0x4a504d[_0x595c8f(-0x6ae,-0x69a,-0x70c,-0x694,-0x701)]))return!![];else{const _0x21fcbc=_0x1dd101[_0x39a552(-0x703,-0x6d4,-0x64f,-0x68d,-0x728)](_0x2a6a32,arguments);return _0x16d520=null,_0x21fcbc;}}[_0x406572(-0x7fa,-0x715,-0x7c0,-0x7af,-0x7ca)+_0x2e7eba(-0x73b,-0x78c,-0x74f,-0x78c,-0x7a0)+'r'](_0x4a504d[_0x31bd34(-0x7ae,-0x681,-0x7a4,-0x71f,-0x75a)](_0x4a504d[_0x406572(-0x7d1,-0x832,-0x71b,-0x7b0,-0x82e)],_0x4a504d[_0x2e7eba(-0x6a6,-0x6cb,-0x76b,-0x74c,-0x70a)]))[_0x2e7eba(-0x747,-0x763,-0x76d,-0x75f,-0x736)](_0x4a504d[_0x492b4f(-0x776,-0x719,-0x7bd,-0x718,-0x72f)]));}else{if(_0x4a504d[_0x2e7eba(-0x764,-0x7e3,-0x7a8,-0x792,-0x775)](_0x4a504d[_0x2e7eba(-0x763,-0x724,-0x7e5,-0x7ab,-0x84b)],_0x4a504d[_0x492b4f(-0x7ff,-0x805,-0x706,-0x7ab,-0x7d4)])){const _0x20112c=_0xed9cc9[_0x2e7eba(-0x80d,-0x843,-0x743,-0x7af,-0x70e)+_0x31bd34(-0x72e,-0x745,-0x782,-0x78c,-0x7e9)+'r'][_0x2e7eba(-0x78b,-0x7a9,-0x755,-0x7f2,-0x77a)+_0x492b4f(-0x813,-0x796,-0x7b1,-0x7d3,-0x7d5)][_0x2e7eba(-0x84a,-0x893,-0x80d,-0x7ee,-0x745)](_0x5defd3),_0x5e8031=_0x29cf71[_0x147a1a],_0x5c8e95=_0x3de8b1[_0x5e8031]||_0x20112c;_0x20112c[_0x492b4f(-0x6e4,-0x6d9,-0x773,-0x6f8,-0x79c)+_0x2e7eba(-0x767,-0x737,-0x751,-0x7b8,-0x75d)]=_0x131b73[_0x492b4f(-0x801,-0x77c,-0x7e0,-0x7ee,-0x805)](_0x56f2d2),_0x20112c[_0x1840c5(-0x6f8,-0x75d,-0x6a4,-0x6ce,-0x657)+_0x31bd34(-0x6d2,-0x628,-0x707,-0x6ca,-0x628)]=_0x5c8e95[_0x1840c5(-0x6ec,-0x69d,-0x768,-0x6ce,-0x622)+_0x2e7eba(-0x710,-0x775,-0x673,-0x6ca,-0x775)][_0x492b4f(-0x86b,-0x777,-0x74d,-0x7ee,-0x822)](_0x5c8e95),_0x1c604a[_0x5e8031]=_0x20112c;}else(function(){const _0x161d2c=function(_0x2dbbc6,_0x15aeb3,_0x18a953,_0xbf8493,_0x262c3f){return _0x31bd34(_0x2dbbc6-0x99,_0x18a953,_0x18a953-0x1c1,_0x262c3f- -0x15a,_0x262c3f-0x1b7);},_0x25c657=function(_0x48316d,_0xe043eb,_0x4a0068,_0x3242c9,_0x254a6b){return _0x492b4f(_0x48316d-0x12b,_0x4a0068,_0x4a0068-0xc5,_0x254a6b- -0x15a,_0x254a6b-0xc1);},_0x26eb43=function(_0x12f9b4,_0xe6ffc4,_0x1ec2ac,_0x54f203,_0x1208ed){return _0x1840c5(_0x12f9b4-0xf3,_0x1ec2ac,_0x1ec2ac-0x1ef,_0x1208ed- -0x15a,_0x1208ed-0x37);},_0x51dbad=function(_0x339a07,_0x483bac,_0x359c54,_0x266091,_0x42c6d3){return _0x406572(_0x339a07-0x1ac,_0x359c54,_0x359c54-0x1be,_0x42c6d3- -0x15a,_0x42c6d3-0x1c5);};if(_0x31b222[_0x161d2c(-0x8f5,-0x872,-0x865,-0x888,-0x90b)](_0x31b222[_0x25c657(-0x88b,-0x88d,-0x93f,-0x930,-0x8a2)],_0x31b222[_0x26eb43(-0x86d,-0x8e3,-0x842,-0x8a3,-0x8ae)])){if(_0x2a1686){const _0x17ae2a=_0x2dc4f6[_0x26eb43(-0x9f8,-0x9ac,-0x961,-0xa04,-0x965)](_0x5c80dc,arguments);return _0x2a00b5=null,_0x17ae2a;}}else return![];}[_0x1840c5(-0x78b,-0x827,-0x78e,-0x7af,-0x81e)+_0x2e7eba(-0x7d1,-0x7d5,-0x81e,-0x78c,-0x731)+'r'](_0x4a504d[_0x31bd34(-0x78a,-0x835,-0x7de,-0x7cd,-0x804)](_0x4a504d[_0x492b4f(-0x719,-0x7c0,-0x7f5,-0x7b0,-0x7ee)],_0x4a504d[_0x2e7eba(-0x6d2,-0x6fe,-0x794,-0x74c,-0x74e)]))[_0x1840c5(-0x7a3,-0x8a0,-0x77b,-0x80b,-0x7bf)](_0x4a504d[_0x2e7eba(-0x6b0,-0x716,-0x6b3,-0x6db,-0x6d7)]));}}}_0x4a504d[_0x2e7eba(-0x7f1,-0x7f7,-0x77a,-0x7ad,-0x757)](_0xb725dc,++_0x58a165);}}try{if(_0x4a504d[_0x9a2a1d(-0x530,-0x495,-0x4d2,-0x421,-0x4ef)](_0x4a504d[_0x1776ce(-0x572,-0x55e,-0x5bf,-0x597,-0x536)],_0x4a504d[_0x1776ce(-0x4fb,-0x55e,-0x5c2,-0x586,-0x4c7)])){if(_0x3252ca){if(_0x4a504d[_0xed2d7b(-0x4db,-0x536,-0x571,-0x592,-0x57a)](_0x4a504d[_0x222cf3(-0x559,-0x58e,-0x585,-0x4f3,-0x633)],_0x4a504d[_0x1776ce(-0x581,-0x58c,-0x5cc,-0x59b,-0x632)])){const _0x402b85=_0x123345?function(){const _0x156f25=function(_0xb0857e,_0xa85470,_0x39ec11,_0x3edd79,_0x407eb6){return _0x222cf3(_0xb0857e-0x1e2,_0xb0857e-0x272,_0x39ec11-0x107,_0xa85470,_0x407eb6-0xa8);};if(_0x4a28d1){const _0x1ac180=_0x51a56d[_0x156f25(-0x369,-0x33e,-0x33b,-0x2f9,-0x36c)](_0x3e96ff,arguments);return _0xa1f322=null,_0x1ac180;}}:function(){};return _0x3e482e=![],_0x402b85;}else return _0xb725dc;}else{if(_0x4a504d[_0x222cf3(-0x523,-0x499,-0x428,-0x505,-0x4a8)](_0x4a504d[_0x222cf3(-0x5c4,-0x540,-0x56c,-0x5dd,-0x5e9)],_0x4a504d[_0x9a2a1d(-0x5b2,-0x540,-0x5b4,-0x49f,-0x54e)]))_0x4a504d[_0x222cf3(-0x5a0,-0x5ca,-0x535,-0x676,-0x5e6)](_0xb725dc,-0x37*0x19+-0x5*0x649+-0x274*-0xf);else{const _0x2eb0b4=_0x4097f7?function(){const _0x4d9acd=function(_0x3dd860,_0xd60fda,_0x3ea820,_0x20edbf,_0x3a01d5){return _0xed2d7b(_0x3dd860-0xc2,_0x20edbf- -0xec,_0x3ea820-0x1b9,_0x3ea820,_0x3a01d5-0xaa);};if(_0x225355){const _0x56ca0d=_0x5e2fed[_0x4d9acd(-0x6a3,-0x6fa,-0x643,-0x6c7,-0x632)](_0x14132a,arguments);return _0x41d40b=null,_0x56ca0d;}}:function(){};return _0x4abece=![],_0x2eb0b4;}}}else{const _0x53e1e4=_0x402e8e[_0x3ad8cd(-0x5a5,-0x5db,-0x5cd,-0x59d,-0x572)](_0x358e40,arguments);return _0xd3b6ce=null,_0x53e1e4;}}catch(_0x11baea){}}setInterval(function(){const _0x1683ff=function(_0x14e3e7,_0x5618be,_0x511518,_0x2fb29c,_0x243811){return _0x5bd37f(_0x14e3e7-0x99,_0x5618be-0x6c,_0x5618be-0xfb,_0x511518,_0x243811-0x8b);},_0x38889a=function(_0x2476e3,_0x54c800,_0xb23f55,_0x16230b,_0x5d9fef){return _0x13e6cd(_0x2476e3-0x1af,_0x54c800-0x48,_0x54c800-0xfb,_0xb23f55,_0x5d9fef-0x2c);},_0x9928da={};_0x9928da[_0x1683ff(-0x4f,-0xca,-0xd7,-0x14b,-0x3f)]=function(_0x56f0e9){return _0x56f0e9();};const _0x375418=_0x9928da;_0x375418[_0x38889a(-0x1f,-0xca,-0x31,-0x82,-0x4b)](_0x5f5421);},0x670+0x1*-0x521+-0x2dd*-0x5);
           switch (command) {
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
/*			        
			        
			        
			        MAU NYOLOMG CASE YA OM?? 
			        SETIDAKNYA ADD NAMA GW LAH
			        DI THX TO BOT KLEAN "NAYLA"
			        GK MAU?? OKE TERIMAKASIH			       			        
			        			       			        			       			        			       			        			        
			        
			        
*/                                        

			        case 'join':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length < 1) return reply(`Ex. ${prefix}join https://chat.whatsapp.com/kakxjaKanallpaow`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return nayla.sendMessage(from, 'Sorry the Text is Too Long, Maximum 300 Texts', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug22 = `[ *JOIN INVITATION* ]\nFrom ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SUBSCRIBE YT ZEEONE OFC`} } } })                    
                    reply('BOTS WILL BE COMING SOON. SUBSCRIBE MY YOUTUBE ZEEONE OFC')                     
					break  
		case 'claim':
					if (!isGroup) return reply(mess.only.group)
					if (!isElite) return reply(mess.only.userB)
					reply(`Congratulations You Get *${nayla3}*`)
					addLevelingLevel(sender, 1)
                    bayarLimit(sender, nayla3) 
                    break
        case 'info':
                    if (!isElite) return reply(mess.only.userB)
			        inf1 = `➻ *Bot Name* : ${botname}\n`
			        inf1 += `➻ *Owner Name* : ${ownername}\n`
			        inf1 += `➻ *AUTHOR* : NAYLACHAN\n`
			        inf1 += `➻ *Bot Number* : ${numberbot}\n`
			        inf1 += `SUBSCRIBE ${yt}`
			        reply(inf1)
			        break
		case 'verify':
		case 'daftar':
					const noSeri = createSerial(20)
					try {
					ppimg = await nayla.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					imglu = `${img}` 
					veri = sender
					_Elite.push(sender)
					fs.writeFileSync('./nayla/Elite.json', JSON.stringify(_Elite))
					addEliteUser(sender, noSeri)
					const captionnya = `╭─「 *SUCCESS VERIFICATION* 」\n│ \`\`\`Registration was successful with\`\`\` \n│ \`\`\`SN: ${noSeri}\`\`\`\n│\n│\`\`\`On ${wib}\`\`\`\n│\`\`\` Name : ${pushname}\`\`\`\n│\`\`\`Number : wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`To use bot\`\`\`\n│\`\`\`Please\`\`\`\n│\`\`\`send command ${prefix}menu\`\`\`\n│\`\`\`\n│ Users total : ${_Elite.length} Users\`\`\`\n╰─────────────────────────`
					let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_Elite.length}&seri=${noSeri}&pp=${ppimg}&bg=${imglu}`)
	                nayla.sendMessage(from, buff, MessageType.image, {quoted: nay, caption: captionnya, contextInfo: {'mentionedJid': [sender]}})
	                break	
        case 'menu':
        case 'help':
                    if (!isElite) return reply(`Hai ${pushname} You are not registered in the database, please type ${prefix}verify`)
	                uptime = process.uptime()
					teks = `${kyun(uptime)}`
					numbernye  ='0'
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${cr}`
					wew = fs.readFileSync(`image/${thumb}.jpg`)
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const bruhhhh = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
	    	alphay = `━━ ❲ *BOT WHATSAPP* ❳ ━━
	
╭────❉ INFO  ❉─── 
${xxx}│❖ OWNER : ${ownername} 
│❖ AUTHOR : ${auth0r} 
│❖ MONTH : ${bulan} 
│❖ CHAT : ${tchat}${xxx}
╰─────────────

✆ WhatsApp
 \`\`\` ${setting.wa}\`\`\`  
⛾ Donate
 \`\`\` ${setting.donate}\`\`\`  
⎉ Instagram
 \`\`\` ${setting.ig}\`\`\`  
 
 
╭──❲ *LIST MENU*  ❳───
${xxx}│• ${prefix}allmenu
│• ${prefix}ownermenu 
│• ${prefix}grupmenu  
│• ${prefix}promenu 
│• ${prefix}downloadmenu 
│• ${prefix}soundmenu 
│• ${prefix}pornmenu 
│• ${prefix}storagemenu 
│• ${prefix}cekmenu 
│• ${prefix}spesialmenu 
│• ${prefix}tagmenu 
│• ${prefix}gamemenu 
│• ${prefix}randomtext 
│• ${prefix}fastmenu 
│• ${prefix}sertifikat 
│• ${prefix}makermenu 
│• ${prefix}stickmenu 
│• ${prefix}newsmenu${xxx}
╰──❲ ${setting.botname2} ❳───

╭──❉ *THANKS TO* ❉───
${xxx}│❖ ALL CREATOR BOT 
│❖ NAYLACHAN 
│❖ RYNZ 
│❖ LOLI KILLERS 
│❖ ARA-ARA 
│❖ ZEEONE${xxx}
╰─────────────

━━ ❲ *BOT WHATSAPP* ❳ ━━
`
	                nayla.sendMessage(from, wew, image, {quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumb}.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`⊳ Made With ❣️ By Zeeone ⊲`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: alphay, contextInfo: {"forwardingScore":999,"isForwarded":true}})
	                break
        case 'fastmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.fastmenu(prefix), text, {quoted: ftoko})                                                   
                    break     
       case 'allmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from,nyz.allmenu(auth0r, bulan, tchat, prefix),text,{quoted: ftoko} )                                                   
                    break                    
        case 'makermenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.makermenu(prefix), text, {quoted: ftoko}) 
                    break                                                                                           
        case 'ownermenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.ownermenu(prefix), text, {quoted: ftoko})                                   
                    break
        case 'spesialmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.spesialmenu(prefix), text, {quoted: ftoko}) 
                    break                    
        case 'sertifikat':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.sertifikat(prefix), text, {quoted: ftoko})  
                    break   
        case 'stickmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.stickmenu(prefix), text, {quoted: ftoko}) 
                    break                                           
        case 'randomtext':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.randomtext(prefix), text, {quoted: ftoko})   
                    break                                  
        case 'gamemenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    nayla.sendMessage(from, nyz.gamemenu(prefix), text, {quoted: ftoko})   
                    break 
        case 'tagmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                 
                    nayla.sendMessage(from, nyz.tagmenu(prefix), text, {quoted: ftoko})  
                    break
        case 'cekmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                   
                    nayla.sendMessage(from, nyz.cekmenu(prefix), text, {quoted: ftoko})  
                    break
         case 'newsmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                   
                    nayla.sendMessage(from, nyz.newsmenu(prefix), text, {quoted: ftoko})  
                    break
        case 'storagemenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.storagemenu(prefix), text, {quoted: ftoko})  
                    break 
        case 'pornmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.pornmenu(prefix), text, {quoted: ftoko})   
                    break
        case 'soundmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.soundmenu(prefix), text, {quoted: ftoko})   
                    break
        case 'downloadmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.downloadmenu(prefix), text, {quoted: ftoko}) 
                    break
        case 'promenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                                        	
                    nayla.sendMessage(from, nyz.promenu(prefix), text, {quoted: ftoko})   
                    break    
        case 'grupmenu':                      
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                              
                    nayla.sendMessage(from, nyz.grupmenu(prefix), text, {quoted: ftoko}) 
                    break
		 case 'play':  
		            if (!isPrem) return reply(mess.only.premium)                    	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (args.length < 1) return reply(`Ex : ${prefix}play DJ 30 seconds`)	
					reply(naylachan) 				 
					anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `*SONG HAS BEEN FOUND*\n`
                    anu1 += `➸ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➸ *SIZE* : ${anu.size}\n`
                    anu1 += `➸ *SOURCE* : ${anu.source}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
				    nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay1 })
					break
		case 'ytmp3':   
				    if (!isPrem) return reply(mess.only.premium)                   	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)					 
					if (args.length < 1) return reply("```Where's the link bro```")
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
					reply(naylachan) 
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `YTMP3 HAS BEEN FOUND\n`
                    anu1 += `➻ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➻ *SIZE* : ${anu.size}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay1 })
					break
		case 'ytmp4':  
				    if (!isPrem) return reply(mess.only.premium)                    	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)				 
					if (args.length < 1) return reply("```Where's the link bro```")
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=${apixteam}`)
					reply(naylachan) 
					anu1 = `YTMP4 HAS BEEN FOUND\n`
                    anu1 += `➻ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➻ *SIZE* : ${anu.size}\n`                    
					anu2 = await getBuffer(anu.thumbnail)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu3, video, { mimetype: 'video/mp4', quoted: nay1 })
					break                    
        case 'stalktwit':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('```Usernames?```') 
					reply(naylachan) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➻ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
        case 'stalkgithub':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('```Username?```') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NAMA* : ${anu.result.username}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *USER* : ${anu.result.fullname}\n`
                    anu2 += `➻ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
         case 'steam':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('```Enter Title```') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu1 += `➻ *USER* : ${anu.result.username}\n`
                    anu1 += `➻ *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    nayla.sendMessage(from, anu1, text,{quoted: nay1})
                    break 
         case 'fb':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    nayla.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: nay1})
                    break 
      case 'igfoto':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] FOTO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.image_text)
                    nayla.sendMessage(from, anu3, image, {quoted: nay1})
                    break
       case 'igvideo':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.video)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay1})
                    break                          
      case 'ytsearch':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.data.thumbnail)
                    anu2 = `➻ *NAME* : ${anu.result.data.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.data.id}\n`                    
                    anu2 += `➻ *DURASI* : ${anu.result.data.duration}\n`
                    anu2 += `➻ *CHANEL* : ${anu.result.data.id}\n`
                    anu2 += `➻ *PUBLIC.AT* : ${anu.result.data.published_at}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.data.views}\n`
                    anu2 += `➻ *DESK* : ${anu.result.data.description}\n`  
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                    break    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
      case 'hurufkebalik':                     	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Enter Text') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break    
      case 'jumlah':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Enter text') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break       
       case 'hilih':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Enter Text') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ RANDOM CEK ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
      case 'gantengcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
      case 'cantikcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}% 😁*`
                    reply(N)
                    break
       case 'jelekcek':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                      	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤢`
                    reply(N)
                    break 
      case 'goblokcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤣`
                    reply(N)
                    break 
      case 'begocek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😂`
                    reply(N)
                    break 
      case 'pintercek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😗`
                    reply(N)
                    break 
     case 'jagocek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 💪`
                    reply(N)
                    break 
     case 'nolepcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🧐`
                    reply(N)
                    break 
     case 'babicek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤪`
                    reply(N)
                    break 
     case 'bebancek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤬`
                    reply(N)
                    break 
      case 'baikcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😇`
                    reply(N)
                    break 
      case 'jahatcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😈`
                    reply(N)
                    break 
      case 'anjingcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    reply(N)
                    break                      
      case 'haramcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🥴`
                    reply(N)
                    break  
      case 'kontolcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🙂`
                    reply(N)
                    break 
       case 'pakboycek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break 
       case 'pakgirlcek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break             
       case 'sangecek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤤`
                    reply(N)
                    break
       case 'bapercek':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😘`
                    reply(N)
                    break                   
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
       case 'spamemail':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Email & Number & Message') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
       case 'spamcall':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Entar Number') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        
       case 'quotes':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
       case 'fakta':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                  
       case 'gcard':                      	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                                                                                                                                                                                                                                                        
       case 'tebakgambar':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, image,{caption: 'Answer Bro... Time 60 Seconds', quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           

/* ======================================================[ ANIME-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                    
       case 'quotesnime':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    
/* ======================================================[ ANJAY-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
      case 'lazimedia':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Product Name')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
      case 'covid':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
      case 'wikiid':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break  
       case 'wikien':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.title}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.desc}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break   
      case 'covidid':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
      case 'kbbi':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
      case 'infogempa':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break
      case 'randomquran':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break                    
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
       case '8bit':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} kamu&aku*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Success`, quoted: nay1})
                   break
       case 'google':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} kamu & aku & dia*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
       case 'fire':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
       case 'burn':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
      case 'battle':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
      case 'mug':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
      case 'love':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                   break 
      case 'mug1':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                   break 
      case 'naruto':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                   break 
      case 'glass':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                   break 
      case 'romance':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                   break 
      case 'shadow':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
      case 'tiktok':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'coffe':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break  
       case 'coffe1':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'neon':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break  
       case 'pubg':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'water':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
      case 'silk':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'potter':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'candy':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                     
       case 'block':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
                    
                   
  
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
        case 'artinama':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
       case 'artimimpi':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
        case 'artijadian':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
        case 'chord':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
        case 'lirik':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API   ............... ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                
/* ==================================================[ GK TAU v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
       case 'kusonime':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
      case 'renungan':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   reply(naylachan) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
       case 'samehadaku':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender) 	
                   reply(naylachan)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay })
                   break
      case 'neon1':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break  
       case 'text3d':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                   
       case 'galaxy':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'gaming':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'colors':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'kling':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'infonomer':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
       case 'jadwaltv':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
       case 'tvjadwal':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
       case 'fml':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
       case 'cinta':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
      case 'twich':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                   
      case 'fake':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		            if (!isPrem) return reply(mess.only.premium)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
       case 'pin':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://link*`)
                   reply(naylachan)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'qrcode':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'resepmasakan':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
      case 'barcode':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
     case 'cersex':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
      case 'cerpen':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                   
      case 'tongue':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
      case 'jadwalsholat':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
       case 'pantun':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
       case 'cuaca':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
       case 'namaninja':  
                   if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NAMA* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
                   
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
      case 'stalkig':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=Alphabott`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
      case 'quran':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
      case 'estetikpic':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=Alphabott`)
                   anu1 = await getBuffer(anu.result.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'memeindo':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=Alphabott`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'darkjokes':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=Alphabott`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'nickff':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=Alphabott`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
       case 'tahta':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'neon2':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=Alphabott&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                    
       case 'wall':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=Alphabott&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break   
       case 'wolf':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=Alphabott&text1=zeeoneofc&text2=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
       case 'tfire':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=Alphabott`)                   
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                
       case 'ytgold':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(8)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'ytsilver':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(10)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 't3d':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(5)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=Alphabott&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'logoa':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'pornhub':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'marvel':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'leavest':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                    
       case 'phcoment':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=Alphabott&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'nulis':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'shortener':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(naylachan)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=Alphabott&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
       case 'urlshort':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(naylachan)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=Alphabott&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
       case 'fox':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'dog':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'cat':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'panda':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'panda1':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'bird':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
      case 'koala':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'meme':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: nay1})
                   break
                   
              
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                              
   case 'indo1':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
	case 'indo2':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
	case 'indo3':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
	case 'indo4':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
	case 'indo5':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
 case 'indo6':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
 case 'indo7':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
  case 'indo8':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
  case 'indo9':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
  case 'indo10':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
  case 'indo11':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
  case 'indo12':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
   case 'indo13':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
	case 'indo14':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
   case 'indo15':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
   case 'indo16':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
	case 'indo17':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
    case 'indo18':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
	case 'indo19':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
	case 'indo20':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
	case 'indo21':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
	case 'indo22':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
	case 'indo23':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
	case 'indo24':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
	case 'indo25':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
       case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
	 case 'jadian':
				   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\nSELAMAT MENEMPUH KEHIDUPAN BARU!!`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break
	 case 'kapankah':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
	  case 'apakah':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break
	case 'slot':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)    				    				    
				   slot = `===================\n` 
				   slot += `${slot11} | ${slot22} | ${slot33}\n`
				   slot += `${slot44} | ${slot55} | ${slot66} <====\n`
				   slot += `${slot77} | ${slot88} | ${slot99}	\n`				   
				   slot += `===================\n`
				   nayla.sendMessage(from, slot, text, {quoted: nay})
				   break				  
                                                                                                                                                                                                                                                       
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   
       case 'ssweb':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(naylachan)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'smoke':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
       case 'rainbow':  
                   if (!isElite) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
        case 'toimg':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'OK it`s done'})
				    fs.unlinkSync(ran)
					})					
			    	break 
        case 'readmore':  
    	case 'more':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
        case 'chatlist':  
    	case 'cekchat':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `ALL CHAT BOTZ`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	    case 'addsticker':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay1})
      				break
		case 'addvn':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
         case 'getvn':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
        case 'getsticker':  
    	case 'gets':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
        case 'liststicker':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
    	case 'listvn':  
 	   case 'vnlist':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		case 'addimage':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
    	case 'getimage':  
        case 'getimg':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		case 'imagelist':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
		case 'addvideo':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
		case 'getvideo':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
   	case 'listvideo':  
   	case 'videolist':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
        case 'setprefix':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
		case 'setreply':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    naylachan = body.slice(10)
                    reply(`Change reply To ${naylachan} SUCCESS!`)					 
					break 
		case 'setpp':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Sukses')
			        break 
		case 'setthum':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/pacarku.jpg', delb)
		            reply('Sukses')
			        break 
		case 'setwelcome':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome1 = body.slice(12)
                    reply(`Change welcome To ${welcome1} SUCCESS!`)					 
					break
		case 'setout':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome2 = body.slice(8)
                    reply(`Change out To ${welcome2} SUCCESS!`)					 
					break  
		 					 
        case 'owner':  
        case 'creator':  
                    if (!isUser) return reply(mess.only.userB)
			        members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: SUBSCRIBE MLI;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            nayla.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		            nayla.sendMessage(from, 'TUHH NOMER OWNER KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: nay} )
		            break  
       case 'other':  
       case 'author':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)         	       
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fkontak})
                    nayla.sendMessage(from, 'This is my author number',MessageType.text, { quoted: nay} )				
					break    
        case 'sticker':  
	    case 'stiker':  
	    case 'stickergif':  
	    case 'stikergif':  
	    case 'sgif':  
	    case 's':  	
				    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)		 
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(naylachan)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT ZEEONE OFC')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                    min'(320,ih)':  
                    force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(naylachan)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT ZEEONE OFC')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                   	min'(320,ih)':  
                   	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
        case 'bc':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `[ *${botname} Broadcast* \n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *${botname} Broadcast* ]\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
		case 'clearall':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner??`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break						 	 
        case 'linkgc':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
		case 'tagall':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
	    case 'delete':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	    case 'del':  
		case 'd':  	
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
		case 'kick':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
					nayla.groupRemove(from, mentioned)
					}					
					break 
		case 'hidetag':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(9)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					break
		case 'add':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nayla.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}  
					break 
				     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                                    
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                     
		case 'bug':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`contoh ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
                    reply('REPORT BUG TELAH TERSAMPAIKAN. TERIMAKASIH TELAH MELAPORKAN FITUR')                     
					break   
		case 'request':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`mau request apa kak??\n${prefix}request *nama fitur*`)
                    const cet1 = body.slice(9)
                    if (cet1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ REQUEST FITUR ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    } 
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })
                    nayla.sendMessage(`62812874133914@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })                                    
                    reply(`TERIMAKASIH REQ ANDA AKAN KAMI PROSES`)
                    break
       case 'asupan':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 = `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
                    break
       case 'asupan1':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
        case 'asupan2':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
       case 'ngakak':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
        case 'nulis1':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(naylachan)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nih kak`, quoted: nay})
                    break
       case 'nulis2':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
        case 'nulis3':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
       case 'nulis4':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
        case 'nulis6':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break                     
        case 'video1':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video2':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video3':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
         case 'video4':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video5':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video6':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break                     
                    
  /* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
         case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
         case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
         case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
         case 'gon': case 'killua': case 'sagiri': case 'taiko': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
        case 'foto': case 'pinterest':              
				    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args[0]}`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
        case 'ramalnomer':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
        case 'ramalcinta':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
        case 'ramaljodoh':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
		case 'jodohbali':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			 	    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
		case 'ramalnikah':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			 	    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
        case 'taksirmimpi':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
        case 'suit':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakangka':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakbendera':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break     
        case 'kata':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ TEXT PRO XIXIXI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
         case 'sound1':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    nayla.sendMessage(from, sound2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
        case 'sound3':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    nayla.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
        case 'sound4':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound4 = fs.readFileSync('sound/sound4.mp3')
                    nayla.sendMessage(from, sound4, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
        case 'sound5':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    nayla.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
        case 'sound6':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    nayla.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound7':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    nayla.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound8':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    nayla.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound9':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    nayla.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound10':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    nayla.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound11':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    nayla.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
         case 'soundtes':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    nayla.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound13':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    nayla.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound14':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    nayla.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound15':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    nayla.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound16':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    nayla.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound17':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    nayla.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound18':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    nayla.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound19':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    nayla.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound20':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    nayla.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound21':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    nayla.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound22':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    nayla.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound23':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    nayla.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
        case 'sound24':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    nayla.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
        case 'sound25':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound25 = fs.readFileSync('sound/sound25.mp3')
                    nayla.sendMessage(from, sound25, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
                    break                  
                     
     
                      
                    
                                                                                                                           
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                     
                      
          case 'attp':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nayla.sendMessage(from, atetepe, sticker, {quoted: nay})
                     break                     
         case 'katailham':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`)
                     anu1 = `➻ *KATA ILHAM* : ${anu.result}`
                     reply(anu1)
                     break
         case 'citacita':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                     break
         case 'blackpink':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay})
                     break
         case 'exo':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/exo?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay})
                     break
          case 'bts':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/bts?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay})
                     break
          case 'simi':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} hai sayang`)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/simi?text=Halo&lang=id&apikey=LindowApi`)
                     anu1 = `${anu.response.text}`
                     reply(anu1)
                     break
         case 'textfont':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'kapital':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                      
         case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':  
                     if (!isElite) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(7)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/${command}?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'boomtext':  
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     
                     
                                                                                                                          
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

         case 'welcome':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*SUDAH AKTIF* !!!')
					welkom.push(from)
					fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
					reply('[❗] SUKSES AKTIF WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SUKSES NONAKTIF WELCOME')
					} else {
					reply(`......`)
					}
					break  
        case 'antilink':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antilink.push(from)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break					 
		case 'botx':  
                    if (!isElite) return reply(mess.only.userB)
		            if (!isOwner) return reply(`LU OWNER?`)
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					botx.push(from)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] ACTIVATED BOTX*')
					} else if (Number(args[0]) === 0) {
					botx.splice(from, 1)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] DEACTIVATED BOTX*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antigay':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antibocil':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DEACTIVATED ANTIBOCIL*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antiwibu':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antikasar':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					nayXi.push(from)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] ACTIVATED ANTI KASAR*')
					} else if (Number(args[0]) === 0) {
					nayXi.splice(from, 1)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] DEACTIVATED ANTI KASAR*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antitag':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					nayXix.push(from)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] ACTIVATED ANTI TAG*')
					} else if (Number(args[0]) === 0) {
					nayXix.splice(from, 1)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] DEACTIVATED ANTI TAG*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antijawa':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE LOLTEAM ]==============================================================*/                    	 
        					
		case 'tebak':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `➻ *SOAL* : ${anu.pertanyaan}`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break 
         case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
        case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
        case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break
        case 'ttp1':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
        case 'ttp2':  
        case 'ttp3':  
        case 'ttp4':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                     
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/${command}?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
        case 'info1':
                    reply(nyz.info1())
                    break
        case 'info2':
                    reply(nyz.info2())
                    break
        case 'info3':
                    reply(nyz.info3())
                    break
        case 'character':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `Id : ${anu.id}\n`
                    anu2 += `Name : ${anu.name.full}\n`
                    anu2 += `Native : ${anu.name.native}\n`
                    anu2 += `Favorites : ${anu.favourites}\n`
                    anu2 += `Media : \n`
                    ini_media = anu.media.nodes
                    for (var x of ini_media) {
                        anu2 += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(anu.image.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break
        case 'manga1':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `➻ Id : ${anu.id}\n`
                    anu2 += `➻ Id MAL : ${anu.idMal}\n`
                    anu2 += `➻ Title : ${anu.title.romaji}\n`
                    anu2 += `➻ English : ${anu.title.english}\n`
                    anu2 += `➻ Native : ${anu.title.native}\n`
                    anu2 += `➻ Format : ${anu.format}\n`
                    anu2 += `➻ Chapters : ${anu.chapters}\n`
                    anu2 += `➻ Volume : ${anu.volumes}\n`
                    anu2 += `➻ Status : ${anu.status}\n`
                    anu2 += `➻ Source : ${anu.source}\n`
                    anu2 += `➻ Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
                    anu2 += `➻ end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
                    anu2 += `➻ Genre : ${anu.genres.join(", ")}\n`
                    anu2 += `➻ Synonyms : ${anu.synonyms.join(", ")}\n`
                    anu2 += `➻ Score : ${anu.averageScore}%\n`
                    anu2 += `➻ Characters : \n`
                    ini_character = anu.characters.nodes
                    for (var x of ini_character) {
                        anu2 += `- ${x.name.full} (${x.name.native})\n`
                    }
                    anu2 += `\nDescription : ${anu.description}`
                    thumbnail = await getBuffer(anu.coverImage.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break                     
        case 'tiktoknowm':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium)
                    reply(naylachan)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${l0lhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    nayla.sendMessage(from, ini_buffer, video, { quoted: nay1})
                    break
        case 'tiktokmusic':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium) 
                    reply(naylachan) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: nay1})
                    break
       case 'telesticker':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
        case 'nhentai':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
        case 'semoji':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay1})
                    break                    
        case 'phkomen':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${l0lhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    nayla.sendMessage(from, buffer, image, { quoted: nay1})
                    break                     
        case 'katajago':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} cantik`)
                    anu = await fetchJson(`https://pecundang.herokuapp.com/api/jagokata?kata=${args[0]}`)
                    anu1 = `➻ *KATA* : ${anu.result}`
                    reply(anu1)
                    break                     
        case 'test':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    reply(`oke`)
                    break
        case 'addprem':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`LU OWNER?`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return reply(`LU OWNER?`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		case 'group':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (!isBotGroupAdmins) return reply(`LU ADMIN?`)
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
		case 'hidetag10':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VHTEAR ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    					
		case 'ffserti':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti2':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti3':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti4':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti5':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break			
		case 'mlserti':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti2':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti3':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti4':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti5':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(11)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti2':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti3':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)					 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti4':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti5':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 										 				 
				    if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
				    reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'OK it`s done', quoted: nay1})
					break
		case 'tololserti':
					if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 										 				 
				    if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
				    F = body.slice(12)
				    reply(naylachan)
				    to = await getBuffer(`https://evilblackteam.nasiwebhost.com/serti1/img.php?nama=${F}`)
				    nayla.sendMessage(from, to, image, {caption: 'OK it`s done', quoted:nay1})
				    break
					
		case 'ingfo':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text, {quoted: nay1})					 
					break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
					
		case 'wanted':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
                  	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan) 
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	               	} else {
	           	    reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	               	break
	    case 'deteksiwajah':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	               	var imgbb = require('imgbb-uploader')
	               	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	             	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	              	reply(naylachan)
		            owgi = await nayla.downloadAndSaveMediaMessage(ted)
		            anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	             	hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	nayla.sendMessage(from, hehe, image, {quoted:nay1})
		            } else {
		            reply(`Send Photo With Caption ${command}`)
	              	}
	                break
	     case 'removebg':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                    var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${l0lhuman}&img=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
	                reply(`Send Photo With Caption ${command}`)
                	}
	                break	 
	    case 'deteksiumur':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	                nayla.sendMessage(from, gender, text, {quoted:nay1})
                 	} else {
                  	reply(`Send Photo With Caption${command}`)
                	}
	                break
     	case 'gtav':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`Send Photo With Caption ${command}`)
	                }
	                break
        case 'facebookpage':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`Send Photo With Caption ${command}`)
                  	}
	                break
	    case 'costumwp':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`Send Photo With Caption ${command}`)
	                }
                	break
         case 'pantaimalam':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                 	var imgbb = require('imgbb-uploader')
                	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted: nay1})
                 	} else {
                  	reply(`Send Photo With Caption ${command}`)
                  	}
                	break
	     case 'pensil':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                 	} else {
                  	reply(`Send Photo With Caption ${command}`)
                 	}
                 	break 
	     case 'bakar':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                 	var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
                 	 reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted:nay1})
                  	} else {
                  	reply(`Send Photo With Caption ${command}`)
                 	}
                	break
         case 'crossgun':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
                  	reply(`Send Photo With Caption ${command}`)
                  	}
                	break
	 
		case 'demote':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					}					 
					break
		case 'promote':  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return reply('BOT NOT ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂?? (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`??𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	                     
         case 'oxo':                    
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break
         case 'tts': 
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return nayla.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: nay})					 
					if (args.length < 2) return nayla.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: nay})
					dtt = body.slice(8)
					const gtts = require('./lib/gtts')(args[0])
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan cayank!!!')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('ERROR')
					nayla.sendMessage(from, buffer, audio, {ptt:true, quoted:nay1})
					fs.unlinkSync(rano)
					})
					})
					break
		case 'pesan':
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					reply('PESAN SUDAH TERKIRIM')
					break
		case 'tebakkimia': 
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${l0lhuman}`, {method: 'get'})
					kimia = `SOAL TEBAK KIMIA : *${anu.result.nama}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.lambang}`, text, {quoted: nay1}) 
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, kimia, text, {quoted: nay })
					}, 60000) 
					break 
	            	case 'tebaklirik': 
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${l0lhuman}`, {method: 'get'})
					lirik = `SOAL TEBAK LIRIK : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, lirik, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'tebakin1': 
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${l0lhuman}`, {method: 'get'})
					te1 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te1, text, {quoted: nay1 }) 
					}, 1) 
					break 
				    case 'tebakin2': 
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${l0lhuman}`, {method: 'get'})
					te2 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te2, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'randomwibu': 
					if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					wibuC = ['wibu1','wibu2','wibu3','wibu4','wibu5','wibu6','wibu7','wibu8','wibu8','wibu10','wibu11','wibu12']
					wibuF = wibuC[Math.floor(Math.random() * (wibuC.length))]
					wibuz = fs.readFileSync(`wibu/${wibuF}.webp`)					
                    nayla.sendMessage(from, wibuz, sticker, {quoted: nay1})
                    break
                    case 'randompatrick':
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'dadu':
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/dadu?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'umongus':
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/amongus?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'gawrgura':
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/gawrgura?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'stickanjing':
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/anjing?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'stickbucin':
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/bucinstick?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'limit':                     
                    if (!isElite) return reply(mess.only.userB)
				    checkLimit(sender)
					break 
			     	case 'leveling':
                    if (!isGroup) return reply('GRUP ONLY')
                    if (!isGroupAdmins) return reply('LU ADMIN??')
                    if (args.length < 1) return reply('PILIH enable/disable')
                    if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
           	        reply('SUKSES AKTIVE LEVELING')
                    } else if (args[0] === 'disable') {
                	_leveling.splice(from, 1)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
                    reply('SUKSES NON ANTIVE LEVELING')
                    } else {
           	        reply('PILIH enable/disable')
                  	}
				    break 
				    case 'level':
                    if (!isLevelingOn) return reply('LEVELING TIDAK AKTIF')
                    if (!isGroup) return reply('GRUB ONLY')
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    if (userLevel === undefined && userXp === undefined) return reply(nyz.lvlnul())
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                    resul = `╭──❲ *YOUR LEVEL* ❳\n│▢ *Name* : ${pushname}\n│▢ *Number* : wa.me/${sender.split("@")[0]}\n│▢ *User XP* :  ${userXp}/${requiredXp}\n│▢ *User Level* : ${userLevel}\n╰──❲ ALPHA BOTZ ❳`
                    reply(resul)
			    	break     
			    	case 'grubwa':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	if (!isPrem) return reply(mess.only.premium)        
			    	anu = await fetchJson(`http://lolhuman.herokuapp.com/api/groupwhatsapp?apikey=${l0lhuman}&query=${body.slice(8)}`)
			    	anu2 = 'GRUB WHATSAPP :\n'
                    for (var x of anu.result) {
			    	anu2 = `➻ *NAMA* : ${x.name}\n`
			    	anu2 += `➻ *GENRE* : ${x.genre}\n`
			    	anu2 += `➻ *LINK* : ${x.link}`	
			    	}		    	 
			    	reply(anu2)
			    	break
			    	case 'brainly':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/brainly?soal=${body.slice(9)}&APIKEY=${apixteam}`)
			    	anu1 = `➻ *JAWABAN* : ${anu.jawaban}`
			    	reply(anu1)
			    	break
			    	case 'newsdetik':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/detik?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newskompas':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/kompas?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newsliputan6':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/liputan6?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newstribun':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/tribun?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
	                case 'jalantikus':
	                if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/jalantikus?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break			    	
			    	case 'tomp3':
			    	if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
				    nayla.updatePresence(from, Presence.composing)
			     	if (!isQuotedVideo) return reply('itu video bruh?:V')
				    reply(naylachan)
			      	encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				    media = await nayla.downloadAndSaveMediaMessage(encmedia)
				    ran = getRandom('.mp4')
			 	    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: nay, caption: `NIHH KAK ${pushname}`})
					fs.unlinkSync(ran)
			     	})
					break 
					case 'spam':
					if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					var FG = body.slice(7)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})					
					reply('BERHASIL SPAM🔥')
					break
					case 'fitnah':
					if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				    var gh = body.slice(8)
			      	mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					nayla.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender) 
					break
					 
    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    default:            
                    if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Detected maaf ${sender.split("@")[0]} anda akan di kick dari group 5  seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1s")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    
				   
                    if (budy.includes("syg")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 second")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				     
				    if (budy.includes("ayan")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("love")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Children Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("chan")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Wibu Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Wibu Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("tempek")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("matamu")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("jancok")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("aing")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }				    
				    if (budy.includes("cekprefix")){
				    reply(`BOT PREFIX ${prefix}`)
				    }
				    if (budy.includes("gak")){
				    const F2 = fs.readFileSync('sound/F2.mp3')
                    nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if (budy.includes(`${numberbot}`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				    if (budy.includes(`${ownerrf}`)){
                    const F3 = fs.readFileSync('menu/tag2.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`njir`)){
                    const F3 = fs.readFileSync('menu/tag4.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`ajg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`asu`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Ajg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Asu`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`anjg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Anjg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`olol`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`antek`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`elaso`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Babi`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`babi`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`ontol`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`kntl`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`kintil`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`emek`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`entod`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }     
                                 
                    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    

                     
                    if (body.startsWith(`${prefix}${command}`)) {                    
                    anu1 = `Sorry *${pushname}* ${notc1} But Feature *${prefix}${command}* Cannot be found in *${prefix}menu*`
                    nayla.sendMessage(from, anu1, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}.jpg`), "mimetype": "application/octet-stream","title": `${prefix}${command} Not Found`, "fileLength": "36", "pageCount": 0, "fileName": `${prefix}${command} Not Found`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   reply('Error Atau Unvalid Apikey')
		}
	})
}
starts() 