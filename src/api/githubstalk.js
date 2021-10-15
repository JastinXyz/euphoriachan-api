const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getGithubStalk = async (username) => {
if(!username) {
  throw new Error(chalk.red('[ euphoriachan-api ]') + ' Provide the username query!')
}
const get = await axios(`${baseURL}/githubstalk?username=${username}`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getGithubStalk;