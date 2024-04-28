"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveWaterJugRiddle = void 0;
// Função para resolver o problema do Water Jug Riddle
function solveWaterJugRiddle(x_capacity, y_capacity, z_amount_wanted) {
    var currentX = 0;
    var currentY = 0;
    var steps = [];
    while (currentX !== z_amount_wanted && currentY !== z_amount_wanted) {
        if (currentX === 0) {
            steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: "Fill bucket X" });
            currentX = x_capacity;
        }
        else if (currentY !== y_capacity) {
            var transferAmount = Math.min(currentX, y_capacity - currentY);
            steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: "Transfer ".concat(transferAmount, " from bucket X to Y") });
            currentX -= transferAmount;
            currentY += transferAmount;
        }
        else if (currentY === y_capacity) {
            steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: "Empty bucket Y" });
            currentY = 0;
        }
    }
    if (currentX === z_amount_wanted || currentY === z_amount_wanted) {
        steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: "Desired amount reached", status: "Solved" });
    }
    else {
        return null;
    }
    return steps;
}
exports.solveWaterJugRiddle = solveWaterJugRiddle;
