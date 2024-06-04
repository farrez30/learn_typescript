describe('Function in typescript', () => {


    it('should support function in tpescript', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello("Ikan")).toBe("Hello Ikan")

        function printHello(name: string): void {
            console.log(`Hello ${name}`)
        }

        printHello("Ayam")
    });


    it('should support default value', () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`
        }

        expect(sayHello("Ikan")).toBe("Hello Ikan");
        expect(sayHello()).toBe("Hello Guest");
    });

    it('should support rest parameter', () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value
            }

            return total
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15)
    });

    it('should support optional parameter', () => {
        function sayHello(firstname: string, lastname?: string): string {
            if(lastname){
                return `Hello ${firstname} ${lastname}`
            } else {
                return `Hello ${firstname}`
            }
        }

        expect(sayHello("Ikan")).toBe("Hello Ikan");
        expect(sayHello("Ikan","Mas")).toBe("Hello Ikan Mas");
    });


});