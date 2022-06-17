export interface IContact {
    cell: string;
    dob: object;
    email: string;
    gender: string;
    id: {
        name: string;
        value: string;
    };
    location: object;
    login: object;
    name: IName;
    nat: string;
    phone: string
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    };
    registered: object;
}

export interface IName {
    title: string;
    first: string;
    last: string;
}

interface IContactsMapValue {
    contacts: IContact[];
    length: number;
}

export type TContactsMap = Record<string, IContactsMapValue>