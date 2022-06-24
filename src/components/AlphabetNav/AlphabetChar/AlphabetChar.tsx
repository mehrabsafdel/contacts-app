import { IAlphabetCharProps } from './interfaces';
import style from './AlphabetChar.module.scss'
import cs from 'classnames'

const AlphabetChar = ({ char, contactsNumber, isSelected, setSelectedAlphabet } : IAlphabetCharProps) => {
    return (
        <button
            className={cs(style.alphabetChar, isSelected && style.selected)}
            onClick={() => setSelectedAlphabet(char)}
            disabled={!contactsNumber}
        >
            {char}
            <span className={style.count}>
                { contactsNumber ? contactsNumber : 0 }
            </span>
        </button>
    )
}

export default AlphabetChar;