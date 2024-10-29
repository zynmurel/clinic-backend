import express, { Express, Request, Response} from 'express';
import { PORT } from './secrets';

const app:Express = express()

app.get('/', (req:Request, res:Response)=>{
    res.send('Sample response')
})

app.listen(PORT, ()=>console.log('Clinic running'))