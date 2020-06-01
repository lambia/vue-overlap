require('dotenv').config({ path: '.env' })
require('dotenv').config({ path: `.env.${process.env.ENV}` })
console.log("Environment: ", process.env.NODE_ENV);

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let url
if (process.env.NODE_ENV === 'development') {
    url = process.env.APP_URL
} else {
    url = `file://${process.cwd()}${process.env.APP_URL}`
}

app.on('ready', () => {
    let window = new BrowserWindow({ width: 800, height: 600 })
    window.removeMenu()
    window.loadURL(url)
})