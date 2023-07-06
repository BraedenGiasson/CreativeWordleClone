import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function ColorPicker() {
  const [color, setColor] = useState("#b32aa9");

  return (
    <div className="App">
      <HexColorPicker color={color} onChange={setColor} />

      <div className="value" style={{ borderLeftColor: color }}>
        Current color is {color}
      </div>
    </div>
  );
}

// import React from 'react'
// import { SketchPicker } from 'react-color'
 
// class ColorPicker extends React.Component {
 
//   render() {
//     return <SketchPicker />
//   }
// }

// export default ColorPicker