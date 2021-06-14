// SC NYA JANGAN DI JUAL NGENTOD
// MAKASIH DAH PAKE 
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
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		Browsers,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const qrcodes = require("qrcode")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs-extra")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const os = require('os');
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const { fbDown } = require('./lib/fb.js')
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const googleImage = require('g-i-s')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const FormData = require('form-data')
const googleIt = require('google-it')
const cron = require('node-cron')
const imgbb = require('imgbb-uploader');
const util = require('util')
const ms = require('parse-ms')
const toMs = require('ms')
const Exif = require('./lib/exif');
const exif = new Exif();
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, effectMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require("./database/bot/menu.js");
const { yta, ytv } = require("./lib/ytdl");
const { Toxic } = require('./lib/Toxic.js')
const { onGoing } = require("./lib/otakudesu.js")
const { newsCnnn} = require('./lib/cnn.js')
const { webp2gifFile } = require("./lib/gif.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { herolist } = require('./lib/herolist.js')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { fotoIg, videoIg } = require('./lib/ig.js')
const translate = require('./lib/translate')
const { cmdadd } = require('./lib/totalcmd.js')
const { weeaboo } = require('./lib/weeaboo.js')
const { lirikLagu } = require('./lib/lirik.js')
const { premium, afk } = require('./function')
const { armpits, feets, thighs, ass, boobs, belly, sideboobs, ahegao, randomLewd, dadu, corona, asupan, jadwalSholat, stimker, gsmarena, bmkg } = require('./lib/misc.js')
const lolkey = 'free' // get in lolhuman.herokuapp.com
const imgb = '8c0a80b3b41f530988993924f47af7dc'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
hit_today = []
owner = '6281278895286'
fake = 'Jepang'
numbernye = '0'
unikodhead = `❒`
unikodbody = `*├◪`
unikodend = `*└◪* `
unikodwing = ["「","」"]
unikodlist = `⦿`
targetpc = '6285795090949'
baterai = 'unknown'
charging = 'unknown'
autostick = true
const X = "⭕"
const O = "❎"
const tunjuk = "👈"
const gaya = '```'
let fakeimage = fs.readFileSync("./stik/wpmobile.png")
//===================================================//
const setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
const _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const tictactoe = JSON.parse(fs.readFileSync("./lib/tictactoe.json"))
const setTtt = require('./lib/game1.js') // Recode tictactoe by mans
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const sambungkata = JSON.parse(fs.readFileSync('./database/sambungkata.json'))
const akinator = JSON.parse(fs.readFileSync('./database/akinator.json'))
//===================================================//
const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari " : " Hari ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam " : " Jam ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit " : " Menit ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function starts() {
    const hexa = new WAConnection()
    hexa.logger.level = 'warn'
    console.log(banner.string)
    hexa.browserDescription=Browsers.macOS("Firefox")
    hexa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
    hexa.on('connecting', () => {
        start('2', 'Connecting...')
    })
    hexa.on('open', () => {
        success('2', 'Connected')
    })
    await hexa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(hexa.base64EncodedAuthInfo(), null, '\t'))
        
        hexa.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		hexa.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		})
		hexa.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log("call dari "+ callerId)
        hexa.sendMessage(callerId, "Telpon = BLOCK!!\nTq Autoresblock!!", MessageType.text)
        await sleep(3000)
        await hexa.blockUser(callerId, "add") // Block user
})
//=================================================//
hexa.on('group-participants-update', async (anu) => {
		 if (!welkom.includes(anu.jid)) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await hexa.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await hexa.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
             if (anu.action == 'add') {
                mdata = await hexa.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                anu_user = hexa.contacts[mem]
                teks = `Halo Sayang @${num.split('@')[0]}\nWelcome in ${mdata.subject}\n\nSilahkan Intro ya sayang\nNama : \nUmur : \nGender : \nAsal : \n\nSemoga Betah dan Jangan Lupa isi`
	            buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/7WK0hqB/a2c095d66e1b.jpg&username=Member&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
		        hexa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove') {
                mdata = await hexa.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = hexa.contacts[mem]
                memeg = mdata.participants.length
                out = `Kenapa tuh? kok bisa keluar? \nSayonara @${num.split('@')[0]} we will miss you`
                buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/7WK0hqB/a2c095d66e1b.jpg&username=Member&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                hexa.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
//=================================================//
hexa.on('group-update', async (anu) => {
  metdata = await hexa.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    hexa.sendMessage(metdata.id, teks, MessageType.text)
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    hexa.sendMessage(metdata.id, teks, MessageType.text)
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\nDeskripsi Baru : ${anu.desc}`
    hexa.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
})
hexa.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const insom = from.endsWith('@g.us')
        const botFebb = insom ? mek.participant : mek.key.remoteJid
		pushname2 = hexa.contacts[botFebb] != undefined ? hexa.contacts[botFebb].vname || hexa.contacts[botFebb].notify : undefined
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const jam = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
        const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		let d = new Date
		let locale = 'id'
		let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
		let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
    	const type = Object.keys(mek.message)[0]
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		hit_today.push(command)
		const args = body.trim().split(/ +/).slice(1)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./lib/totalcmd.json'))[0].totalcmd
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const ownerNumber = ['6288286421519@s.whatsapp.net', '6281278895286@s.whatsapp.net']
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const groupall = hexa.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? hexa.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const totalchat = await hexa.chats.all()
		const unread = await hexa.loadAllUnreadMessages()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isOwner = ownerNumber.includes(senderr)
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isMuted = isGroup ? mute.includes(from) : false
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
        const readmore = '͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
            
        //MESS
		mess = {
			wait: 'Loading...',
			success: `Oke Desu~`,
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				api: 'Mengerror Bang',
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Maaf! Command ini khusus untuk di dalam Group saja.',
				admin: 'Maaf! Command ini khusus untuk admin group saja.',
				premium: 'Maaf! Command ini khusus untuk user premium saja.',
				owner: 'Maaf! Command ini khusus untuk Owner Bot saja.',
				Badmin: 'Maaf! Command ini khusus untuk Bot ketika jadi admin!!',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
				hexa.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage, sendEphemeral: true})
			}

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }
        
        const sendBug = (target, teks) => {
				hexa.toggleDisappearingMessages(target, 7*24*60*60)
				hexa.toggleDisappearingMessages(target, 0)
				sendMess(target, teks)
				}

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./stik/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./stik/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const math = (teks) => {
				return Math.floor(teks)
			}
			const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "liveLocationMessage":{"caption":fake,"jpegThumbnail":fs.readFileSync('./stik/thumb.jpeg')
}}}
const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./stik/thumb.jpeg')
}}}
        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "locationMessage": {
                            //"mimetype": "image/jpeg",
                            "name": fake,
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes, sendEphemeral: true})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                    },
                    message: {
                        "locationMessage": {
                            //"mimetype": "image/jpeg",
                            "name": fake,
                            "jpegThumbnail": fs.readFileSync('./stik/Itsuki.jpg')
                        }
                    }
                }
            })
        }
        const fakeUdin  = (dikirimApa, type, faketeks) => {
          hexa.sendMessage(from, dikirimApa, type, {
            quoted: {
			key: { 
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287811078485-1618184810@g.us" } : {}) }, message: { 
			  "imageMessage": {
			    "mimetype": "image/jpeg", 
			    "caption": faketeks, 
			    "jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)}}}})
        }
        const mentiontext = (teks, memberr, id) => {
          (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : hexa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
        }
        const textImg = (teks) => {
            return hexa.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./stik/Itsuki.jpg')})
        }
        const faketoko = (teks) => {
	anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": fake,
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	hexa.sendMessage(from, teks, MessageType.text, {quoted: anu})
}
const hideTag = async function(from, text){
	let anu = await hexa.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	hexa.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('stik/thumb.jpeg')}, 'extendedTextMessage', {sendEphemeral: true, contextInfo: {"mentionedJid": ane}})
}  
const hideTagStiker = async(from, buffer) => {
    let anu = await hexa.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
    hexa.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
}
const kick = function(from, orangnya){
	for (let i of orangnya){
		hexa.groupRemove(from, [i])
	}
}
const add = function(from, orangnya){
	hexa.groupAdd(from, orangnya)
}
const promoteAdmin = async function(to, target=[]){
    if(!target.length > 0) { return  reply("No target..") }
    let g = await hexa.groupMetadata(to)
    let owner = g.owner.replace("c.us","s.whatsapp.net")
    let me = hexa.user.jid
    for (i of target){
        if (!i.includes(me) && !i.includes(owner)){
            const res = await hexa.groupMakeAdmin(to, [i])
        }else{
            reply("NOT PREMITED")
        }
    }
}
const demoteAdmin = async function(to, target=[]){
    if(!target.length > 0) { return  reply("No target..") }
    let g = await hexa.groupMetadata(to)
    let owner = g.owner.replace("c.us","s.whatsapp.net")
    let me = hexa.user.jid
    for (i of target){
        if (!i.includes(me) && !i.includes(owner)){
            const res = await hexa.groupDemoteAdmin(to, [i])
        }else{
            reply("NOT PREMITED")
        }
    }
}
const sendKontak = (from, nomor, nama, org = "") => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	hexa.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
const hideTagKontak = async(from, nomor, nama, org = "") => {
    vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
    let anu = await hexa.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
    hexa.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
}
const sendFileFromStorage = (path, type, options) => {
hexa.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
console.log(e)
})
}
const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await hexa.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}
const fakeReply = (teks, target, teks2) => {
hexa.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
}
let authorname = hexa.contacts[from] != undefined ? hexa.contacts[from].vname || hexa.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
function addMetadata(packname, author) {	
if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./stik/${name}.exif`)) return `./stik/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./stik/${name}.exif`, buffer, (err) => {	
					return `./stik/${name}.exif`	
				})	
			}
            const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                    fs.unlinkSync(filess)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ./stik/data.exif ${asw} -o ${asw}`, async (error) => {
                    if (error) return reply(`${error}`)
                    hexa.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
                    fs.unlinkSync(asw)
                    });
                });
                });
            }
        const sendWebp = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
                    fs.unlinkSync(filess)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ./stik/data.exif ${asw} -o ${asw}`, async (error) => {
                    if (error) return reply(`${error}`)
                    hexa.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
                    fs.unlinkSync(asw)
                    });
                });
                });
            }
            const sendStickerUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                    fs.unlinkSync(filess)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ./stik/data.exif ${asw} -o ${asw}`, async (error) => {
                    if (error) return reply(`${error}`)
                    hexa.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
                    fs.unlinkSync(asw)
                    });
                });
                });
            }
            const sendSticker = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, {sendEphemeral: true, quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	hexa.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	hexa.sendMessage(from, hasil, type, options).catch(e => {
	hexa.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
                                        
// function for get the winner
const getWin = async(board) => {
    var x = ["❎"]
    var o = ["⭕️"]
    
    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}

// Function tictactoe nyerah created by mans
if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
        return hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp1/" + from + ".json");
        })
        }
// Function tictactoe recode by mans
if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎳 \`\`\`TICTACTOE\`\`\` 🎳🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `\n_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎳 \`\`\`TICTACTOE\`\`\` 🎳🎮\n`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻\n\n`
                    teks += board
                    teks += `\n\n•> Win : @${player2} 🎉`
                    return hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp1/' + from + '.json')
                        hexa.sendMessage(from, text, {quoted:mek, contextInfo:{mentionedJid:[player2 + "@s.whatsapp.net"]}})           
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉\n\n`
                    teks += board
                    teks += `\n\n•> Lose : @${player2} 👻`
                    return hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp1/' + from + '.json')
                        hexa.sendMessage(from, text, {quoted:mek, contextInfo:{mentionedJid:[player1 + "@s.whatsapp.net"]}})  

                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎳 \`\`\`TICTACTOE\`\`\` 🎳🎮\n`
                teks += `•> Draw : @${player1} 🦁\n\n`
                teks += board
                teks += `\n\n•> Draw : @${player2} 🐯`
                return hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp1/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
