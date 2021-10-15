const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getHaste = async (text) => {
if(!text) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the text/code query!')
}
const get = await axios(`${baseURL}/haste?text=${text}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getHaste;