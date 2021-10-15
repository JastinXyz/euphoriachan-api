const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getIPLookup = async (ip) => {
if(!ip) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the ip query!')
}
const get = await axios(`${baseURL}/iplookup?ip=${ip}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getIPLookup;