// Function tictactoe terima atau tidak
if (fs.existsSync(`./temp1/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp1/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎳 \`\`\`TICTACTOE\`\`\` 🎳🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})`
                return hexa.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp1/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		hexa.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp1/" + from + ".json");
	}
}
      var cardUser = 'Free User'
			if (!isPremium) {
				cardUser = 'V I P✨'
			} 
			if (!isOwner) {
				cardUser = 'Owner✨'
			}
			
			 // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                hexa.groupRemove(from, [sender])
            }
        }
            if (budy.toLowerCase() === `${prefix}autosticker enable`){
				autostick = false
			    reply(`Sukses`, `Autosticker status : aktif`)
			}
			if (budy.toLowerCase() === `${prefix}autosticker disable`){
				autostick = true
				reply(`Sukses`, `Autosticker status : mati`)
			}
			// MUTE
        if (isMuted){
            if (!isPremium && !isOwner) return 
            if (budy.toLowerCase() === `${prefix}unmute`){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*-Nino BOT*_`)
            }
        }
         // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && budy.match(/[1-9]{1}/)) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
            // Sambung Kata
            if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = sambungkata[sender.split('@')[0]]
                userAnswer = budy.toLowerCase()
                if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${lolkey}&text=${userAnswer}`)
                    await hexa.sendMessage(from, get_result.result, text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                } else {
                    reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
                }
            }

            // Akinator
            // Premium / VIP apikey only
            if (akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
                kuis = true
                var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                if (step == "0" && budy == "5") return reply("Maaf Anda telah mencapai pertanyaan pertama")
                var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                if (get_result.hasOwnProperty("name")) {
                    var ini_name = get_result.name
                    var description = get_result.description
                    var ini_image = get_result.image
                    var ini_image = await getBuffer(ini_image)
                    ini_txt = `${ini_name} - ${description}\n\n`
                    ini_txt += "Sekian dan terima kasih"
                    await hexa.sendMessage(from, ini_image, image, { quoted: mek, caption: ini_txt }).then(() => {
                        delete akinator[sender.split('@')[0]]
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    return
                }
                var { question, _, step } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak\n"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                if (budy == "5") {
                    var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                    var get_result = await fetchJson(ini_url)
                    var get_result = get_result.result
                    var { question, _, step } = get_result
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                }
                await hexa.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
                    const data_ = akinator[sender.split('@')[0]]
                    data_["question"] = question
                    data_["step"] = step
                    akinator[sender.split('@')[0]] = data_
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                })
            }
// AFK
	if (isGroup) {
		if (mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentiontext(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    fakegroup(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
		}
	    }
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : ?? : 🍊',
		'?? : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		'🍇 : ?? : 🍇'
		]
		
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
		/*if (isGroup && !isCmd) console.log('~>', '[',color('TEXT','lightblue'),']',`${budy} From`, color(pushname),'in',color(groupName))*/
		    if (!autostick)
            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            var a = `yang nyuri anak setan`
            var b = `Nino`
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if (isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            var a = `yang nyuri anak setan`
            var b = `Nino`
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            }
		if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
      /*
         if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
     */
switch (command) {
	case 'owner':
	sendKontak(from, `${owner}`, 'Nino', 'Sibukk!!')
	break
    case 'menu':
    case 'help':
    case '?':
    me = '6281278895286@s.whatsapp.net'
menu =`
╭─「 *INFORMATION* 」
│
│ • *Owner : @${me.split('@')[0]}*
│ • *Total Hit : ${totalhit} Hit*
│ • *Prefix : Multi Prefix*
│ • *Runtime : ${runtime(process.uptime())}*
│
├「 *STATUS USER* 」
│
│ • *Name : ${pushname}*
│ • *Tag : @${senderr.split('@')[0]}*
│ • *Premium :* ${isPremium ? '_YES_ 👑' : '_NO_'}
│
├「 *LIST MENU* 」
│
├ *${prefix}ownermenu*
├ *${prefix}gamemenu*
├ *${prefix}stickermenu*
├ *${prefix}othermenu*
├ *${prefix}groupmenu*
├ *${prefix}downloadmenu*
├ *${prefix}wibumenu*
├ *${prefix}funmenu*
├ *${prefix}infomenu*
├ *${prefix}effectmenu*
├ *${prefix}sewabot*
│
╰──「 *Nino-BOTZ* 」
`
hexa.sendMessage(from, { text: menu, jpegThumbnail: fs.readFileSync('./stik/wpmobile.png')}, 'extendedTextMessage', { sendEphemeral: true, quoted: freply2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [me, senderr] }})
break
case 'ownermenu':
hexa.sendMessage(from, ownerMenu(prefix), MessageType.text, {quoted: mek})
break
case 'downloadmenu':
hexa.sendMessage(from, downloadMenu(prefix), MessageType.text, {quoted: mek})
break
case 'gamemenu':
hexa.sendMessage(from, gameMenu(prefix), MessageType.text, {quoted: mek})
break
case 'rules':
hexa.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: mek})
break
case 'wibumenu':
hexa.sendMessage(from, wibuMenu(prefix), MessageType.text, {quoted: mek})
break
case 'effectmenu':
hexa.sendMessage(from, effectMenu(prefix), MessageType.text, {quoted: mek})
break
case 'infomenu':
hexa.sendMessage(from, infoMenu(prefix), MessageType.text, {quoted: mek})
break
case 'stickermenu':
hexa.sendMessage(from, stickerMenu(prefix), MessageType.text, {quoted: mek})
break
case 'othermenu':
hexa.sendMessage(from, otherMenu(prefix), MessageType.text, {quoted: mek})
break
case 'groupmenu': 
case 'grupmenu': 
hexa.sendMessage(from, groupMenu(prefix), MessageType.text, {quoted: mek})
break
case 'funmenu':
hexa.sendMessage(from, funMenu(prefix), MessageType.text, {quoted: mek})
break
/*menu = `❏  ${ucapanWaktu} *@${senderr.split('@')[0]}*
│
├  Jam : ${jam}
├  Hari : ${week} ${weton}
├  Tanggal : ${date}
└  Premium : ${isPremium ? '_YES_ 👑' : '_NO_'}


❏  S T I C K E R - T O O L S
├  ${prefix}toimg 
├  ${prefix}dadu
├  ${prefix}doge
├  ${prefix}patrick
├  ${prefix}gura
├  ${prefix}attp *teks/reply teks*
├  ${prefix}semoji *emoji*
├  ${prefix}sticker *reply foto/video*
├  ${prefix}smeme *teks|teks*
├  ${prefix}swm *pack|author*
├  ${prefix}take *pack|author* 
├  ${prefix}ttp *teks/reply stiker*
├  ${prefix}trigger *reply foto*
└  ${prefix}tovideo *reply sgif*

❏  GAME - M E N U
├  ${prefix}slot
├  ${prefix}sambungkata
├  ${prefix}deletesk
├  ${prefix}akinator
├  ${prefix}deleteakinator
├  ${prefix}tebakgambar
├  ${prefix}tebakanime
├  ${prefix}tebakgokil
├  ${prefix}tictactoe *@tag lawan*
├  ${prefix}suit *batu/kertas/gunting*
└  

❏  W I B U - M E N U
├  ${prefix}loli
├  ${prefix}lolivideo
├  ${prefix}waifu
├  ${prefix}neko
├  ${prefix}nekonime
├  ${prefix}sagiri
├  ${prefix}wallnime
├  ${prefix}megumin
├  ${prefix}topanime
├  ${prefix}otakuongoing
├  ${prefix}nhentai *code*

❏  I M A G E - E F F E C T
│   _usage : reply foto_
├  ${prefix}memegen *teks|teks*
├  ${prefix}greyscale
├  ${prefix}removebg
├  ${prefix}gtav
├  ${prefix}sketch
├  ${prefix}rainbow
├  ${prefix}sepia
├  ${prefix}invert
└  ${prefix}wasted

❏  S O U N D - E F F E C T
│   _usage : reply video/audio_
├  ${prefix}bass *optional*
├  ${prefix}vibra *optional*
├  ${prefix}earrape *optional*
├  ${prefix}fast
├  ${prefix}citacita
├  ${prefix}reverse
├  ${prefix}slow
├  ${prefix}apulsator
├  ${prefix}robot
├  ${prefix}tomp3
└  ${prefix}tovn

❏  D O W N L O A D E R
├  ${prefix}ig *link*
├  ${prefix}fb *link*
├  ${prefix}twitter *link*
├  ${prefix}tiktok *link*
├  ${prefix}nhentaipdf *code*
├  ${prefix}tiktokaudio *link*
├  ${prefix}mediafire *link*
├  ${prefix}soundcloud *link*
├  ${prefix}play *title*
├  ${prefix}ytmp3 *link*
└  ${prefix}ytmp4 *link*

❏  O T H E R - M E N U
├  ${prefix}brainly *query*
├  ${prefix}ssweb *query*
├  ${prefix}google *query*
├  ${prefix}image *query*
├  ${prefix}carbon *teks*
├  ${prefix}nulis *teks*
├  ${prefix}igstalk *username*
├  ${prefix}githubstalk *username*
├  ${prefix}tiktokstalk *ussername*
├  ${prefix}tourl *reply foto/video*
├  ${prefix}lirik *query*
└  ${prefix}ytsearch *query*

❏  G R O U P - M E N U
│   _usage : only use in group_
├  ${prefix}afk *alasan*
├  ${prefix}sider *reply chat bot*
├  ${prefix}infogrup
├  ${prefix}promote
├  ${prefix}demote
├  ${prefix}listonline
├  ${prefix}tagall *teks*
├  ${prefix}leave
├  ${prefix}mute
├  ${prefix}unmute
├  ${prefix}setgrupname
├  ${prefix}setppgrup
├  ${prefix}setdesc
├  ${prefix}opengrup
├  ${prefix}closegrup
├  ${prefix}hidetag *teks/reply teks*
├  ${prefix}autosticker *enable | disable*
├  ${prefix}welcome *enable | disable*
└  ${prefix}antilink *enable | disable*

❏  R A N D O M 
├  ${prefix}botstat
├  ${prefix}bugreport 
├  ${prefix}cekmati *nama*
├  ${prefix}toxic
├  ${prefix}owner
├  ${prefix}sewabot
├  ${prefix}donasi
├  ${prefix}join *link grup*
├  ${prefix}ping
└  ${prefix}runtime

❏ P R E M I U M - M E N U
├  ${prefix}premium add *@tag|nomor*
├  ${prefix}premium del *@tag|nomor*
├  ${prefix}listpremium
└  ${prefix}cekpremium


❏  I N G F O - B O T
├  Lib : Baileys
├  Creator : MhankBarBar
├  Hit Today : ${hit_today.length} Hit
├  Total Hit : ${totalhit} Hit
└  Runtime : ${runtime(process.uptime())}
`
hexa.sendMessage(from, { text: menu, jpegThumbnail: fs.readFileSync('./stik/wpmobile.png')}, 'extendedTextMessage', { sendEphemeral: true, quoted: freply2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [me, senderr] }})
           	break*/
           
