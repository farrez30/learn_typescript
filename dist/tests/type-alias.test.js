describe('Type Alias', () => {
    it('should support Type Alias in typescript', () => {
        const category = {
            id: 1,
            name: "Handphone"
        };
        const product = {
            id: "1",
            name: "Samsung S20",
            price: 20000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
