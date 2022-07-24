const axios = require('axios');
const response = require('../app');
const qs = require('qs');

exports.lineNotify =async(msg) =>{
    // msg = JSON.stringify(msg);

    const token = "jFvE3C1FDrz8Glh7D72YtZG3UnsE64sPAKvY55jGxmT";
    const url = "https://notify-api.line.me/api/notify";
    const data = qs.stringify({
        message: msg,
    });
    
    const result = await axios({
        method: 'post',
        url: url,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${token}`,
        },
        data: data,
    })
    .then((result)=>{
        console.log(result);
        // result.status(200).send(result.data);
    })
    .catch((error)=>{
        console.log(error);
    })
    
}