case 'colorize':
var istimer = (ts) => require('moment-timezone').duration(moment() - moment(ts * 1000)).asSeconds()
var deepai = require('deepai');
deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');
try {
var medianye = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
        console.log(medianye)
		var mediaData = await hexa.downloadAndSaveMediaMessage(medianye)
		 reply(mess.wait)
		 ffmpeg(mediaData)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
           });
           var respoimage = `${resp.output_url}`
          const response = await axios({
          method: "get",
          url: respoimage,
          responseType: 'arraybuffer'
        })
                await hexa.sendMessage(from, response.data, image, {mimetype: Mimetype.jpg, caption: 'nih om', quoted: mek})

            });
		} catch(err) {
			reply(`${err}`)
		}
		break
		//------------------< Game >-------------------
		case 'tictactoe': // Recode tictactoe by mans
            case 'ttt':
					if (!isGroup)return reply('*Khusus group*')
					if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
					if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
					if (fs.existsSync(`./temp1/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}deletesesi-ttt*, untuk menghapus sesi`)
					if (args.length === 0) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
				    tttSkuy = setTtt(`${from}`)
					tttSkuy.status = false
					tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
					tttSkuy.Y = args[0].replace("@", "");
					fs.writeFileSync(`./temp1/${from}.json`, JSON.stringify(tttSkuy, null, 2))
					starGame = `@${sender.replace("@s.whatsapp.net", "")} menantang ${args[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain`
					hexa.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
					break
       case 'deletesesi-ttt': // Recode tictactoe by mans
       case 'deletettt':
                       delete tictactoe[senderNumber]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))                        
					if (fs.existsSync('./temp1/' + from + '.json')) {
						fs.unlinkSync('./temp1/' + from + '.json')
						reply('Berhasil menghapus sesi tictactoe di grup ini')
					} else {
						reply('Tidak ada sesi game tictactoe di grup ini')
					}
					    break
		case 'tebakgambar': // case by piyo-chan
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "*JAWABLAH TEBAK GAMBAR BERIKUT*\n\nWaktu : 30s" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("*Jawaban*: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'canceltebakgambar':
                case 'deletetg':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break
             case 'sambungkata':
                    if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${lolkey}&text=${ini_txt}`)
                    get_result = get_result.result
                    await hexa.sendMessage(from, get_result, text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                    break
                case 'cancelsambungkata':
                case 'deletesk':
                    if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki game sebelumnya")
                    delete sambungkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    reply("Success mengcancel sambung kata sebelumnya")
                    break
                 case 'akinator': // Premium / VIP apikey only
                    if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkey}`)
                    var { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    await hexa.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
                        akinator[sender.split('@')[0]] = data
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    break
                case 'cancelakinator':
                case 'deleteakinator':
                    if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[sender.split('@')[0]]
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    reply("Success mengcancel akinator sebelumnya")
                    break
             case 'tebakgokil':
		            anu = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${lolkey}`, {method: 'get'})
		            siapariu = `*${anu.result.question}*`
		            setTimeout( () => {
		            reply('*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
		            }, 30000) // 1000 = 1s,
		            setTimeout( () => {
		            reply('_10 Detik lagi…_', text) // ur cods
		            }, 20000) // 1000 = 1s,
		            setTimeout( () => {
		            reply('_20 Detik lagi_…', text) // ur cods
		            }, 10000) // 1000 = 1s,
		            setTimeout( () => {
		            reply('_30 Detik lagi_…', text) // ur cods
		            }, 2500) // 1000 = 1s,
		            setTimeout( () => {
		            hexa.sendMessage(from, siapariu, text, {quoted: mek }) // ur cods
		            }, 0) // 1000 = 1s,
		            break
        case 'tebakanime':
			       anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`, {method: 'get'})
			       anime = await getBuffer(anu.soal)
			       setTimeout( () => {
			       reply('*➸ Jawaban :* '+anu.jawaban, text, {quoted: mek}) // ur cods
			       }, 30000) // 1000 = 1s,
			       setTimeout( () => {
			       reply('_10 Detik lagi…_', text) // ur cods
			       }, 20000) // 1000 = 1s,
			       setTimeout( () => {
			       reply('_20 Detik lagi_…', text) // ur cods
			       }, 10000) // 1000 = 1s,
			       setTimeout( () => {
			       reply('_30 Detik lagi_…', text) // ur cods
			       }, 2500) // 1000 = 1s,
			       setTimeout( () => {
			       hexa.sendMessage(from, anime, image, {quoted: mek }) // ur cods
			       }, 0) // 1000 = 1s,
		           break
		//------------------< Premium >-------------------
		case 'premium': 
                        if (!isOwner) return  reply(mess.only.owner)
                        if (args[0] === 'add') {
                        if (mek.message.extendedTextMessage != undefined) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

                        premium.addPremiumUser(mentioned[0], args[2], _premium)
                        reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
                          } else {
                            
                           premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
                           reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                            }
                            } else if (args[0] === 'del') {
                            if (mek.message.extendedTextMessage != undefined) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
                           fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                           reply(from, mess.doneOwner)
                           } else {
                          _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
                          fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                          reply(from, mess.doneOwner)
                          }
                          } else {
                          reply(`wrongFormat`)
                          }
                          break
      case 'premiumcheck':
	  case 'cekpremium': 
		 if (!isPremium) return fakegroup(mess.only.owner)
	     const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
	     fakegroup(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
		 break
            case 'listprem':
            case 'listpremium':          
                let txt = `「 *PREMIUM USER LIST* 」\n\n`
                let men = [];
		        for (let i of _premium){
                    men.push(i.id)
                    const checkExp = ms(i.expired - Date.now())
                    txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                }
                mentions(txt, men, true)
                break
            case 'infogrup':
            case 'infogrouup':
            case 'grupinfo':
            case 'groupinfo':
                if (!isGroup) return reply(mess.only.group)
                try {
                    var pic = await hexa.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
                hexa.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
                break
               case 'me':
			   case 'profile':
    				hexa.updatePresence(from, Presence.composing)
    				try {
					profil = await hexa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					thu = await hexa.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
					me = hexa.user
					uptime = process.uptime()
				    profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'Tidak'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'Tidak'}\n➸ *Banned :* Tidak\n➸ *Prefix :* 「 MULTI PREFIX 」\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nProfile Bot\n➸ *Nama bot :* ${me.name}\n➸ *Author :* Nino \n➸ *The bot is active on :* ${kyun(uptime)}\n`
					buff = await getBuffer(profil)
					hexa.sendMessage(from, buff, image, {quoted: freply2, caption: profile})
					break
                case 'apakah':
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				case 'nilai':
					rate = body.slice(1)
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
					case 'gantengcek':
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
			   case 'cantikcek':
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
				case 'cekwatak':
					watak = body.slice(1)
					const wa =['penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik Hati','penyabar','Uwu','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
				case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
			case 'truth':
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					hexa.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
				case 'dare':
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					hexa.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break		
			 case 'jadian':
			        jds = []
		            jdii = groupMembers
		            koss = groupMembers
		            akuu = jdii[Math.floor(Math.random() * jdii.length)]
		            diaa = koss[Math.floor(Math.random() * koss.length)]
			        teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
			        jds.push(akuu.jid)
			        jds.push(diaa.jid)
			        mentions(teks, jds, true)
			        break
			  case 'cantik':
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
            case 'ganteng':
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
			  case 'babi':
					membr = []
					const meg = groupMembers
					const mge = groupMembers
					const ba = meg[Math.floor(Math.random() * meg.length)]
					const bi = pushname[Math.floor(Math.random() * mge.length)]
					teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
					membr.push(ba.jid)
					mentions(teks, membr, true)
					break
		    case 'beban':
					membr = []
					const nge = groupMembers
					const tod = groupMembers
					const beb = nge[Math.floor(Math.random() * nge.length)]
					const an = pushname2[Math.floor(Math.random() * tod.length)]
					teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
					membr.push(beb.jid)
					mentions(teks, membr, true)
					break
		case 'nobg':
		case 'removebg':
		            if (!isPremium) return reply(mess.only.premium)
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(mess.wait)
	                owgi = await hexa.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(10)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolkey}&img=${anu.display_url}`)
	                hexa.sendMessage(from, hehe, image, {quoted: mek, caption: 'Nih Hasilnya Kak...'})
	                } else {
	                reply('Jangan tambah kan apapun pada command')
	   }
	                break
	case 'afk': // by Slavyan & Recode By Nino
                if (!isGroup) return reply(mess.only.group)
                if (isAfkOn) return fakegroup('Woe Kalo Mau Afk Jangan Nimbrung di sini')
                const p = args[1]
		        const reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender, time, reason, _afk)
               // const timeru = ms(await time - Date.now())
               const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
               fakegroup(aluty)
               break
