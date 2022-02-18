__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/rpl', (req, res) => {
    res.sendFile(__path + '/views/test.html')
})


router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Hanif Bot',
            namaowner: 'Hanif',
            instagram: 'https://Instagram.com/hanipdeveloper',
            youtube : 'https://youtube.com/channel/UC8NDSBteLaid_o0ic2yZjkg'
        }
    }
    res.json(config)
})

module.exports = router
