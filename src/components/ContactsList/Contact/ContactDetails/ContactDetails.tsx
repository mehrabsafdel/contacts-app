import { IContactDetails } from './interfaces';
import style from './ContactDetails.module.scss'
import getContactFullName from '../../../../helpers/getContactFullName';
import Image from '../../../Image/Image';

const ContactDetails = ({ contact, onCloseContactDetails } : IContactDetails) => {

    return (
        <div className={style.contactDetails}>
            <div className={style.imageBox}>
                <Image
                    largeSrc={contact.picture.large}
                    mediumSrc={contact.picture.medium}
                    thumbnailSrc={contact.picture.thumbnail}
                    altText={getContactFullName(contact.name)}
                />
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