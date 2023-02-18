const { HomeGetCtrl } = require('../controller/HomeCtrl');

const router = require('express').Router();

router.get("/", HomeGetCtrl);

module.exports = router