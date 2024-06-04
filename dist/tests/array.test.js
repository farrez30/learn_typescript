"use strict";
describe('Array', () => {
    it('should same with javascript', () => {
        const names = ["Eko", "Joko", "Budi"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', () => {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "main game";
    });
    it('should support tuple', () => {
        const person = ["Eko", 10, "Budi"];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = "Budi";
    });
});
