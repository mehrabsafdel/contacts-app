import { IContactProps } from './interfaces';
import style from './Contact.module.scss';
import getContactFullName from '../../../helpers/getContactFullName';
import ContactDetails from './ContactDetails/ContactDetails';

const Contact = ({ contact, isSelected, setSelectedContactCell } : IContactProps) => {

    const onCloseContactDetails = () => setSelectedContactCell('')

    return (
        <div className={style.contact}>
            <div className={style.contactName} onClick={() => setSelectedContactCell(contact.cell)}>
                {getContactFullName(contact.name)}
            </div>
            {isSelected && (
                <ContactDetails contact={contact} onCloseContactDetails={onCloseContactDetails} />
            )}
        </div>
    )
}

export default Contact