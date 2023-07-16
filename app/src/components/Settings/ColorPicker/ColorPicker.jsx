import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function ColorPicker({ pickedColor, changeColor }) {
  let [color, setColor] = useState(pickedColor);

  function handleState(newColor) {
    setColor(newColor)
    changeColor(newColor)
  }

  return (
    <div className="App">
      <HexColorPicker  color={color} onChange={handleState} />
    </div>
  );
}
