export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nib: string;
    readonly npwp: string;
}

export interface Employee {
    id: string;
    name: string;
    division: string;
}

export interface Manager extends Employee {
    numberOfEmployee: number;
}

export interface Person {
    name: string;
    sayHello(name: string): string;
}