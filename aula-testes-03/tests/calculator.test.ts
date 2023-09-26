import calculator from "calculator";

describe("Teste da Calculadora", () => {
    it("Testando função de soma, 2 + 4 = 6", () => {
        const result = calculator.sum(2, 4);
        expect(result).toBe(6);
    });

    it("Testando função de subtração, 12 - 4 = 8", () => {
        const result = calculator.sub(12, 4);
        expect(result).toBe(8);
    });

    it("Testando função de divisão, 12 / 4 = 3", () => {
        const result = calculator.div(12, 4);
        expect(result).toBe(3);
    });

    it("Testando função de multiplicação, 12 * 4 = 48", () => {
        const result = calculator.mul(12, 4);
        expect(result).toBe(48);
    });
});