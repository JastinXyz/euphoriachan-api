const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getAnimeInfo = async (title) => {
if(!title) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the anime title query!')
}
const get = await axios(`${baseURL}/animeinfo?title=${title}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getAnimeInfo;