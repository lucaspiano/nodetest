import express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
// @ts-ignore
import { solveWaterJugRiddle } from './WaterJugBackend';

const app = express();
const port = 3000;

export default app; // Exporte a instância do aplicativo Express


// Middleware para analisar corpos de requisição no formato JSON
app.use(bodyParser.json());

// Rota para resolver o problema do Water Jug Riddle
app.post('/solve-water-jug-lucas', (req: Request, res: Response) => {
    // Extrai os dados do corpo da requisição
    const { x_capacity, y_capacity, z_amount_wanted } = req.body;

    // Validação dos inputs
    if (!Number.isInteger(x_capacity) || !Number.isInteger(y_capacity) || !Number.isInteger(z_amount_wanted) || x_capacity <= 0 || y_capacity <= 0 || z_amount_wanted <= 0) {
        return res.status(400).json({ error: 'Invalid input. x_capacity, y_capacity, and z_amount_wanted must be positive integers.' });
    }

    // Chama a função para resolver o problema do Water Jug Riddle
    const solution = solveWaterJugRiddle(x_capacity, y_capacity, z_amount_wanted);

    // Retorna a solução ou uma mensagem de erro
    if (solution) {
        return res.json({ solution });
    } else {
        return res.json({ message: 'No solution possible.' });
    }
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
