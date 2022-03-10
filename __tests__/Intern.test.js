const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('getSchool should return the Interns School', () => {
        expect(new Intern('Kanye', 2, 'kanye@gmail.com', 'Art Institute of Chicago').getSchool()).toBe('Art Institute of Chicago');
    });

    it('getRole should return Intern', () => {
        expect(new Engineer('Kanye', 2, 'kanye@gmail.com', 'gitye').getRole()).toBe('Intern');
    });
})