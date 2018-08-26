import { Router } from 'express';
import mysql from 'mysql';
import {
    CreateChirp,
    DeleteChirp,
    GetChirps,
    GetChirp,
    UpdateChirp
} from '../middleware/chirpstore';

let router = Router();
const connection = mysql.createConnection({
    host: "localhost",
    database: "chirpr",
    user: 'chirprapp',
    password: 'password'
})

router.get('/:id',(req,res) => {
    const query = `SELECT * FROM users WHERE id=${req.params.id}`;
    connection.connect();
    connection.query(query, (err, result, fields) => {
        if (err){
            connection.end();
            return console.log(err);
        }
        connection.end();
        res.send(result);
    })
})

router.get('/', (req, res) => {
    const query = `SELECT * FROM users;`
    connection.connect();
    connection.query(query, (err, result, fields) => {
        if (err){
            connection.end();
            return console.log(err);
        }
        connection.end();
        res.send(result);
    })
});

router.post('/', (req, res) => {
    const query = `INSERT INTO users SET ?`;
    const user = {
        name: req.body.name,
        age: req.body.age
    }
    connection.connect();
    connection.query(query, user, (err, result, fields) => {
        if (err){
            connection.end();
            return console.log(err);
        }
        connection.end();
        res.send(result);
    })
});

router.put('/:id',(req,res) => {
    // const id = parseInt(req.body.id, 10);
    // UpdateChirp(id, req.body);
    // res.send('hello from put route');
    const query = `UPDATE users SET ? WHERE id=${req.params.id}`;
    const user = {
        name: req.body.name,
        age: req.body.age
    }
    connection.connect();
    connection.query(query, user, (err, result, fields) => {
        if (err){
            connection.end();
            return console.log(err);
        }
        connection.end();
        res.send(result);
    })
})

router.delete('/', (req, res) => {
    const id = parseInt(req.body.id, 10);
    DeleteChirp(id);
    res.send('hello from delete route');
});

export default router;
