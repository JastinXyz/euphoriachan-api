const axios = require('axios')
const chalk = require('chalk')
const { baseURL } = require('../tools/tools.json')
const userAgents = require('../tools/user-agents.json')
const getYesNo = async () => {
const get = await axios(`${baseURL}/yesno`, {
  headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
  }
})
const res = get.data;
return res
}
  
  
  module.exports = getYesNo;