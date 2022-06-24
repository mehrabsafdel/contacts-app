import { IName } from '../interfaces/contacts/contacts';

const getContactFullName = (name : IName) : string => `${name.title}. ${name.first} ${name.last}`

export default getContactFullName;