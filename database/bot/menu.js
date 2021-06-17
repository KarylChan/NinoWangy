exports.gameMenu = (prefix) => {
    return `
┌──「 GAME-MENU 」
│
├ ❏ ${prefix}slot
├ ❏ ${prefix}tictactoe @tag
├ ❏ ${prefix}deletettt
├ ❏ ${prefix}tebakgambar
├ ❏ ${prefix}canceltg
├ ❏ ${prefix}sambungkata [cicak]
├ ❏ ${prefix}deletesk
├ ❏ ${prefix}akinator
├ ❏ ${prefix}deleteakinator
├ ❏ ${prefix}tebakgokil
├ ❏ ${prefix}tebakanime
├ ❏ ${prefix}suit *batu/kertas/gunting*
│
└──「 *NINO BOT* 」
`
}
exports.funMenu = (prefix) => {
    return `
┌──「 FUN-MENU 」
│
├ ❏ ${prefix}cekwatak
├ ❏ ${prefix}cekmati [nama]
├ ❏ ${prefix}citacita
├ ❏ ${prefix}toxic
├ ❏ ${prefix}truth
├ ❏ ${prefix}dare
├ ❏ ${prefix}apakah
├ ❏ ${prefix}bisakah
├ ❏ ${prefix}kapankah
├ ❏ ${prefix}rate
├ ❏ ${prefix}jadian
├ ❏ ${prefix}cantik
├ ❏ ${prefix}ganteng
├ ❏ ${prefix}beban
├ ❏ ${prefix}babi
├ ❏ ${prefix}santet
├ ❏ ${prefix}kutuk
├ ❏ ${prefix}cekwatak
├ ❏ ${prefix}cekganteng
├ ❏ ${prefix}cekcantik
│
└──「 *NINO BOT* 」
`
}
exports.effectMenu = (prefix) => {
    return `
┌──「 EFFECT-IMAGE 」
│      _usage : reply foto_
├ ❏ ${prefix}memegen *teks|teks*
├ ❏ ${prefix}greyscale
├ ❏ ${prefix}removebg
├ ❏ ${prefix}gtav
├ ❏ ${prefix}sketch
├ ❏ ${prefix}rainbow
├ ❏ ${prefix}sepia
├ ❏ ${prefix}invert
├ ❏ ${prefix}wasted
│
└──「 *NINO BOT* 」
`
}
exports.otherMenu = (prefix) => {
    return `
┌──「 OTHER-MENU 」
│
├ ❏ ${prefix}brainly *query*
├ ❏ ${prefix}ssweb *query*
├ ❏ ${prefix}google *query*
├ ❏ ${prefix}image *query*
├ ❏ ${prefix}pinterest *query*
├ ❏ ${prefix}nulis *teks*
├ ❏ ${prefix}igstalk *username*
├ ❏ ${prefix}githubstalk *username*
├ ❏ ${prefix}tiktokstalk *ussername*
├ ❏ ${prefix}img2url *reply foto*
├ ❏ ${prefix}lirik *query*
├ ❏ ${prefix}ytsearch *query*
│
└──「 *NINO BOT* 」
`
}
exports.stickerMenu = (prefix) => {
    return `
┌──「 STICKER-MENU 」
│
├ ❏ ${prefix}dadu
├ ❏ ${prefix}doge
├ ❏ ${prefix}patrick
├ ❏ ${prefix}garwgura
├ ❏ ${prefix}toimg
├ ❏ ${prefix}attp *teks/reply teks*
├ ❏ ${prefix}ttp *teks/reply stiker*
├ ❏ ${prefix}semoji *emoji*
├ ❏ ${prefix}sticker *reply foto/video*
├ ❏ ${prefix}smeme *teks|teks*
├ ❏ ${prefix}swm *pack|author*
├ ❏ ${prefix}take *pack|author* 
├ ❏ ${prefix}trigger *reply foto*
├ ❏ ${prefix}tovideo *reply sgif*
│
└──「 *NINO BOT* 」
`
}
exports.wibuMenu = (prefix) => {
    return `
┌──「 WIBU-MENU 」
│
├ ❏ ${prefix}loli
├ ❏ ${prefix}lolivideo
├ ❏ ${prefix}waifu
├ ❏ ${prefix}neko
├ ❏ ${prefix}nekonime
├ ❏ ${prefix}sagiri
├ ❏ ${prefix}wallnime
├ ❏ ${prefix}megumin
├ ❏ ${prefix}topanime
├ ❏ ${prefix}hentai
├ ❏ ${prefix}otakuongoing
├ ❏ ${prefix}nhentai *code*
│
└──「 *NINO BOT* 」
`
}
exports.ownerMenu = (prefix) => {
    return `
┌──「 OWNER-MENU 」
│
├ ❏ ${prefix}bc *teks*
├ ❏ ${prefix}clearall
├ ❏ ${prefix}eval *>*
├ ❏ ${prefix}join *link gc*
├ ❏ ${prefix}ban @tag|nomor
├ ❏ ${prefix}unban @tag|nomor
├ ❏ ${prefix}setfakeimg
├ ❏ ${prefix}premium add @tag|nomor
├ ❏ ${prefix}premium del @tag|nomor
├ ❏ ${prefix}exif *nama|author*
│
└──「 *NINO BOT* 」
`
}

