const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getNPM = async (option, anotheroption) => {
if(!option) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the option 1 query!')
} else if (!anotheroption) {
    throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the option 2 query')
} else {
const get = await axios(`${baseURL}/random?option=${option}&anotheroption=${anotheroption}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
}
  
  
  module.exports = getNPM;