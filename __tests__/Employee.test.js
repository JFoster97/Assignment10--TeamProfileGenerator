const Employee = require('../lib/Employee');

describe ('Employee class', () => {
    it('getName should return Employee name', () => {
        expect(new Employee('Kanye', 2, 'kanye@gmail.com').getName()).toBe('Kanye');
    });

    it('getID should return Employee ID', () => {
        expect(new Employee('Kanye', 2, 'kanye@gmail.com').getId()).toBe(2);
    });

    it('getEmail should return Employee email', () => {
        expect(new Employee('Kanye', 2, 'kanye@gmail.com').getEmail()).toBe('kanye@gmail.com')
    })

})
