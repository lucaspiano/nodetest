// __tests__/api.test.ts

import request from 'supertest';
import app from '../app'; // Assuming your Express app is exported from app.ts
import { test } from 'node:test';

describe('API endpoints', () => {
    test('POST /solve-water-jug-riddle should return solution for valid inputs', async () => {
        const res = await request(app)
            .post('/solve-water-jug-riddle')
            .send({ x_capacity: 3, y_capacity: 5, z_amount_wanted: 4 });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('solution');
    });

    test('POST /solve-water-jug-riddle should return no solution for impossible scenario', async () => {
        const res = await request(app)
            .post('/solve-water-jug-riddle')
            .send({ x_capacity: 4, y_capacity: 6, z_amount_wanted: 5 });

        expect(res.statusCode).toBe(200);
        expect(res.body).not.toHaveProperty('solution');
        expect(res.body).toHaveProperty('message', 'No solution possible.');
    });

    test('POST /solve-water-jug-riddle should handle negative or non-integer inputs', async () => {
        const res = await request(app)
            .post('/solve-water-jug-riddle')
            .send({ x_capacity: -3, y_capacity: 5, z_amount_wanted: 4 });

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error', 'Invalid input. x_capacity, y_capacity, and z_amount_wanted must be positive integers.');
    });
});
