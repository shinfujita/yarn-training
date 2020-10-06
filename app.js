'use strict';
// 2019年度版
// const request = require('request');
// request('https://www.google.com', (error, response, body) => {
//     console.log(body);
// });

// 2020年度版
const axios = require('axios');
axios.get ('https://www.google.com').then(res => {
    console.log(res.data);
});