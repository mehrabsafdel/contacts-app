import { IAlphabetCharProps } from "./interfaces";
import style from './AlphabetChar.module.scss'
import cs from 'classnames'

const AlphabetChar = ({ char, contactsNumber, isSelected, setSelectedAlphabet } : IAlphabetCharProps) => {
    return (
        <div className={cs(style.alphabetChar, isSelected && style.selected)} onClick={() => setSelectedAlphabet(char)}>
            {char}
            <span className={style.count}>
                { contactsNumber ? contactsNumber : 0 }
            </span>
        </div>
    )
}

export default AlphabetChar;