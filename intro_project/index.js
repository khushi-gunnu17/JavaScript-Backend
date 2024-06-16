require('dotenv').config()
const express = require('express')      // common js 

// factory functions
const app = express()
const port = 3000


const githubData = {
    "login": "khushi-gunnu17",
    "id": 144596705,
    "node_id": "U_kgDOCJ5e4Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/144596705?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/khushi-gunnu17",
    "html_url": "https://github.com/khushi-gunnu17",
    "followers_url": "https://api.github.com/users/khushi-gunnu17/followers",
    "following_url": "https://api.github.com/users/khushi-gunnu17/following{/other_user}",
    "gists_url": "https://api.github.com/users/khushi-gunnu17/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/khushi-gunnu17/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/khushi-gunnu17/subscriptions",
    "organizations_url": "https://api.github.com/users/khushi-gunnu17/orgs",
    "repos_url": "https://api.github.com/users/khushi-gunnu17/repos",
    "events_url": "https://api.github.com/users/khushi-gunnu17/events{/privacy}",
    "received_events_url": "https://api.github.com/users/khushi-gunnu17/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Khushi Sharma",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 5,
    "following": 10,
    "created_at": "2023-09-10T11:11:50Z",
    "updated_at": "2024-04-23T10:47:54Z"
}


app.get('/', (req, res) => {        // home route
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Twitter")
})


app.get('/login', (req, res) => {
    res.send('<h1>Please login at khushi.dev</h1>')
})


app.get('/youtube', (req, res) => {
    res.send('<h2>Khushi Youtube channel</h2>')
})


app.get('/github', (req, res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})