case 'ig':
case 'instagram':
if (args.length < 1) return reply('Link Yang Mana? ')
if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply(mess.error.Iv)
teks = args.join(' ')
if (!teks.endsWith('-video') && !teks.endsWith('-foto')) return reply('Ketik -foto / -video Untuk Mengisi Option ')
reply(mess.wait)
if (teks.endsWith('-foto')) {
igl = teks.replace('-foto',"") 
res = await fotoIg(igl).catch(e => {
  reply('_[ ! ] Error Gagal Dalam Masuk Web Atau Link Error_')
})
sendFileFromUrl(res[0].foto, image, {quoted: mek})
}
if (teks.endsWith('-video')) {
igl = teks.replace('-video',"")
res = await videoIg(teks).catch(e => {
reply('_[ ! ] Error Gagal Dalam Masuk Web Atau Link Error')
})
sendFileFromUrl(res[0].video, video, {mimetype: 'video/mp4', quoted: mek})
}
break
		case 'nekonime':
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
           hasil = await getBuffer(data.url)
           hexa.sendMessage(from, hasil, image, {quoted: mek})
           break
		  case 'tahta':
          case 'harta':
              tahta = args.join(' ')
              if (args.length < 1) return reply('Text?')
              if (args.length > 10) return reply('Text maximal 10')
              buff = await getBuffer(`https://lolhuman.herokuapp.com/api/hartatahta?apikey=${lolkey}&text=${tahta}`)
              hexa.sendMessage(from, buff, image, {quoted: mek, caption: `Harta Tahta ${tahta}`})
              break
			case 'citacita':
               const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
               const cita3 = cita[Math.floor(Math.random() * cita.length)]
               cita2 = await getBuffer(cita3)
               hexa.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
               break
        case 'mute':
                if (!isGroup) return reply(mess.only.group)
                if (!isPremium && !isOwner) return reply(mess.only.premium)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*-Nino BOT*_`)
                break
          case 'antilink':
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
                if (!q) return reply(`Pilih enable atau disable`)
                if (args[0].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
                } else if (args[0].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('*「 ANTILINK DI NONAKTIFKAN 」*')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
		case 'donate': 
        case 'donasi':
                textImg(`GoPay : 082183281304\nSaweeria : https://saweria.co/NakanoNino\nDana : 088286421519`)
                break
        case 'sewabot':
                textImg(`*Sewabot*\n10k Perbulan\nGoPay : 082183281304\nDana : 088286421519\nMinat Hub\nwa.me/6288286421519\nhttps://instagram.com/nino.chan26`)
                break
            case 'sourcecode': 
            case 'sc': 
            case 'src':
                textImg(`Bot ini menggunakan sc : https://github.com/Nino-chan02/NinoWangy`)
                break
      case 'setgrupname':
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return 
                if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
                hexa.groupUpdateSubject(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
         case 'setdesc':
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
                hexa.groupUpdateDescription(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
         case 'setppgrup':
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await hexa.downloadMediaMessage(encmedia)
                    hexa.updateProfilePicture(from, media)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
                }
                break
     case 'nhentaipdf':
           if (!isPremium) return reply(mess.only.premium)
           reply(mess.wait)
           if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 212121`)
           henid = args[0]
           get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
           get_result = get_result.result
           ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
           get_info = get_result.info
           ini_txt += `Parodies : ${get_info.parodies}\n`
           ini_txt += `Character : ${get_info.characters.join(", ")}\n`
           ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
           ini_txt += `Pages : ${get_info.pages}\n`
           ini_txt += `_Sending document..._`
           buffer = await getBuffer(get_result.image[0])
           anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
           buffer2 = await getBuffer(anu.result)
           hexa.sendMessage(from, buffer, image, {caption: ini_txt, quoted: mek})
           hexa.sendMessage(from, buffer2, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf` })
           break
           case 'ncode':
                    if (!isPremium) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    reply(mess.wait)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await hexa.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
   case 'nhentai':
                    if (!isPremium) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    reply(mess.wait)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
//case nya bang
case 'inspect':
try {
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
if (!q) return reply('masukan link wa')
cos = args[0]
var net = cos.split('https://chat.whatsapp.com/')[1]
if (!net) return reply('pastikan itu link https://whatsapp.com/')
 jids = []
let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
json: ["query", "invite",net],
expect200:true })
let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
for ( let y of participants) {
par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
}
mentions(par,jids,true)
} catch {
reply('Link error')
}
break
case 'join':
if (!q) return reply('error su')
if (!isPremium) return reply(mess.only.premium)
if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
link = args[0].replace('https://chat.whatsapp.com/','')
fak = hexa.query({ json: ['action', 'invite', link],
expect200: true })
reply('Berhasil Masuk Grup')
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*LIST HERO*\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'play':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `${unikodhead}「  *Youtube Search*  」
${unikodbody} Judul :* ${res.all[0].title}
${unikodbody} ID Video :* ${res.all[0].videoId}
${unikodbody} Diupload Pada :* ${res.all[0].ago}
${unikodbody} Views :* ${res.all[0].views}
${unikodbody} Durasi :* ${res.all[0].timestamp}
${unikodbody} Channel :* ${res.all[0].author.name}
${unikodend}  *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `${unikodhead}${unikodwing[0]} *${botname}* ${unikodwing[1]}
${unikodbody} Judul :* ${res.all[0].title}
${unikodbody} ID Video :* ${res.all[0].videoId}
${unikodbody} Diupload Pada :* ${res.all[0].ago}
${unikodbody} Views :* ${res.all[0].views}
${unikodbody} Durasi :* ${res.all[0].timestamp}
${unikodbody} Channel :* ${res.all[0].author.name}
${unikodend}  *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'facedetect':
var istimer = (ts) => require('moment-timezone').duration(moment() - moment(ts * 1000)).asSeconds()
var deepai = require('deepai');
deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');
try {
var medianye = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
        console.log(medianye)
		var mediaData = await hexa.downloadAndSaveMediaMessage(medianye)
		 reply(mess.wait)
		 ffmpeg(mediaData)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("facial-recognition", {
                    image: fs.createReadStream("./output.jpg"),
           });
           var respoimage = `${resp.output_url}`
          const response = await axios({
          method: "get",
          url: respoimage,
          responseType: 'arraybuffer'
        })
                await hexa.sendMessage(from, response.data, image, {mimetype: Mimetype.jpg, caption: mess.success, quoted: mek})

            });
		} catch(err) {
			reply(`${err}`)
		}
		break
        case 'getpp':
                    if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
                        linkpp = await hexa.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                        buffer = await getBuffer(linkpp)
                        hexa.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
                    } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
                        mberr = mek.message.extendedTextMessage.contextInfo.participant
                        linkpp = await hexa.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                        buffer = await getBuffer(linkpp)
                        hexa.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
                    } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
                        mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                        linkpp = await hexa.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                        buffer = await getBuffer(linkpp)
                        hexa.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
                    }
                    break
case 'ad':
					if (args.length < 1)return reply('Tag Orangnya')
					reply(mess.wait)
					var imgbb = require('imgbb-uploader')
					ghost = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] || from
					pp = await hexa.getProfilePicture(ghost)
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
					wtd = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=demo`)
					hexa.sendMessage(from, wtd, image, {quoted: mek, caption: mess.success})
					break
case 'sider':
if(!isGroup) return reply(mess.only.group)
try {
infom = await hexa.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `*• Dibaca oleh:*\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
teks += `*• Tersampaikan pada:*\n\n`
for(let i of infom.deliveries){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch (e) {
console.log(color(e))
reply('Reply chat bot!')
	}
break
          case 'kickall':
                    if (!isOwner) return reply(mess.only.owner)
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					hexa.groupRemove(from, members_id)
					break
					case 'd':
					case 'del':
					case 'delete': // MR.CYSER
					try {
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
				           	 hexa.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
				       } catch (e){
					         reply('Reply chat bot')
					}
					break
case 'eval':
		try {
		if (!isOwner) return
		sy = args.join(' ')
		return eval(sy)
		} catch(e) {
		reply(`${e}`)
		}
		break
case 'lirik':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
lirikLagu(q).then((res) => {
let lirik = `Lirik Lagu ${q}

${res[0].result}
`
reply(lirik)
})
break
case 'slot':
                somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '?? : 🍒 : 🍒') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '?? : 🍐 : 🍐') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
	     	    }
	        break
case 'jadwalsholat':
            case 'jadwalsolat':
            case 'js':
            case 'jadwalshalat':            
                if (!q) return reply(mess.wrongFormat)
                reply(mess.wait)
                jadwalSholat(q)
                    .then((data) => {
                        data.map(async ({isya, subuh, dzuhur, ashar, maghrib, terbit}) => {
                             xx = subuh.split(':')
                             yy = terbit.split(':')
                             xy = xx[0] - yy[0]
                             yx = xx[1] - yy[1]
                             perbandingan = `${xy < 0 ? Math.abs(xy) : xy} jam ${yx < 0 ? Math.abs(yx) : yx} menit`
                             msg = `Jadwal sholat untuk ${q} dan sekitarnya ( *${tanggal}* )\n\nDzuhur: ${dzuhur}\nAshar: ${ashar}\nMaghrib: ${maghrib}\nIsya: ${isya}\nSubuh: ${subuh}\n\nDiperkirakan matahari akan terbit pada pukul ${terbit} dengan jeda dari subuh sekitar ${perbandingan}`
                            reply(msg)
                            console.log('Success sending jadwal sholat!')
                        })
                    })
                    .catch(async (err) => {
                        console.log(err)
                        reply(`${err}`)
                    })
            break
case 'gempa':            
                reply(mess.wait)
                bmkg()
                    .then(async ({ result }) => {
                         teksInfo = `${result.lokasi}\n\nKoordinat: ${result.koordinat}\nKedalaman: ${result.kedalaman}\nMagnitudo: ${result.magnitude} SR\nPotensi: ${result.potensi}\n\n${result.waktu}`
                        sendMediaURL(from, result.maps, teksInfo)
                        console.log('Success sending info!')
                    })
                    .catch(async (err) => {
                        console.log(err)
                        reply(`${err}`)
                    })
            break
case 'gsmarena':
            if (!q) return reply(mess.wrongFormat)
            reply(mess.wait)
                try {
                    gsmarena(q)
                        .then(async ({ result }) => {
                            sendMediaURL(from, result.image, `${result.title}\n${result.spec}`)
                            console.log('Success sending phone info!')
                        })
                } catch (err) {
                    console.log(err)
                    reply(`${err}`)
                }
            break
case 'findsticker':
            case 'findstiker':
                if (!q) return reply(mess.wrongFormat)
                reply(mess.wait)
                try {
                    stimker(q)
                        .then(async ({ result }) => {
                            if (result.response !== 200) return reply('Not found!')
                            for (let i = 0; i < result.data.length; i++) {
                                sendStickerFromUrl(from, result.data[i])
                            }
                            console.log('Success sending sticker!')
                        })
                } catch (err) {
                    console.log(err)
                    reply(`Error!\n\n${err}`)
                }
            break
case 'asupan': // shansekai                
                if (!isPremium) return reply(mess.only.premium)
                reply(mess.wait)
                asupan()
                    .then(async (body) => {
                        asupann = body.split('\n')
                        asupanx = asupann[Math.floor(Math.random() * asupann.length)]
                        sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
                        console.log('Success sending video!')
                    })
                    .catch(async (err) => {
                        console.log(err)
                        reply(`${err}`)
                    })
            break
case 'corona':
            case 'coronavirus':
                if (!q) return reply(mess.wrongFormat)
                reply(mess.wait)
                corona(q)
                    .then(async (res) => {
                        reply(' Covid Info - ' + q + ' \n\n Total Cases: ' + `${res.cases}` + '\n Today\'s Cases: ' + `${res.todayCases}` + '\n Total Deaths: ' + `${res.deaths}` + '\n Today\'s Deaths: ' + `${res.todayDeaths}` + '\n Active Cases: ' + `${res.active}` + '.')
                        console.log('Success sending Result!')
                    })
                    .catch(async (err) => {
                        console.log(err)
                        reply(`${err}`)
                    })
            break
case 'neko':            
                reply(mess.wait)
                console.log('Getting neko image...')
                sendMediaURL(from, (await neko.sfw.neko()).url)
                    .then(() => console.log('Success sending neko image!'))
                    .catch(async (err) => {
                        console.error(err)
                        reply('Error!')
                    })
            break
case 'kemono':            
                reply(mess.wait)
                console.log('Getting kemonomimi image...')
                sendMediaURL(from, (await neko.sfw.kemonomimi()).url)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch(async (err) => {
                        console.error(err)
                        reply('Error!')
                    })
            break
case 'yuri':
                reply(mess.wait)
                console.log('Getting yuri image...')
                sendMediaURL(from, (await neko.nsfw.eroYuri()).url)
                    .then(() => console.log('Success sending yuri image!'))
                    .catch(async (err) => {
                        console.error(err)
                        reply('Error!')
                    })
            break
