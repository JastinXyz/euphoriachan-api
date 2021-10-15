const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getKBBI = async (text) => {
if(!text) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the text/keyword query!')
}
const get = await axios(`${baseURL}/kbbi?text=${text}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getKBBI;