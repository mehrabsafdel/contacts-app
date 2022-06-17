import { IContact } from '../../../../interfaces/contacts/contacts';

export interface IContactDetails {
    contact: IContact;
    onCloseContactDetails: () => void;
}