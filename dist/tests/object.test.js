"use strict";
describe('Object', () => {
    it('should support in typescript', () => {
        const person = {
            id: "1",
            name: "Ayam"
        };
        console.info(person);
        person.id = "2";
        person.name = "Ikan";
        console.info(person);
    });
});
