const fetch = require("node-fetch")

module.exports = async () => {
    const reposUrl = 'https://api.github.com/users/kingultron99/repos'
    const repos = await fetch(reposUrl, {
        headers: {
            authorization: "token 9383eb90601dad9a25ae5033c288115ab3e228a0",
            'Accept': 'application/vnd.github.v3+json'
        }
    }).then(res => res.json())
    return repos
}