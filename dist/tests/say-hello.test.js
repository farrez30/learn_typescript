import { sayHello } from "../src/say-hello";
describe('sayHello', () => {
    it('should return hello Eko', () => {
        expect(sayHello('Eko')).toBe('Hello Eko');
    });
});
