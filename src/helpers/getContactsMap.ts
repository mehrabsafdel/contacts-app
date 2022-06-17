import { IContact } from '../interfaces/contacts/contacts';

const getContactsMap = (contacts : IContact[]) => {
    return contacts.reduce((p: any, c: any) => {
        let char = c.name.first.charAt(0).toUpperCase();
        p[char] = {
            contacts: [].concat((p[char]?.contacts || []), c),
            length: p[char] ? p[char].length + 1 : 1
        }
        return p;
    }, {});
}

export default getContactsMap;