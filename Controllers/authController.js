const axios = require('axios');
const url = require('url');
const dotenv = require('dotenv').config();

const discordAuth = async (req, res) => {
    const {code} = req.query;

    if (code){
        const formData = new url.URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: process.env.REDIRECT_URI,
        });
    }
    const output = await axios.post('https://discord.com/api/v8/oauth2/token', formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if (output.data){
        const access = output.data.access_token;

        const user = await axios.get('https://discord.com/api/v8/users/@me', {
            headers: {
                authorization: `Bearer ${access}`
            }
        });
    //handle refresh token
    const formData1 = new url.URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'refresh_token',
        code: code,
        refresh_token: output.data.refresh_token,
        scope: 'identify'
    });
    const refresh = await axios.post('https://discord.com/api/v8/oauth2/token', formData1, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    }
    res.send(user.data);
}
module.exports = {discordAuth};