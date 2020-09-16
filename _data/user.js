const fetch = require("node-fetch")

module.exports = async () => {
    const userUrl = 'https://api.github.com/users/kingultron99'
    const user = await fetch(userUrl, {
        headers: {
            'Authorization': 'token 70b7230dc964e2b64cb16e9e5e934b5960aada71',
            'Accept': 'application/vnd.github.v3+json'
        }
    }).then(res => res.json())
    return user
}