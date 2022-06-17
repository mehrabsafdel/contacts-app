import { IContactsListProps } from './interfaces';
import Contact from './Contact/Contact';
import { useEffect, useState } from 'react';
import style from './ContactssList.module.scss'

const ContactsList = ({ contactList } : IContactsListProps) => {
    const [selectedContactCell, setSelectedContactCell] =
        useState<string>('');

    useEffect(() => {
        setSelectedContactCell('');
    },[contactList])

    return (
        <div className={style.contactsList}>
            {contactList?.map(contact => (
                <Contact
                    contact={contact}
                    setSelectedContactCell={setSelectedContactCell}
                    isSelected={contact.cell === selectedContactCell}
                    key={contact.cell}
                />
            ))}
        </div>
    )
}

export default ContactsList;