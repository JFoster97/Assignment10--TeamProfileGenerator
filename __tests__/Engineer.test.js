const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('getGithub should return Github username', () => {
        expect(new Engineer('Kanye', 2, 'kanye@gmail.com', 'gitye').getGithub()).toBe('gitye');
    });

    it('getRole should return engineer', () => {
        expect(new Engineer('Kanye', 2, 'kanye@gmail.com', 'gitye').getRole()).toBe('engineer');
    });


})