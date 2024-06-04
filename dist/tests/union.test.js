"use strict";
describe('Union Type', () => {
    it('should support Union in typescript', () => {
        let sample = "Eko";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it('should support typeof operator', () => {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("Eko")).toBe("EKO");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
