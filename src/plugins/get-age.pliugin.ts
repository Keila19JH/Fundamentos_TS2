const getAge = require('get-age');

export const getAgePlugin = (birthdayDate: string) => {
    
    return getAge(birthdayDate);
}