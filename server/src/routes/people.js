import { Router } from 'express';
import {
    CreateChirp,
    DeleteChirp,
    GetChirps,
    GetChirp,
    UpdateChirp
} from '../middleware/chirpstore';

let router = Router();

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.json(GetChirp(id));
});

router.get('/', (req, res) => {
    let json = GetChirps();
    let chirps = [];
    for (let i = 0; true; i++) {
        if (!json[i]) {
            break;
        }
        chirps.push(GetChirps()[i]);
    }
    res.json(chirps);
});

router.post('/', (req, res) => {
    CreateChirp(req.body);
    res.send('hello from post route');
});

router.put('/', (req, res) => {
    const id = parseInt(req.body.id, 10);
    UpdateChirp(id, req.body)
    res.send('hello from put route');
});

router.delete('/', (req, res) => {
    const id = parseInt(req.body.id, 10);
    DeleteChirp(id)
    res.send('hello from delete route');
});

export default router;
