import { TContactsMap } from '../../interfaces/contacts/contacts';
import React from 'react';

export interface IAlphabetNavProps {
    contactsMap: TContactsMap;
    selectedAlphabet: string;
    setSelectedAlphabet: React.Dispatch<React.SetStateAction<string>>;
}
