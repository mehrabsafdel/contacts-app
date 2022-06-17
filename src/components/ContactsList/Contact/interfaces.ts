import { IContact } from '../../../interfaces/contacts/contacts';
import React from 'react';

export interface IContactProps {
    contact: IContact;
    isSelected: boolean;
    setSelectedContactCell: React.Dispatch<React.SetStateAction<string>>;
}