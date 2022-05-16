require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.BOT_API_KEY, {
    polling: true
})

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Assalomu alaykum ${msg.chat.first_name} meni portfolio botimga xush kelibsiz !`, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "Men haqimda 😎"
                    }, 
                    {
                        text: "Ijtimoiy tarmoqlar 📳"
                    }
                ],
                [
                    {
                        text: "Mening loyihalarim 🛠️"
                    }
                ]
            ],
            resize_keyboard: true
        })
    })
})

bot.on('message', msg => {
    if (msg.text == "Men haqimda 😎") {
        bot.sendPhoto(msg.chat.id, './images/mern.jpg', {
            caption: `
                <strong>ismim Mashrab</strong>\n<strong>familiyam Yo'ldashov</strong>\n<i>2003-yil 29-aprelda tug'ilganman</i >\n<i>BackEnd Dasturchiman</i>\n\n<span class="tg-spoiler"><strong>Manchester City klubini ashaddiy muxlisiman 🤩🤩</strong></span>
            `,
            parse_mode: 'HTML'
        })
    }
})

bot.on('message', msg => {
    if (msg.text == "Ijtimoiy tarmoqlar 📳") {
        bot.sendPhoto(msg.chat.id, './images/social.jpg', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'linkedIn',
                            url: 'https://www.linkedin.com/in/mashrabyoldashov/'
                        },
                        {
                            text: 'instagram',
                            url: 'https://www.instagram.com/mashrabyoldashov/'
                        }
                    ],
                    [
                        {
                            text: 'telegram',
                            url: 'https://t.me/MashrabYoldashov/'
                        },
                        {
                            text: 'My Blog Channel',
                            url: 'https://t.me/mashrabblog/'
                        }
                    ]
                ]
            }
        })
    }
})

bot.on('message', msg => {
    if (msg.text == "Mening loyihalarim 🛠️") {
        bot.sendMessage(msg.chat.id, 'Loyihalar', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'My portfolio'
                        },
                        {
                            text: 'Library'
                        }
                    ],
                    [
                        {
                            text: 'Internet Magazin'
                        },
                        {
                            text: 'Movie Site'
                        }
                    ],
                    [
                        {
                            text: 'Ortga qaytish'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }
})

bot.on('message', msg => {
    if (msg.text == "My portfolio") {
        bot.sendPhoto(msg.chat.id, './images/portfolio.png', {
            caption: `
                <strong>Meni Portfolio web saytim</strong>\n\n<strong>HTML CSS va JSda yozilgan</strong>
            `,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'My Portfolio',
                            url: 'https://mashrab-portfolio.netlify.app/'
                        }
                    ]
                ]
            })
        })
    }
})

bot.on('message', msg => {
    if (msg.text == "Library") {
        bot.sendPhoto(msg.chat.id, './images/library.png', {
            caption: `
                <strong>Bu sayt kitoblar sayti</strong>\n\n<strong>HTML, CSS, BOOTSTRAP va JSda yozilgan</strong>
            `,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'Library',
                            url: 'https://mybooks-mashrab.netlify.app/'
                        }
                    ]
                ]
            })
        })
    }
})

bot.on('message', msg => {
    if (msg.text == "Internet Magazin") {
        bot.sendPhoto(msg.chat.id, './images/shop.png', {
            caption: `
                <strong>Bu internet magazin sayti</strong>\n\n<strong>SCSS va ReactJSda yozilgan fake databasedan foydalanilgan</strong>
            `,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'Internet Magazin',
                            url: 'https://onlineshopreact-mashrab.netlify.app/'
                        }
                    ]
                ]
            })
        })
    }
})

bot.on('message', msg => {
    if (msg.text == "Movie Site") {
        bot.sendPhoto(msg.chat.id, './images/movie.png', {
            caption: `
                <strong>Kinolar sayti oddiy sayt</strong>\n\n<strong>ReactJS va birozgina CSS aralashgan</strong>
            `,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: 'Movie site',
                            url: 'https://movies-react-mashrab.netlify.app/'
                        }
                    ]
                ]
            })
        })
    }
})

bot.on('message', msg => {
    if (msg.text == "Ortga qaytish") {
        bot.sendMessage(msg.chat.id, "Bosh Menyu",{
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Men haqimda 😎"
                        }, 
                        {
                            text: "Ijtimoiy tarmoqlar 📳"
                        }
                    ],
                    [
                        {
                            text: "Mening loyihalarim 🛠️"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }
})