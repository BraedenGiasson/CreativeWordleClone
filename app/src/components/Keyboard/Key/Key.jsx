import { useContext } from "react";
import './Key.css'
import wordleService from "../../../services/wordleService";
import { Key as keyName } from "../../../utils/keyboardKeyNames";
import { board } from "../../../utils/boardSize";

export default function Key({ keyVal, bigKey, keyClick, deleteKey, guessColor }) {
  
  const selectedLetter = () => {
    keyClick(deleteKey ? keyName.Backspace : keyVal);
  }

  const duration = 500;
  const transitionDelay = 300;
  let animationDuration = 0;

  for (let i = 0; i < board.columns - 2; i++) {
    animationDuration += ((i * duration) / 2);
  }
  animationDuration += transitionDelay;

  return (
    <div onClick={selectedLetter}
      className={`key ${guessColor}`}
    //   id={bigKey ? "big" : disabled && "disabled"}
      id={bigKey ? "big"  : "disabled"}
    //   onClick={selectLetter}
    style={{
      transitionDelay: `${animationDuration}ms`
    }}
    >
      {keyVal} 
    </div>
  );
}