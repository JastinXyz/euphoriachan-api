const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getYTStalk = async (channel) => {
if(!channel) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the channel name query!')
}
const get = await axios(`${baseURL}/ytstalk?channel=${channel}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getYTStalk;