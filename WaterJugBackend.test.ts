// __tests__/WaterJugBackend.test.ts

import { solveWaterJugRiddle } from '../WaterJugBackend';

describe('Water Jug Riddle algorithm', () => {
    test('should return solution for valid inputs', () => {
        // Best case scenario
        const solution = solveWaterJugRiddle(3, 5, 4);
        expect(solution).toEqual([
            { step: 1, bucketX: 0, bucketY: 0, action: 'Initial state' },
            { step: 2, bucketX: 3, bucketY: 0, action: 'Fill bucket X' },
            { step: 3, bucketX: 0, bucketY: 3, action: 'Transfer from bucket X to Y' },
            { step: 4, bucketX: 3, bucketY: 3, action: 'Fill bucket X' },
            { step: 5, bucketX: 1, bucketY: 5, action: 'Transfer from bucket X to Y', status: 'Solved' }
        ]);
    });

    test('should return no solution for impossible scenario', () => {
        // Worst case scenario (no solution possible)
        const solution = solveWaterJugRiddle(4, 6, 5);
        expect(solution).toBe(null);
    });

    test('should handle negative or non-integer inputs', () => {
        // Negative or non-integer inputs
        const solution = solveWaterJugRiddle(-3, 5, 4);
        expect(solution).toBe(null);

        const solution2 = solveWaterJugRiddle(3, 5.5, 4);
        expect(solution2).toBe(null);

        const solution3 = solveWaterJugRiddle(3, 5, -4);
        expect(solution3).toBe(null);
    });
});
