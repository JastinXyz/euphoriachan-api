const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getNPM = async (name) => {
if(!name) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the NPM package name query!')
}
const get = await axios(`${baseURL}/npm?name=${name}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getNPM;