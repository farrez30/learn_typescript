"use strict";
describe('Any', () => {
    it('should support any in typesccript', () => {
        const person = {
            id: 1,
            name: "Ayam Ikan",
            age: 30
        };
        person.age = 31;
        person.address = "Indonesia";
        console.info(person);
    });
});