case 'femdom':
                reply(mess.wait)
                console.log('Getting femdom image...')
                sendMediaURL(from, (await neko.nsfw.femdom()).url)
                    .then(() => console.log('Success sending femdom image!'))
                    .catch(async (err) => {
                        console.error(err)
                        reply('Error!')
                    })
            break
            case 'lewd':
                    reply(mess.wait)
                    randomLewd()
                        .then(async ({ url }) => {
                            sendMediaURL(from, url)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.log(err)
                            reply('Error!')
                        })
            break
case 'fetish':
                if (!q) return reply(mess.wrongFormat)
                    reply(mess.wait)
                    try {
                        if (ar[0] === 'armpits') {
                            armpits()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (ar[0] === 'feets') {
                            feets()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (ar[0] === 'thighs') {
                            thighs()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (ar[0] === 'ass') {
                            ass()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (ar[0] === 'boobs') {
                            boobs()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (ar[0] === 'belly') {
                            belly()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (ar[0] === 'sideboobs') {
                            sideboobs()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (ar[0] === 'ahegao') {
                            ahegao()
                                .then(async ({ url }) => {
                                    sendMediaURL(from, url)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            reply('Tag not found.\n\nHanya ada fetish\narmpits\nfeets\nthighs\nass\nboobs\nbelly\nsideboobs\nahegao')
                        }
                    } catch (err) {
                        console.log(err)
                        reply(`${err}`)
                    }
            break
case 'rptag':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
members_id = []
teks = `${q}\n- @${senderr.split('@')[0]}`
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'restart':
if (!mek.key.fromMe) return
reply(mess.wait)
exec(`node nino`)
reply('_Restarting Bot Success_')
break
case 'kodebahasa':
 LANGUAGES = `
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Chexanese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
reply(LANGUAGES)
break
case 'scplay':
case 'soundcloud':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
            data = await fetchJson(`https://naufalhoster.xyz/dl/scdlplay?apikey=iniapikeygan2211&query=${q}`, {method: 'get'})
            teks = `*「 SOUNDCLOUD - PLAY 」*\n\n*• Title:* ${data.result.title}\n*• Genre:* ${data.result.genre}\n*• Published:* ${data.result.published_at}\n*• Filesize:* ${data.result.filesize}\n\n_Sending Audio..._`
            thumb = await getBuffer(data.result.thumbnail)
            hexa.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
            musik = await getBuffer(data.result.music)
            hexa.sendMessage(from, musik, audio, {mimetype: 'audio/mp4', quoted: mek})
            break
case 'delchat':
                reply('*Succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                hexa.modifyChat(from, ChatModification.delete)
                break
case 'get':
if (!q) return reply(mess.wrongFormat)
axios.get(`${args[0]}`).then(data => reply(JSON.stringify(data.data, null, 3)))
break
case 'fetch':
if (!q) return reply(mess.wrongFormat)
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})
break
case 'trumptweet':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${q}`)
sendMediaURL(from, anu.message, mess.success)
break
case 'kannagen':
case 'kanna':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
//anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendMediaURL(from, `https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}&raw=1`)
break
case 'cmd':
case 'carbon':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
sendMediaURL(from, `https://api-rull.herokuapp.com/api/cmd?code=${encodeURIComponent(q)}`, mess.success)
break
case 'translate':
                        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
                            tolang = args[0]
                            entah = body.slice(10+args[0].length+1)
                            translate(entah, tolang)
                            .then((res) => { reply(`${res}`) })
                        } else {
                            tolang = args[0]
                            entah = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                            translate(entah, tolang)
                            .then((res) => { reply(`${res}`) })
                        }
                        break
case 'setpict':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        const media = await hexa.downloadMediaMessage(encmedia, 'buffer')
                        hexa.updateProfilePicture(botNumber, media).then(() => {
                            reply('Sukses update profile picture')
                        }).catch((err) => {
                            reply(`Error: ${err}`)
                        })
                    } else {
                        reply('bukan gambar')
                    }
                    break
case 'google':
if (!q) return reply(mess.wrongFormat)
ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
reply(mess.wait)
if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
googleIt({ 'query': q }).then(results => {
vars = `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
hexa.sendMessage(from, ss, image, {caption: vars, quoted : mek})
}).catch(e => {
console.log(e)
reply(`${e}`)
})
break
case 'mediafire':
if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
/*case 'grouplist':
case 'gruplist':
case 'listgroup':
case 'listgrup':
grupnem = groupMetadata.subject
 txt = hexa.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
reply('List Groups:\n\n' + txt)
break*/
case 'ownergc':
owner = `${groupMetadata.owner.split('@')[0]}`
teks = `Owner group ini adalah: wa.me/${owner}`
hexa.sendMessage(from, teks, text, {quoted:freply, contextInfo:{mentionedJid:owner}})
break
case 'quotemaker':
                 gh = args.join(' ')
					 quote = gh.split("|")[0];
					 wm = gh.split("|")[1];
					typ = gh.split("|")[2];
					if (!q) return reply(`Usage: \n${prefix}quotemaker teks|watermark|tema\n\nEx :\n${prefix}quotemaker ini contoh|bicit|random`)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${typ}`)
					buffer = await getBuffer(anu.result)
					hexa.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'leave':
			          if (!isGroup) return reply(mess.only.group)
                      setTimeout( () => {
                      hexa.groupLeave(from) 
                      }, 2000)
                      setTimeout( () => {
                      faketoko('Byee...')
                      }, 0)
                      break
case 'kalkulator':
				     if (args.length < 1) return reply(`Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    const Math_js = require('mathjs')
				    //q = body.slice(12) 
				    if (typeof Math_js.evaluate(q) !== "number") {
					reply(`"${mtk}", bukan angka!\nKirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Hasil* : ${q} = ${Math_js.evaluate(q)}`)
				}
				    break
case 'spam':
				if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argz = arg.split("|")
				if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argz[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argz[1]; i++){
					sendMess(from, argz[0])
				}
				break
/*case 'spamchat':
gh = args.join('')
					 quote = gh.split("|")[0];
					 wm = gh.split("|")[1];
                if (args.length < 2) return reply(`Mau spamchat ke siapa? Contoh: ${prefix}spamchat 6288224859350 woi asu`)
          				if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
                        mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
          				 kontul = body.slice(10)
                      if (kontul.length > 300) return reply('Maaf Teks Terlalu Panjang, Maksimal 300 Teks')
                        busah = `*「 SPAM CHAT 」*\nNomor : @${senderr.split("@s.whatsapp.net")[0]}\nPesan : ${kontul}`
                       options = {
                         text: busah,
                         contextInfo: {mentionedJid: [senderr]},
                     }
                    sendMess(`${mansed}`, options)
                    sendMess(`${mansed}`, options)
                       sendMess(`${mansed}`, options)
                       sendMess(`${mansed}`, options)
                       sendMess(`${mansed}`, options)
                    sendMess(`${mansed}`, options)
                    sendMess(`${mansed}`, options)
                    sendMess(`${mansed}`, options)
                    sendMess(`${mansed}`, options)
                    sendMess(`${mansed}`, options)
                    reply('SPAMCHAT ANDA TELAH SAMPAI KE NOMOR YG DITUJU')
                    break*/
case 'searchmsg':  //by ANU TEAM
if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
teks = arg
if (teks.includes("|")) { 
try {
var ve = teks.split("|")[0]
var za = teks.split("|")[1]
sampai = `${za}`
if (isNaN(sampai)) return reply('Harus berupa Angka!')
batas = parseInt(sampai) + 1
if (batas > 30) return reply('Maks 30!')
reply(mess.wait)
cok = await hexa.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
for (i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
hexa.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
} catch (e) {
return reply(String(e))
}
} else {
reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
break
case 'audiototext':
if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
					reply(mess.wait)
					const dlfile = await hexa.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
                 form = new FormData();
                form.append('audio', dlfile, 'music.mp3');
                 res = await fetch('http://hujanapi.xyz/api/stt?apikey=onedayonejuz', { method: 'POST', body: form })
                 ret =  await res.json()
                reply(ret.result)
                } else {
				reply('Wrong format!')
				}
                break
case 'searchmusic':
case 'whatmusic':
				if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
					reply(mess.wait)
				const dlfile = await hexa.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				 bodyForm = new FormData()
			        bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', 'apivinz')
           			axios('https://api.zeks.xyz/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				if (data.status){
				reply(`*「 SEARCH MUSIC 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
				} else reply(data.message)
				}).catch(() => reply('Internal server error!, try again later'))
				} else {
				reply('Wrong format!')
				}
				break
case 'blur':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 0) {
						reply(mess.wait)
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						owgi = await hexa.downloadAndSaveMediaMessage(ger)
						data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=${args[0]}&apikey=demo`)
						hexa.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur level blurnya`)
					}
					break
case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
hexa.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'otakuongoing':              
                o = await onGoing()
                console.log(o)
                ot = '*「 Ongoing Otakudesu 」*'
                for (let i = 0; i < o.length; i++) {
                  ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
                }
                buff = await getBuffer(o[0].thumb)
                hexa.sendMessage(from, buff, image, {quoted: mek, caption: ot})
                break
case 'kiryuu':
if (!q) return reply('Yg mau dicari apaan?')
reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/kiryuu-search?q=${q}&apikey=OneDayOneCharity`)
					result = anu.result
					teks = `*「 KIRYUU SEARCH 」*\n\n*Hasil Pencarian : ${q}*`
					for (let v = 0; v < result.length; v++) {
						teks += `\n\n• Title: ${result[v].judul}\n• Chapter: ${result[v].chapter}\n• Rate: ${result[v].rate}\n• Url: ${result[v].url}`
					}
					buff = await getBuffer(result[0].img)
					hexa.sendMessage(from, buff, image, {quoted: mek, caption: teks})
					break
					case 'hentai':
				try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=Tobzzz17`, {method: 'get'})
						buffer = await getBuffer(res.result)
						hexa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan di buat bahan comli'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					    break
