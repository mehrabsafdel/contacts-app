import axios from './instance'

const getAllContacts = (contactsNumber : number) =>
    axios.get(`/`,{
        params : {
            results : contactsNumber
        }
    }).then(response => response.data)
        .catch(console.log)

export default getAllContacts