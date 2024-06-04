import { Employee, Manager, Person, Seller } from "../src/interface";

describe('interface', () => {
    it('should support interface in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Ayam",
            nib: "121312312",
            npwp: "43445454"
        }
        console.log("seller1:", seller)

        seller.name = "Ikan"
        console.log("seller2:", seller)
        // seller.nib = "4555555"
        // console.log("sseller3:",seller)
    });

    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        console.log(add(1, 2))

        expect(add(2, 2)).toBe(4)
    });

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Ayam", "Ikan"]

        expect(names[0]).toBe("Ayam")
        expect(names[1]).toBe("Ikan")
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            names: "Ayam",
            address: "Indonesia"
        }

        console.log(dictionary["names"])
        expect(dictionary["names"]).toBe("Ayam")
    });

    it('should support extends interface', () => {
        const employee: Employee = {
            id: "1",
            name: "Ayam",
            division: "IT"
        }

        console.log(employee)

        const manager: Manager = {
            id: "2",
            name: "Ikan",
            division: "IT",
            numberOfEmployee: 10
        }

        console.log(manager)
    });

    it('should support function in interface', () => {

        const person: Person = {
            name: "Ayam",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.log(person.sayHello("Ikan"))
    });

    it('should support intersection types', () => {
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasName & HasId;

        const domain: Domain = {
            id: "1",
            name: "Ayam"
        }

        console.log(domain)
    });

    it('should support type Assertion', () => {
        const person: any = {
            name: "Eko",
            age: 30
        }

        const person2: Person = person as Person
        console.log(person2);
        // console.log(person2.age);
        // console.log(person2.sayHello("ayam"))
    });
});