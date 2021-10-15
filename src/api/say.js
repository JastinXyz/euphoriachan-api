const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getSay = async (q) => {
if(!q) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the query!')
}
const get = await axios(`${baseURL}/say?q=${q}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getSay;