import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './contacts/Contacts';

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Contacts />} />
            </Routes>
        </Router>
    )
}

export default Pages;