case 'sfilesearch':
if (!q) return reply('Yg mau dicari apaan?')
reply(mess.wait)
                respo = await axios.get(`https://fzn-gaz.herokuapp.com/api/sfile?search=${args.join('')}`)
            	result = respo.data.result
		let pilem = `*「 SFILE SEARCH 」*\n\n*Hasil Pencarian : ${args.join(' ')}*`
		for (let i = 0; i < result.length; i++) {
			pilem += `\n\nTitle : *${result[i].title}*\nLink : *${result[i].link}*`
		}
		reply(pilem, result[0])
                break	
	    case 'sfiledl':
	            if (!q) return reply('Linknya?')
	            reply(mess.wait)
                respo = await axios.get(`https://fzn-gaz.herokuapp.com/api/sfiledl?url=${args[0]}`);
		        gaslah = respo.data
		        filer = await getBuffer(gaslah.result)
                hexa.sendMessage(from, filer, MessageType.document, {mimetype: 'application/octet-stream', filename: `${gaslah.title}`, quoted: mek});
                break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Nino`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    hexa.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'online':
 case 'listonline':
case 'here':                
                if (!isGroup) return reply(`Only group`)
                try {
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(hexa.chats.get(ido).presences), hexa.user.jid]
                hexa.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
                } catch (e) {
                	reply(`${e}`)
                }
                break
case 'random':
					if (args.length < 1) return reply(`Penggunaan Fitur Random:\n• ${prefix}random nekonime\n• ${prefix}random anime\n• ${prefix}random waifu\n• ${prefix}random loli\n• ${prefix}random meme\n• ${prefix}random citacita\n• ${prefix}random amv\n• ${prefix}random ppcouple`)
					if (args[0].toLowerCase() === 'nekonime') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nekonime?apikey=${apiKey}`)
						reply(mess.wait)
						sendMediaURL(from, anu.result)
					} else if (args[0].toLowerCase() === 'anime') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/random-nimek?apikey=${apiKey}`)
						reply(mess.wait)
						sendMediaURL(from, anu.result)
					} else if (args[0].toLowerCase() === 'waifu') {
						reply(mess.wait)
						sendMediaURL(from, `https://lindow-api.herokuapp.com/api/waifu?apikey=YannzAe`)
					} else if (args[0].toLowerCase() === 'loli') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/loli?apikey=OneDayOneCharity`)
						reply(mess.wait)
						sendMediaURL(from, anu.result)
					} else if (args[0].toLowerCase() === 'meme') {
						anu = await fetchJson(`https://lindow-api.herokuapp.com/api/random/meme?apikey=YannzAe`)
						reply(mess.wait)
						sendMediaURL(from, anu.result.url)
					} else if (args[0].toLowerCase() === 'citacita') {
						reply(mess.wait)
						anu = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`)
						hexa.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
					} else if (args[0].toLowerCase() === 'amv') {
						reply(mess.wait)
						sendMediaURL(from, `https://lindow-api.herokuapp.com/api/randomaesthetic?apikey=YannzAe`)
					} else if (args[0].toLowerCase() === 'ppcouple') {
						reply(mess.wait)
						anu = await fetchJson(`https://lindow-api.herokuapp.com/api/ppcouple?apikey=YannzAe`)
						anu = anu.result
						male = await getBuffer(anu.male)
						female = await getBuffer(anu.female)
						hexa.sendMessage(from, male, image, {quoted: mek, caption: 'Male'})
						hexa.sendMessage(from, female, image, {quoted: mek, caption: 'Female'})
						}
					break
case 'smeme':                     
                     top = arg.split('|')[0]
                     bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
					reply(mess.wait)
					ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
					sendWebp(from, anu1)
					} else {
					reply('Gunakan foto/stiker!')
					}
					break
case 'memeimg':
case 'memegen':                    
                     top = arg.split('|')[0]
                     bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
					reply(mess.wait)
					ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
					sendMediaURL(from, `${anu1}`, mess.success)
					} else {
					reply('Gunakan foto/stiker!')
					}
					break
case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					/*ranp = getRandom('.gif')
					rano = getRandom('.webp')*/
					anu1 = await fetchJson(`https://naufalhoster.xyz/textmaker/trigerred?apikey=iniapikeygan2211&url=${teks}`)
					sendStickerFromUrl(from, anu1.result.image)
					} else {
					reply('Gunakan foto!')
					}
					break
case 'greyscale':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					/*ranp = getRandom('.gif')
					rano = getRandom('.webp')*/
					sendMediaURL(from, `https://api-self.herokuapp.com/api/greyscale?url=${teks}`)
					} else {
					reply('Gunakan foto!')
					}
					break
case 'gtav':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					/*ranp = getRandom('.gif')
					rano = getRandom('.webp')*/
					sendMediaURL(from, `https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${teks}`)
					} else {
					reply('Gunakan foto!')
					}
					break
case 'sketch':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					sendMediaURL(from, `https://fazone-api.herokuapp.com/api/pencilsketch?apikey=bebas1minggu&img=${teks}`)
					} else {
					reply('Gunakan foto!')
					}
					break
case 'rainbow':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					sendMediaURL(from, `https://api-self.herokuapp.com/api/gay?url=${teks}`)
					} else {
					reply('Gunakan foto!')
					}
					break
case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					sendMediaURL(from, `https://api-self.herokuapp.com/api/sepia?url=${teks}`)
					} else {
					reply('Gunakan foto!')
					}
					break
case 'invert':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					sendMediaURL(from, `https://api-self.herokuapp.com/api/invert?url=${teks}`)
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply (mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					sendMediaURL(from, `https://fazone-api.herokuapp.com/api/wasted?apikey=bebas1minggu&img=${teks}`)
					} else {
					reply('Gunakan foto!')
					}
					break
					
/*case 'togif':
					if ((isQuotedSticker && mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated)) {
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    reply(mess.wait)
                    media = await hexa.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.gif')
                    ranw = getRandom('.mp4')
                    spawn('./webp2gif', [
                        media,
                        ran
                    ]).on('error', (err) => {
                        reply(`Error: ${err}`).then(() => {
                            console.log(err)
                        })
                        fs.unlinkSync(media)
                    }).on('close', () => {
                        fs.unlinkSync(media)
                        exec(`ffmpeg -i ${ran} -pix_fmt yuv420p ${ranw}`, (err) => {
                            if (err) return reply('error')
                            hexa.sendMessage(from, fs.readFileSync(ranw), video, {quoted:mek, mimetype: 'video/gif'})
                            fs.unlinkSync(ran)
                            fs.unlinkSync(ranw)
                        })
                    })
                } else {
                    reply('reply stiker gifnya bang')
                }
                break*/
case 'togif':
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await hexa.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
hexa.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
break
case 'tovideo':
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await hexa.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
hexa.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
break
/*case 'tovideo':
					if ((isQuotedSticker && mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated)) {
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    reply(mess.wait)
                    media = await hexa.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.gif')
                    ranw = getRandom('.mp4')
                    spawn('./webp2gif', [
                        media,
                        ran
                    ]).on('error', (err) => {
                        reply(`Error: ${err}`).then(() => {
                            console.log(err)
                        })
                        fs.unlinkSync(media)
                    }).on('close', () => {
                        fs.unlinkSync(media)
                        exec(`ffmpeg -i ${ran} -pix_fmt yuv420p ${ranw}`, (err) => {
                            if (err) return reply('error')
                            hexa.sendMessage(from, fs.readFileSync(ranw), video, {quoted:mek})
                            fs.unlinkSync(ran)
                            fs.unlinkSync(ranw)
                        })
                    })
                } else {
                    reply('reply stiker gifnya bang')
                }
                break*/
case 'cm':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} "origin(rgb24).png" -c:v libx264 -preset placebo -qp 0 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv444p10le -sws_flags spline+accurate_rnd+full_chroma_int -vf "colormatrix=bt470bg:bt709" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 "colormatrix_yuv444p10le.avi" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hexa.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
					})
					break
case 'nightcore':
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*${args[0]} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hexa.sendMessage(from, hah, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})
fs.unlinkSync(ran)
})
break 
case 'imut':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'hode':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
case 'vibra':     
var req = args.join(' ')            
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'vibrav':     
var req = args.join(' ')            
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await hexa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hexa.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
					break
case 'triggervid':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=3:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hexa.sendMessage(from, hah, audio, {mimetype: 'video/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break
/*case 'slow':
if (!isQuotedAudio) return reply('Reply audio nya oom')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hexa.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: false, quoted: mek})
fs.unlinkSync(ran)
})
break*/
case 'tupai':
if (!isQuotedAudio) return reply('Reply audio nya oom')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hexa.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: false, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'blub':
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hexa.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: false, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hexa.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: false, quoted: mek})
fs.unlinkSync(ran)
 })
  break
				case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
	             reply(mess.wait)
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await hexa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						 hexa.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: false, quoted: mek})
						fs.unlinkSync(ran)
					    })
				       break
case 'bass':
if (!q) return reply('Masukkan jumlah bass')
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af equalizer=f=40:width_type=o:width=50:g=${args[0]} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'toptt':
case 'tovn':
	if (!isQuotedAudio || isQuotedVideo) return reply('Reply audio/video nya om')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						hexa.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true, sendEphemeral:true})
						})
						break
    case 'kontag':
				argz = arg.split('|')
				if (!argz) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					hideTagKontak(from, argz[0], argz[1])
				}
				break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'surat':
if (!q) returnreply(`Ketik ${prefix}surat No tujuan|Isi surat`)
textp = q
 tujuan = textp.split("|")[0]
 katakita2 = textp.split("|")[1]
nomor = senderr
teks1 = `  *「 SURAT 」*\n\n*• Isi:*\n${katakita2}\n\n*• Pengirim*\n@${nomor.split("@")[0]}`
options = {
text: teks1,
contextInfo: {mentionedJid: [nomor]},
}
hexa.sendMessage(`${tujuan}@s.whatsapp.net`, options, text, {quoted: freply2})
reply('Sukses')
break
    case 'fitnah':
            if (!q) return reply(`Usage :\n${prefix + command} [@tag|pesan|balasanbot]\n\nEx : \n${prefix + command} @tagmember|hai|hai juga`)
             gh = args.join(' ')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
             replace = gh.split("|")[0];
             target = gh.split("|")[1];
             bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
case 'fitnah2':
                if (!q) return reply(`Usage :\n${prefix + command} [nomor|pesan|balasanbot]\n\nEx : \n${prefix + command} 0|hai|hai juga mark`)
                 gh = args.join(' ')
                 parti = gh.split("|")[0];
                 target = gh.split("|")[1];
				 bot = gh.split("|")[2];
				hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
case 'forward':
if (!q) return reply(`Usage :\n${prefix + command} [teks|jumlah forward]\n\nEx : \n${prefix + command} Hai|508`)
gh = args.join(' ')
parti = gh.split("|")[0];
target = gh.split("|")[1];
hexa.sendMessage(from, `${parti}`, text, {contextInfo: { forwardingScore: `${target}`, isForwarded: true }})
           break
    /*case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            reply(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break*/
    case 'tomp3':
    if (isQuotedVideo || isQuotedAudio){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
    case 'fast':
    if (isQuotedVideo || isQuotedAudio){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
    case 'slow':
            if (isQuotedVideo || isQuotedAudio){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
    case 'reverse':
            if (isQuotedVideo || isQuotedAudio){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'dadu': // by CHIKAA CHANTEKKXXZZ
reply(mess.wait)
                dadu()
                    .then(async (body) => {
                        dadugerak = body.split('\n')
                        dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
                        sendStickerFromUrl(from, dadugerakx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        reply('Error!')
                    })
            break
         
case 'puisi':
                reply(mess.wait)
                console.log('Sending random puisi...')
                resss = await axios.get(`https://masgi.herokuapp.com/api/puisi2`)
                reply(resss.data.data)
                    .then(() => console.log('Success sending puisi...'))
                    .catch(async (err) => {
                        console.error(err)
                        reply('Error!')
                    })
            break
            case 'cerpen':
                reply(mess.wait)
                console.log('Sending random cerpen...')
                cerpwn = await axios.get(`https://masgi.herokuapp.com/api/cerpen`)
                reply(cerpwn.data.data)
                    .then(() => console.log('Success sending cerpen..'))
                    .catch(async (err) => {
                        console.error(err)
                        reply('Error!')
                    })
            break
/*case 'dadu':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Dadu')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendStickerFromUrl(from, pjr)
            }
            )
            break*/
case 'animestick':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendStickerFromUrl(from, pjr)
            }
            )
            break
case 'doge':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendWebp(from, pjr)
            }
            )
            break
case 'patrick':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendWebp(from, pjr)
            }
            )
            break
case 'gura':
case 'gawrgura':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            sendWebp(from, pjr)
            }
            )
            break
