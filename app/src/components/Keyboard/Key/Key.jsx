import { useContext } from "react";
import './Key.css'

export default function Key({ keyVal, bigKey }) {

//   const selectLetter = () => {
//     if (gameOver.gameOver) return;
//     if (keyVal === "ENTER") {
//       onEnter();
//     } else if (keyVal === "DELETE") {
//       onDelete();
//     } else {
//       onSelectLetter(keyVal);
//     }
//   };

  return (
    <div
      className="key"
    //   id={bigKey ? "big" : disabled && "disabled"}
      id={bigKey ? "big"  : "disabled"}
    //   onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}