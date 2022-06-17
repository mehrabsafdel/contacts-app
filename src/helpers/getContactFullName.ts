import { IName } from '../interfaces/contacts/contacts';

const getContactFullName = (name : IName) => `${name.title}. ${name.first} ${name.last}`

export default getContactFullName;