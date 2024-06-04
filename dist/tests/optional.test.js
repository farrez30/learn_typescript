"use strict";
describe('Optional Parameter', () => {
    it('should support null and undefined', () => {
        function sayHello(name) {
            if (name) {
                return `Hello ${name}`;
            }
            else if (name === null) {
                return "Hello null";
            }
            else if (name === undefined) {
                return "Hello undefined";
            }
        }
        sayHello("Ayam wooooooooooooooooo");
        const name = undefined;
        sayHello(undefined);
        sayHello(null);
        console.log("Hello undefined:", sayHello(name));
        console.log("Hello null:", sayHello(null));
        console.log("Hello ayam:", sayHello("Ayam wooooooooooooooooo"));
        expect(sayHello("Ayam wooooooooooooooooo")).toBe("Hello Ayam wooooooooooooooooo");
        expect(sayHello(name)).toBe("Hello undefined");
        expect(sayHello(null)).toBe("Hello null");
    });
});
