import { CustomerType } from '../src/enum';
describe('Enum', () => {
    it('should support typesccript', () => {
        const customer = {
            id: "1",
            name: "Ikan",
            type: CustomerType.REGULAR
        };
        console.info(typeof customer);
        expect(customer).toEqual({ id: '1', name: 'Ikan', type: 'REGULAR' });
    });
});
