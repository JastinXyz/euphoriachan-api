const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getBrainlyID = async (q) => {
if(!q) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the question query!')
}
const get = await axios(`${baseURL}/brainly/id?q=${q}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getBrainlyID;