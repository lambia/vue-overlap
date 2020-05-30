require('dotenv').config({ path: '.env' })
require('dotenv').config({ path: `.env.${process.env.ENV}` })
console.log("Environment: ", process.env.NODE_ENV);

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? `${process.cwd()}${process.env.VUE_URL}`
        : process.env.VUE_URL
}