"use strict";
describe('Function in typescript', () => {
    it('should support function in tpescript', () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Ikan")).toBe("Hello Ikan");
        function printHello(name) {
            console.log(`Hello ${name}`);
        }
        printHello("Ayam");
    });
    it('should support default value', () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello("Ikan")).toBe("Hello Ikan");
        expect(sayHello()).toBe("Hello Guest");
    });
    it('should support rest parameter', () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', () => {
        function sayHello(firstname, lastname) {
            if (lastname) {
                return `Hello ${firstname} ${lastname}`;
            }
            else {
                return `Hello ${firstname}`;
            }
        }
        expect(sayHello("Ikan")).toBe("Hello Ikan");
        expect(sayHello("Ikan", "Mas")).toBe("Hello Ikan Mas");
    });
});
