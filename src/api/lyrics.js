const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getLyrics = async (song) => {
if(!song) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the song query!')
}
const get = await axios(`${baseURL}/lyrics?song=${song}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getLyrics;