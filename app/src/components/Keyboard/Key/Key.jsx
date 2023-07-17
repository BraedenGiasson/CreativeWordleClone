import { useContext } from "react";
import './Key.css'
import wordleService from "../../../services/wordleService";
import { Key as keyName } from "../../../utils/keyboardKeyNames";

export default function Key({ keyVal, bigKey, keyClick, deleteKey, guessColor }) {
  
  const selectedLetter = () => {
    keyClick(deleteKey ? keyName.Backspace : keyVal);
  }

  return (
    <div onClick={selectedLetter}
      className={`key ${guessColor}`}
    //   id={bigKey ? "big" : disabled && "disabled"}
      id={bigKey ? "big"  : "disabled"}
    //   onClick={selectLetter}
    style={{
      transitionDelay: `${(6.5 * 250) }ms`
    }}
    >
      {keyVal} 
    </div>
  );
}