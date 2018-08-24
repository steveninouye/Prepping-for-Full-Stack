'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var fs = require('fs');
var chirps = [];

if (fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

var getChirps = function getChirps() {
    return chirps.slice(); //create a copy and return it
};

var getChirp = function getChirp(id) {
    console.log(id);
    console.log(typeof id === 'undefined' ? 'undefined' : _typeof(id));
    return chirps.filter(function (e) {
        return e.id === id;
    })[0]; //create a copy and return it
};

var createChirp = function createChirp(chirp) {
    chirp.id = chirps.slice(-1)[0].id + 1;
    chirps[chirps.length] = chirp;
    writeChirps();
};

var updateChirp = function updateChirp(id, chirp) {
    var idx = chirps.findIndex(function (e) {
        return e.id = id;
    });
    chirp.id = id;
    chirps[idx] = chirp;
    writeChirps();
};

var deleteChirp = function deleteChirp(id) {
    var idx = chirps.findIndex(function (e) {
        return e.id = id;
    });
    chirps.splice(idx, 1);
    writeChirps();
};

var writeChirps = function writeChirps() {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};