var express = require('express');
var router = express.Router();
var users = require('../controller/usercontroller');
var auth = require('../authentication');
router.get('/users/:id/list', auth, users.usersList);
router.get('/chatlist', auth, users.chatlist);
router.get('/peerchatlist/:userid/and/:receiverid',auth,users.peerchatlist);
module.exports = router