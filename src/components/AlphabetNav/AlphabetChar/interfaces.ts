import React from 'react';

export interface IAlphabetCharProps {
    char: string;
    contactsNumber: number;
    isSelected: boolean;
    setSelectedAlphabet: React.Dispatch<React.SetStateAction<string>>;
}