# euphoriachan-api
Wrappers for [THIS API](https://api.euphoriachan.xyz). Which might be useful for you.

# Installation
```cli
npm i euphoriachan-api
```

# Example
```js
const euphoriaAPI = require('euphoriachan-api')

euphoriaAPI.getGithubStalk('JastinXyz').then(res => console.log(res));
```

# Example Response
```
{
  login: 'JastinXyz',
  id: 73673322,
  node_id: 'MDQ6VXNlcjczNjczMzIy',
  avatar_url: 'https://avatars.githubusercontent.com/u/73673322?v=4',
  url: 'https://api.github.com/users/JastinXyz',
  html_url: 'https://github.com/JastinXyz',
  followers_url: 'https://api.github.com/users/JastinXyz/followers',
  following_url: 'https://api.github.com/users/JastinXyz/following{/other_user}',
  gists_url: 'https://api.github.com/users/JastinXyz/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/JastinXyz/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/JastinXyz/subscriptions',
  organizations_url: 'https://api.github.com/users/JastinXyz/orgs',
  repos_url: 'https://api.github.com/users/JastinXyz/repos',
  events_url: 'https://api.github.com/users/JastinXyz/events{/privacy}',
  received_events_url: 'https://api.github.com/users/JastinXyz/received_events',
  type: 'User',
  site_admin: false,
  name: null,
  company: '@CodeNime ',
  blog: 'jastinch.xyz',
  location: 'Indonesia',
  email: null,
  hireable: null,
  bio: 'me? just someone who wants to learn about Programming and wants to master it. :)',
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 15,
  following: 7,
  created_at: '2020-10-29T23:01:17Z',
  updated_at: '2021-10-04T09:47:11Z'
}
```

# All Functions
**Note:**
* Still Continuously Updated if there are new endpoints from the API or there are changes from the API.

**Endpoints:**

- Lyrics
```js
euphoriaAPI.getLyrics("song name")
```
- KBBI
```js
euphoriaAPI.getKBBI("keyword")
```
- NPM
```js
euphoriaAPI.getNPM("package name")
```
- Haste
```js
euphoriaAPI.getHaste("some text or code")
```
- RPS
```js
euphoriaAPI.getRPS()
```
- Yes No
```js
euphoriaAPI.getYesNo()
```
- Random Option
```js
euphoriaAPI.getRandom("option 1", "option 2")
```
- Instagram Stalk / Profile Info
```js
euphoriaAPI.getIGStalk("username")
```
- Github Stalk / Profile Info
```js
euphoriaAPI.getGithubStalk("username")
```
- Youtube Stalk / Channel Info
```js
euphoriaAPI.getYTStalk("channel name")
```
- Anime Info
```js
euphoriaAPI.getAnimeInfo("anime title")
```
- IP Lookup
```js
euphoriaAPI.getIPLookup("valid ip")
```
- Say
```js
euphoriaAPI.getSay("some message")
```
- Brainly (For now only Indonesian Server Available)
```js
euphoriaAPI.getBrainlyID("question")
```

# Links
- [API](https://api.euphoriachan.xyz)
- [Website](https://euphoriachan.xyz)
- [Discord Bot](https://euphoriachan.xyz/invite)
- [Discord Server](https://euphoriachan.xyz/discord)
- [Github](https://github.com/JastinXyz)