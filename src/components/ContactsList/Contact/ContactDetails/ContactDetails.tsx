import { IContactDetails } from './interfaces';
import style from './ContactDetails.module.scss'
import getContactFullName from '../../../../helpers/getContactFullName';

const ContactDetails = ({ contact, onCloseContactDetails } : IContactDetails) => {

    return (
        <div className={style.contactDetails}>
            <div className={style.imageBox}>
                <picture>
                    <source media="(min-width:650px)" srcSet={contact.picture.large} />
                    <source media="(min-width:350px)" srcSet={contact.picture.medium} />
                    <img src={contact.picture.thumbnail} alt={getContactFullName(contact.name)} />
                </picture>
            </div>
            <div className={style.informationBox}>
                <h4>{getContactFullName(contact.name)}</h4>
                <ul>
                    <li>email : {contact.email}</li>
                    <li>phone : {contact.phone}</li>
                    <li>gender : {contact.gender}</li>
                    <li>cell : {contact.cell}</li>
                </ul>
            </div>
            <div className={style.closeIcon} onClick={onCloseContactDetails} />
        </div>
    )
}

export default ContactDetails;