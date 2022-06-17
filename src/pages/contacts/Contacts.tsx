import { useEffect, useRef, useState } from 'react';
import getContactsMap from '../../helpers/getContactsMap';
import getAllContacts from '../../services/contactsSevices'
import { TContactsMap } from '../../interfaces/contacts/contacts';
import AlphabetNav from '../../components/AlphabetNav/AlphabetNav';
import ContactsList from '../../components/ContactsList/ContactsList';
import Loading from '../../components/Loading/Loading';

const Contacts = () => {
    const [contactsMap, setContactsMap] = useState<TContactsMap>({});
    const [selectedAlphabet, setSelectedAlphabet] = useState('A');
    const [loading, setLoading] = useState(true);
    const isUseEffectExecuted = useRef(false); // react 18 bug, also can disable strict mode

    useEffect(() => {
        if (!isUseEffectExecuted.current) {
            addContacts();
            isUseEffectExecuted.current = true;
        }
    },[])

    const addContacts = async () => {
        const contactsResponse = await getAllContacts(200);
        setContactsMap(getContactsMap(contactsResponse.results));
        setLoading(false);
    }

    if (loading) return <Loading />

    return (
        <>
            <AlphabetNav
                contactsMap={contactsMap}
                selectedAlphabet={selectedAlphabet}
                setSelectedAlphabet={setSelectedAlphabet}
            />
            <ContactsList contactList={contactsMap[selectedAlphabet]?.contacts} />
        </>
    )
}

export default Contacts;