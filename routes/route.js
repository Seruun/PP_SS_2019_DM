'use strict';

var express = require('express');
var router = express.Router();
var logger = require('../app/logger');
var i18next = require('../app/i18next');

// +1 round years
const experienceTime = new Date(Date.now() - new Date(2011, 7, 1).getTime()).getFullYear() - 1970 + 1;

const lang = {
    values: [{
        pagelink: "",
        text: "Deutsch"
    }]
};

/*
var detectLang = function(req) {
    var langArr = [];
    var item;
    var fullUrl;

    if (process.env.DEFAULT_LANGUAGE === 'de') {
        fullUrl = req.protocol + '://felicia-tattoo-art.de' + req.originalUrl;
        item = lang.values[0];
        item.pagelink = fullUrl;
        langArr.push(item);
    } else {
        fullUrl = req.protocol + '://felicia-tattoo-art.de' + req.originalUrl;
        item = lang.values[1];
        item.pagelink = fullUrl;
        langArr.push(item);
    }

    return langArr;
};
*/

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    //logger.debug('Time: ', Date.now());
    next();
});

/* GET Index page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        // lang: detectLang(req)
    });
});

router.get('/association', function(req, res, next) {

    res.render('association', {
        // lang: detectLang(req)
    });
});

router.get('/gallery', function(req, res, next) {

    res.render('gallery', {
        // lang: detectLang(req)
    });
});

router.get('/pension', function(req, res, next) {

    res.render('pension', {
        // lang: detectLang(req)
    });
});

/* GET Impressum page. */
router.get('/imprint', function(req, res, next) {

    res.render('imprint', {
        // lang: detectLang(req)
    });
});

/* GET DSGVO page. */
router.get('/dsgvo', function(req, res, next) {

    res.render('dsgvo', {
        // lang: detectLang(req)
    });
});

router.get('/health-check', function(req, res, next) {
    res.sendStatus(200);
});

module.exports = router;