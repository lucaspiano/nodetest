// Definindo a interface para representar um passo da solução
interface Step {
    step: number;
    bucketX: number;
    bucketY: number;
    action: string;
    status?: string;
}

export function solveWaterJugRiddle(x_capacity: number, y_capacity: number, z_amount_wanted: number): Step[] | null {
    let currentX = 0;
    let currentY = 0;

    const steps: Step[] = [];

    while (currentX !== z_amount_wanted && currentY !== z_amount_wanted) {
        if (currentX === 0) {
            steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: "Fill bucket X" });
            currentX = x_capacity;
        }
        else if (currentY !== y_capacity) {
            const transferAmount = Math.min(currentX, y_capacity - currentY);
            steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: `Transfer ${transferAmount} from bucket X to Y` });
            currentX -= transferAmount;
            currentY += transferAmount;
        }
        else if (currentY === y_capacity) {
            steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: "Empty bucket Y" });
            currentY = 0;
        }

        if (currentX === z_amount_wanted || currentY === z_amount_wanted) {
            steps.push({ step: steps.length + 1, bucketX: currentX, bucketY: currentY, action: "Desired amount reached", status: "Solved" });
            break;
        }
    }

    if (currentX !== z_amount_wanted && currentY !== z_amount_wanted) {
        return null;
    }

    return steps;
}
