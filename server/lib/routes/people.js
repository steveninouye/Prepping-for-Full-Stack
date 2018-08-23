'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _chirpstore = require('../middleware/chirpstore');

var router = (0, _express.Router)();

router.get('/:id', function (req, res) {});

router.get('/', function (req, res) {
    var json = (0, _chirpstore.GetChirps)();
    var chirps = [];
    for (var i = 0; true; i++) {
        if (!json[i]) {
            break;
        }
        chirps.push((0, _chirpstore.GetChirps)()[i]);
    }
    res.json(chirps);
});

router.post('/', function (req, res) {
    (0, _chirpstore.CreateChirp)(req.body);
    res.send('hello from post route');
});

exports.default = router;