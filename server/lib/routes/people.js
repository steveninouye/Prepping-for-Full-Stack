'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _chirpstore = require('../middleware/chirpstore');

var router = (0, _express.Router)();

router.get('/:id', function (req, res) {
    var id = parseInt(req.params.id, 10);
    res.json((0, _chirpstore.GetChirp)(id));
});

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

router.put('/', function (req, res) {
    var id = parseInt(req.body.id, 10);
    (0, _chirpstore.UpdateChirp)(id, req.body);
    res.send('hello from put route');
});

router.delete('/', function (req, res) {
    var id = parseInt(req.body.id, 10);
    (0, _chirpstore.DeleteChirp)(id);
    res.send('hello from delete route');
});

exports.default = router;