exports.groupMenu = (prefix) => {
    return`
┌──「 GROUP-MENU 」
│
├ ❏ ${prefix}afk *alasan*
├ ❏ ${prefix}sider *reply chat bot*
├ ❏ ${prefix}kick *reply*
├ ❏ ${prefix}add *reply*
├ ❏ ${prefix}kickall
├ ❏ ${prefix}infogrup
├ ❏ ${prefix}promote
├ ❏ ${prefix}demote
├ ❏ ${prefix}listonline
├ ❏ ${prefix}tagall *teks*
├ ❏ ${prefix}leave
├ ❏ ${prefix}mute
├ ❏ ${prefix}unmute
├ ❏ ${prefix}setgrupname
├ ❏ ${prefix}setppgrup
├ ❏ ${prefix}setdesc
├ ❏ ${prefix}opengrup
├ ❏ ${prefix}closegrup
├ ❏ ${prefix}hidetag *teks/reply teks*
├ ❏ ${prefix}autosticker *enable | disable*
├ ❏ ${prefix}welcome *enable | disable*
├ ❏ ${prefix}antilink *enable | disable*
│
└──「 *NINO BOT* 」
`
}
exports.downloadMenu = (prefix) => {
    return `
┌──「 DOWNLOAD-MENU 」
│
├ ❏ ${prefix}ig *link*
├ ❏ ${prefix}fb *link*
├ ❏ ${prefix}twitter *link*
├ ❏ ${prefix}tiktok *link*
├ ❏ ${prefix}nhentaipdf *code*
├ ❏ ${prefix}tiktokaudio *link*
├ ❏ ${prefix}mediafire *link*
├ ❏ ${prefix}soundcloud *link*
├ ❏ ${prefix}play *title*
├ ❏ ${prefix}ytmp3 *link*
├ ❏ ${prefix}ytmp4 *link*
│
└──「 *NINO BOT* 」
`
}
exports.rulesBot = (prefix) => {
    return `
◪ *RULES THE BOT*
| ◪ Jangan Di Telpon
| ◪ Jangan Di Spam
| ◪ Jangan Hina Bot
| ◪ Hargai Bot
| ◪ Gunakan Dengan Bijak 
*_Ketahuan Langgar Di Banned Permanen_*
*_makasih sudah menggunakan Nino Bot_*
`
}
exports.infoMenu = (prefix) => {
    return `
┌──「 INGFO-MENU 」
│
├ ❏ ${prefix}cekpremium
├ ❏ ${prefix}listpremium
├ ❏ ${prefix}rules
├ ❏ ${prefix}profile
├ ❏ ${prefix}waktu
├ ❏ ${prefix}botstat
├ ❏ ${prefix}sewabot
├ ❏ ${prefix}owner
├ ❏ ${prefix}ping
├ ❏ ${prefix}runtime
├ ❏ ${prefix}donasi
├ ❏ ${prefix}sourcecode
├ ❏ ${prefix}bugreport *keluhan*
│
└──「 *NINO BOT* 」
`
} 
