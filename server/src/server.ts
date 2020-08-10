import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// Converte a requisição para um objeto .json
app.use(cors())
app.use(express.json())
app.use(routes);

// Porta localhost:3333
app.listen(3333);