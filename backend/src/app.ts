import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import createConnection from './database';

createConnection();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world!!!");
})

app.use(routes);

export { app };