case 'loliv':
            case 'lolivid':
            case 'lolivideo':
            reply(mess.wait)
                anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
                .then(async (body) => {
                anu = body.split('\n')
                anu = anu[Math.floor(Math.random() * anu.length)]
                //anu = await getBuffer(anu)
                sendMediaURL(from, anu)
                })
                .catch(async (err) => {
                    console.error(err)
                    reply(`${err}`)
                })
            break
case 'kontak':
				argz = arg.split('|')
				if (!argz) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					sendKontak(from, argz[0], argz[1])
				}
				break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `${pushname}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
case 'delwm':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : ``
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            //pe = args.join('')
            var a = arg.split("|")[0];
            var b = arg.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
    if (!mek.key.fromMe) return
try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
				    hexa.sendMessage('status@broadcast', `${quotedText}`, extendedText)
				reply(`Sukses Up story wea teks ${quotedText}`)
				} catch {
					if (!q) return reply('Isi teksnya!')
hexa.sendMessage('status@broadcast', `${q}`, extendedText)
reply(`Sukses Up story wea teks ${q}`)
}
				    break
    case 'upswimage':
    if (!mek.key.fromMe) return
            if (isQuotedImage) {
            swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
    if (!mek.key.fromMe) return
            if (isQuotedVideo) {
            swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case 'hidetag':
				try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
				} catch {
hideTag(from, `${q}`)
				  }
				    break
case '$':
if (!isOwner) return 
const cod = args.join(' ')
exec(cod, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
break
 	/*case 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break*/
			case 'bc':
					if (!isOwner) return  reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, bc, image, {quoted:freply2,caption: `*「 NINO BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 NINO BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					
						case 'bcsticker':
					if (!isOwner) return  reply(mess.only.owner)
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, bc, sticker, {quoted:freply2})
						}
						reply('Suksess broadcast')
					}
					break
					
					case 'bcvideo':
					if (!isOwner) return  reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !hexa.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, bc, video, {quoted:freply2,caption: `*「 NINO BROADCAST 」*\n\n${body.slice(9)}`})
						}
						reply('Suksess broadcast')
					}
					break
					
					case 'bcgif':
					if (!isOwner) return  reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : freply2,caption: `*「 NINO BROADCAST 」*\n\n${body.slice(7)}`})
						}
						reply('Suksess broadcast')
					}
					break
	case 'play2':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			reply(mess.wait)
    		aramas = await yts(q);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 PLAY MUSIC 」*\n\n*Title* : ${title}\n*Ext* : mp3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*「 PLAY MUSIC 」*\n\n*Title* : ${title}\n*Ext* : mp3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        //dl_link = await getBuffer(dl_link)
                        await sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', quoted: mek, sendEphemeral:true}).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
case 'playvid':  
        case 'playvideo':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            srch = q
            aramas = await yts(srch);
            aramat = aramas.all 
            mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 PLAY VIDEO 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*「 PLAY VIDEO 」*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break 
            case 'sticker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'stikergif':
            case 'sgif':
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                mediat = await hexa.downloadAndSaveMediaMessage(encmediat)
                ron = getRandom('.webp')
                exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
                    fs.unlinkSync(mediat)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ${addMetadata('Ninochan')} ${ron} -o ${ron}`, async (error) => {
                    if (error) return reply(`${error}`)
                    hexa.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
                    fs.unlinkSync(ron)
                    })
                })
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    mediat = await hexa.downloadAndSaveMediaMessage(encmedia)
				    ron = getRandom('.webp')
                    exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
                    fs.unlinkSync(mediat)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ${addMetadata('Ninochan')} ${ron} -o ${ron}`, async (error) => {
                    if (error) return reply(`${error}`)
                    hexa.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
                    fs.unlinkSync(ron)
                    })
                })
			} else {
				  reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
                  break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer, mess.success)
	//hexa.sendMessage(from, image, buffer, {quoted:mek})
			fs.unlinkSync(ran)
			})
			break
case 'clearall':
if (!isOwner) return  reply(mess.only.owner)
anu = await hexa.chats.all()
hexa.setMaxListeners(25)
for (let _ of anu) {
hexa.deleteChat(_.jid)
}
reply('Sukses delete all chat :)')
break
case 'yts':
case 'ytsearch':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
try {
res = await yts(q)
a = `「 *YOUTUBE SEARCH* 」\n\n\n`
for (let i of res.all) {
a += `• *Judul :* ${i.title}
• *Views :* ${i.views}
• *Upload :* ${i.ago}
• *Durasi :* ${i.timestamp}
• *Channel :* ${i.author.name}
• *Link :* ${i.url}


`
}
b = a.trim()
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: b})
} catch (e) {
console.log(e)
reply(`${e}`)
}
break
	case 'setfakeimg':
	if (!isOwner) return  reply(mess.only.owner)
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	/*case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break*/	
	         
	case 'semoji':
	case 'emoji':
			if (!q) return reply('emojinya?')
			reply(mess.wait)
			qes = args[0]
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendWebp(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'image':
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
}
}
break
case 'ytmp3':
	        if (!isPremium) return reply(mess.only.premium)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : mp3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk ukuran lebih dari 30 mb disajikan dalam bentuk link_`)
				 captions = `*「 YOUTUBE MP3 」*\n\n*Title* : ${title}\n*Ext* : mp3\n*Size* : ${filesizeF}\n\n_Sending Audio..._`
				sendMediaURL(from, thumb, captions)
				//dl_link = await getBuffer(dl_link)
				sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', quoted: mek, sendEphemeral:true}).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
       case 'ytmp4':
	               if (!isPremium) return reply(mess.only.premium)
			       if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			       let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			       if (!isLinks2) return reply(mess.error.Iv)
				   try {
				   reply(mess.wait)
				   ytv(args[0])
				  .then((res) => {
				  const { dl_link, thumb, title, filesizeF, filesize } = res
				  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				 .then((a) => {
				  if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : mp4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari 40 mb disajikan dalam bentuk link_`)
				  captionsYtmp4 = `*「 YOUTUBE MP4 」*\n\n*Title* : ${title}\n*Ext* : mp4\n*Size* : ${filesizeF}\n\n_Sending Video..._`
				  sendMediaURL(from, thumb, captionsYtmp4)
				  sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
case 'bugreport':
if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
teks = args.join(' ')
reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
hexa.sendMessage('6288286421519@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
break
			    case 'closegrup':
			    case 'tutupgrup':
					hexa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					hexa.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'opengrup':
                case 'bukagrup':
					hexa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
					contextInfo: { mentionedJid: [sender] }
					}
					hexa.groupSettingChange (from, GroupSettingChange.messageSend, false)
					hexa.sendMessage(from, open, text, {quoted: mek})
					break
    /*case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:mek, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
            });
            break*/
            case 'odckey':
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/web/cekapikey?apikey=${args.join(' ')}`)
                    teks = `*YOUR APIKEY*\n\n• *Request* : ${anu.limit}\n• *Creator* : ${anu.creator}\n• *Message* : ${anu.message}\n• *API* : https://onlydevcity.herokuapp.com`
                    hexa.sendMessage(from, teks, text, {quoted: mek})
                    break
          case 'leyskey':
					data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekapikey?apikey=${args.join(' ')}`)
					teks = `*YOUR APIKEY*\n\n*• Status:* ${data.result.response}\n*• Apikey:* ${data.result.apikey}\n*• Hit:* ${data.result.hit}\n*•API :* https://leyscoders-api.herokuapp.com`
					hexa.sendMessage(from, teks, text, {quoted: mek})
			        break
	      case 'lolkey':
				    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${args.join(' ')}`)
				    teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
				    hexa.sendMessage(from, teks, text, {quoted: mek})
                    break
          case 'vhtearkey':
                    anu = await fetchJson(`https://api.vhtear.com/resultkey?apikey=${args.join(' ')}`)
                    teks = `*YOUR APIKEY*\n\n*Apikey :* ${anu.result.Apikey}\n*From :* ${anu.result.From}\n*Expired :* ${anu.result.Expired}\n*Status :* ${anu.result.Status}\n*API :* https://api.vhtear.com`
                    hexa.sendMessage(from, teks, text, {quoted: mek})
                    break
           case 'xteamkey':
                    if (args.length < 1) return reply('Apikeynya?')
                    anu = await fetchJson(`https://api.xteam.xyz/cekey?APIKEY=${args[0]}`)
                    anu = anu.response
                    teks = `*YOUR APIKEY*\n\n*Nama:* ${anu.name}\n*Email:* ${anu.email}\n*Apikey:* ${anu.apikey}\n*Total Hit:* ${anu.totalhit}\n*Premium:* ${anu.premium}\n*Expired:* ${anu.expired}`
                    hexa.sendMessage(from, teks, text, {quoted: mek})
                    break
          case 'pencarikey':
                    anu = await fetchJson(`https://pencarikode.xyz/check?apikey=${args.join(' ')}`)
                    teks = `*YOUR APIKEY*\n\n*Apikey :* ${anu.apikey}\n*From :* ${anu.from}\n*Expired :* ${anu.expired}\n*Countdown :* ${anu.countdown}\n*API :* https://pencarikode.xyz`
                    hexa.sendMessage(from, teks, text, {quoted: mek})
                    break
         case 'tiktok2':
                    if (!q) return
                    reply(mess.wait)
                    try {
				    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok3?apikey=${lolkey}&url=${args[0]}`)
				    sendMediaURL(from, anu.result)
				    } catch (e) {
					console.log(e)
					reply(`${e}`)
					}
				    break
        case 'tiktok':
				     reply(mess.wait)
				     anu = await fetchJson(`https://lolhuman.herokuapp.com/api/tiktok?apikey=${lolkey}&url=${args[0]}`)
				     teks = `*「 TIKTOK DOWNLOADER 」*\n\n*➸ Name:* ${anu.result.author.username}\n➸ *Title:* ${anu.result.title}\n\n*Mohon Tunggu Sebentar Media Sedang Dikirim!*`
				     buffer = await getBuffer(anu.result.thumbnail)
				     hexa.sendMessage(from, buffer, image, { quoted: mek, caption: teks})
				     buffer2 = await getBuffer(anu.result.link)
				     hexa.sendMessage(from, buffer2, video, { mimetype: 'video/mp4', quoted: mek })
				     break
    case 'tiktokmusic':
    case 'tiktokaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
                    hexa.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
case 'brainly':
brainly(args.join(" ")).then(res => {
hmm = '────────────\n'
for (let Y of res.data) {
hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
reply(hmm)
console.log(res)
})
break
	case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://yotsuchan.herokuapp.com/`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${ini_link}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'ssweb2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://yotsuchan.herokuapp.com/`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${lolkey}&url=${ini_link}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
	case 'stalkgithub':
	case 'githubstalk':
           if (args.length == 0) return reply(`Example: ${prefix + command} Nino-chan02`)
           reply(mess.wait)
           username = args[0]
           ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
           ini_result = ini_result.result
           ini_buffer = await getBuffer(ini_result.avatar)
           ini_txt = `➸ *Name* : ${ini_result.name}\n`
           ini_txt += `➸ *Link* : ${ini_result.url}\n`
           ini_txt += `➸ *Public Repo* : ${ini_result.public_repos}\n`
           ini_txt += `➸ *Public Gists* : ${ini_result.public_gists}\n`
           ini_txt += `➸ *Followers* : ${ini_result.followers}\n`
           ini_txt += `➸ *Following* : ${ini_result.following}\n`
           ini_txt += `➸ *Bio* : ${ini_result.bio}`
           hexa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
           break
    case 'stalkig':
    case 'igstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} nino.chan26`)
                    reply(mess.wait)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `➸ *Username* : ${ini_result.username}\n`
                    ini_txt += `➸ *Full Name* : ${ini_result.fullname}\n`
                    ini_txt += `➸ *Posts* : ${ini_result.posts}\n`
                    ini_txt += `➸ *Followers* : ${ini_result.followers}\n`
                    ini_txt += `➸ *Following* : ${ini_result.following}\n`
                    ini_txt += `➸ *Bio* : ${ini_result.bio}`
                    hexa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
              case 'stalktiktok':
              case 'tiktokstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
                    reply(mess.wait)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `➸ *Username* : ${get_result.username}\n`
                    ini_txt += `➸ *Nickname* : ${get_result.nickname}\n`
                    ini_txt += `➸ *Followers* : ${get_result.followers}\n`
                    ini_txt += `➸ *Followings* : ${get_result.followings}\n`
                    ini_txt += `➸ *Likes* : ${get_result.likes}\n`
                    ini_txt += `➸ *Video* : ${get_result.video}\n`
                    ini_txt += `➸ *Bio* : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    hexa.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt })
                    break
case 'facebook':
case 'fb':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Iv)
teks = args.join(' ')
reply(mess.wait)
res = await fbDown(teks).catch(e => {
  reply('_[ ! ] Error Terjadi Kesalahan Dalam Memasuki Web Atau Link Error_')
})
a = res[0]
result = `${unikodhead}${unikodwing[0]} *Nino* ${unikodwing[1]}
${unikodbody} Judul :* ${a.judul}
${unikodbody} Source :* ${a.source}
${unikodbody} Ukuran :* ${a.size}
${unikodbody} Kualitas :* ${a.quality}
${unikodbody} Type :* ${a.type}
${unikodend}  *Nama File :* ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: mek})
sendFileFromUrl(a.link, video, { mimetype: 'video/mp4',quoted: mek, filename: `${a.judul}.${a.type}`})
break
	case 'term':
			if (!q) return
			exec(q, (err, stdout) => {
			if (err) return reply(`${err}`)
			if (stdout) {
			reply(stdout)
			}
			})
		    break 
    /*case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            reply('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
            break*/
    case 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return reply('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
            case 'runtime':
                textImg(`${runtime(process.uptime())}`)
                break
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			textImg(`Pong!!!\n${teks}Speed: ${latensi.toFixed(4)} Second`)
			})
			break
