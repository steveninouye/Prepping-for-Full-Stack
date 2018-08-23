import { Router } from 'express';
import {
    CreateChirp,
    DeleteChirp,
    GetChirps,
    GetChirp,
    UpdateChirp
} from '../middleware/chirpstore';

let router = Router();

router.get('/:id',(req,res) => {
    
})

router.get('/', (req, res) => {
    let json = GetChirps();
    let chirps = [];
    for(let i = 0; true; i++){
        if(!json[i]){
            break
        }
        chirps.push(GetChirps()[i])
    }
    res.json(chirps);
});

router.post('/', (req, res) => {
    CreateChirp(req.body);
    res.send('hello from post route');
});

export default router;
