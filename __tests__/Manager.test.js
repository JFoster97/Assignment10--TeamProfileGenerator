const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('getOfficeNumber should return manager office number', () => {
        expect(new Manager('Kanye', 3, 'kanye@gmail.com', 312).getOfficeNumber()).toBe(312);
    });

    it('getRole should return manager', () => {
        expect(new Engineer('Kanye', 2, 'kanye@gmail.com', 'gitye').getRole()).toBe('manager');
    });
})