case 'botstat':
				 groups = hexa.chats.array.filter(v => v.jid.endsWith('g.us'))
				 privat = hexa.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				 ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
					uptime = process.uptime();
					 timestampe = speed();
					 totalChat = await hexa.chats.all()
					 latensie = speed() - timestampe
					 total = math(`${groups.length}*${privat.length}`)
					teks = `*BOT STATISTICS:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensie.toFixed(4)} _Second_\n*- Active Time :* ${kyun(uptime)}\n\n*PHONE STATISTICS:*\n*- Baterai :* ${baterai}% _${charger}_\n*- Ram Usage :* ${ram2}\n*- Platform :* ${os.platform()}\n*- Hostname :* ${os.hostname()}\n*- Uptime :* ${runtime(os.uptime())}\n*- Wa Version:* ${hexa.user.phone.wa_version}\n*- Os Version:* ${hexa.user.phone.os_version}\n*- Device Manufacturer:* ${hexa.user.phone.device_manufacturer}\n*- Device Model:* ${hexa.user.phone.device_model}\n*- Os Build Number:* ${hexa.user.phone.os_build_number}`
					reply(teks)
break   
case 'shutdown':
if (!mek.key.fromMe) return
				reply(`Bye...`)
				await sleep(3000)
				process.exit()
				break
case 'kick':
if (!isGroup) return reply(mess.only.group)
		    kick(from, mentionUser)
		break
		case 'add':
                        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
                            entah = arg.split("|")[0]
                            entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
                            entah = `${entah}@s.whatsapp.net`
                            hexa.groupAdd(from, [entah])
                        } else {
                            entah = mek.message.extendedTextMessage.contextInfo.participant
                            hexa.groupAdd(from, [entah])
                        }
                        break
case 'promote':
                        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            if (entah.length > 0) {
                                var mems_ids = []
                                for (let ids of entah) {
                                    mems_ids.push(ids)
                                }
                                hexa.groupMakeAdmin(from, mems_ids)
                            } else {
                                hexa.groupMakeAdmin(from, entah)
                            }
                        } else {
                            entah = mek.message.extendedTextMessage.contextInfo.participant
                            hexa.groupMakeAdmin(from, [entah])
                        }
                        break
case 'demote':
                        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            if (entah.length > 0) {
                                var mems_ids = []
                                for (let ids of entah) {
                                    mems_ids.push(ids)
                                }
                                hexa.groupDemoteAdmin(from, mems_ids)
                            } else {
                                hexa.groupDemoteAdmin(from, [entah[0]])
                            }
                        } else {
                            entah = mek.message.extendedTextMessage.contextInfo.participant
                            hexa.groupDemoteAdmin(from, [entah])
                        }
                        break
                case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            	reply(mess.wait)
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'suit': //nyolong dari zenz
                if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
                const userspilih = q
                if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
                var computer = Math.random();
                if (computer < 0.34 ) {
                    computer = 'batu';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                } else {
                    computer = 'kertas';
                }
                if ( userspilih == computer ) {
                    reply(`Pertandingan Seri!`)
                } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
                    } else {
                        reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
                    }
                } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
                    } else {
                        reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
                    }
                } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
                    } else {
                        reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
                    }
                    }
            break
            case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
        case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'enable') {
						if (isWelkom) return reply('Udah aktif')
						welkom.push(from)
						fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if ((args[0]) === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
case 'cekmati':
            if (!q) return reply(mess.wrongFormat)
		    predea = await axios.get(`https://api.agify.io/?name=${q}`)
			reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
			break
            case 'creepyfact': // By Kris
                    reply(mess.wait)
                    fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        reply(creepyz)
                })
                    .catch(async (err) => {
                    console.error(err)
                    reply(`${err}`)
                })
            break
case 'santet':
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag member yang mau disantet\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
             if (args.length === 1) return reply(`Masukkan alasan kenapa menyantet dia!!\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
             santet = ['Muntah Paku','Meninggoy','Meninggal','Berak Paku','Muntah Rambut','Muntah Jembut','Ketempelan MONYET!!!','Ketempelan Tuyul','Berak di Celana Terus','Menjadi Gila','Menjadi Bodoh','Berak Beling','Berak Batu']
              terima1 = santet[Math.floor(Math.random() * (santet.length))]
              entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
               target = entah.split('|')[0]
               alasan = entah.split('|')[1]
               hexa.sendMessage(from, `Santet terkirim ke @${target.split('@')[0]}\n\nAlasan: ${alasan}\n\nJenis Santet Yang di Terima:\n*${terima1}*`, text, {quoted: mek, contextInfo:{ mentionedJid: [target]}})
			break
			case 'kutuk':
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag member yang mau disantet\n\nContoh : ${prefix}kutuk @tag | kalo berak kaga di siram`)
             if (args.length === 1) return reply(`Masukkan alasan kenapa menyantet dia!!\n\nContoh : ${prefix}kutuk @tag | kalo berak kaga di siram`)
             mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              kutuk = ['Sapi','Batu','Babi','Pohon pisang','janda','bangsat','buaya','Jangkrik','Kambbing','Bajing','kang seblak','kang gorengan','kang siomay','badut ancol','Tai Badak','Kebo','Badak','tai kotok','Bwebwek','Orang Suksesss...... tapi boong','Beban Keluarga']
              terima2 = kutuk[Math.floor(Math.random() * (kutuk.length))]
              mentioned = arg.split('|')[0]
              alasan2 = arg.split('|')[1]
              mentions(`Kutukan terkirim ke @${mentioned[0].split('@')[0]}\n\nAlasan: ${alasan2}\n\nJenis Kutukan Yang di Terima:\n*${terima2}*`, mentioned, true)
			break
/*case 'malanime':
            try {
            data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${q}`
            )
            parsed = await data.json()
            if (!parsed) {
              reply(' Maaf, Anime tidak ditemukan')
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            content = `*Anime Ditemukan!*
 *Title:* ${title}
 *Episodes:* ${episodes}
 *Rating:* ${rated}
 *Score:* ${score}
 *Synopsis:* ${synopsis}
 *URL*: ${url}`
            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            tobz.sendImage(from, base64, title, content)
            sendMediaURL(from, image_url, content)
           } catch (err) {
             console.log(err)
             reply(' Maaf, Anime tidak ditemukan')
           }
          break*/
        case 'imgtourl':
case 'img2url':
reply(mess.wait) 
                    var imgbb = require('imgbb-uploader')
                    var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    var media = await  hexa.downloadAndSaveMediaMessage(encmedia)       
                    imgbb('acf1ad5f22ad5822dc163cce74aedfd4', media)
                   .then(data => {
                    var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     hexa.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
                })
                .catch(err => {
                    throw err
                })
                    break
case 'toxic':
                Toxic().then(toxic => {
                    reply (toxic)
                })
                break
case 'apulsator':
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "apulsator=mode=sine:hz=3:width=0.1:offset_r=0" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'robot':
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'earrape':
if (!q) return reply('Masukkan jumlah volume')
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af volume=${args[0]} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'readall':
totalchat.map( async ({ jid }) => {
                    await hexa.chatRead(jid)
                    })
					reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
					console.log(totalchat.length)
					break
	case 'loli':
    case 'waifu':
    case 'husbu':
    case 'sagiri':
    case 'megumin':
    case 'wallnime':
	       reply(mess.wait)
           getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`).then((gambar) => {
           hexa.sendMessage(from, gambar, image, { quoted: mek })
    })
           break
case 'exif':
				if (!isOwner) return  reply(mess.only.owner)
				if (!q) return reply(mess.wrongFormat)
				if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				reply('sukses')
				break				
case 'topanime':
reply(mess.wait)
anu = await fetchJson('https://x-restapi.herokuapp.com/api/topanime?apikey=BETA')
teks = '-----[ *Top Anime* ]----'
var hhhh = '1'
for (let i = 0; i < anu.data.length; i++) {
teks += `\n\n*Rank ${hhhh}*\nJudul : ${anu.data[i].Judul}\nSkor : ${anu.data[i].Score}\nInfo : ${anu.data[i]. Informasi}\nLink : ${anu.data[i].Link}`
hhhh++
}
reply(teks)
                break
default:
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
hexa.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./stik/thumb.jpeg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
if (!isOwner) return
if (budy.startsWith('>')){
var konsol = budy.slice(1)

Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}

	}
if (isGroup && budy != undefined) {
	} else {
		console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
	}		
	} catch (e) {
		e = String(e)
            if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'red'))
	// console.log(e)
	}
	}
})
	}
starts()
	
    
