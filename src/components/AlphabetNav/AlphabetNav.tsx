import { IAlphabetNavProps } from './interfaces';
import AlphabetChar from "./AlphabetChar/AlphabetChar";
import style from './AlphabetNav.module.scss'

const AlphabetNav = ({ contactsMap, selectedAlphabet, setSelectedAlphabet } : IAlphabetNavProps) => {
    const renderAlphabet = () => {
        const alphabets = []
        for (let i = 65; i <= 90; i++) {
            const char = String.fromCharCode(i);
            alphabets.push((
                <AlphabetChar
                    key={char}
                    char={char}
                    isSelected={char === selectedAlphabet}
                    contactsNumber={contactsMap[char]?.length}
                    setSelectedAlphabet={setSelectedAlphabet}
                />
            ))
        }
        return alphabets
    }

    return (
        <div className={style.alphabetNav}>
            {renderAlphabet()}
        </div>
    )
}

export default AlphabetNav;