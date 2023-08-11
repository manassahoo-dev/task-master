import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { FloorPlan } from "./FloorPlan";

export const Implementation = () => {
  const colors = ["black", "green", "blue", "red", "yellow", "orange"];
  const [selectedColor, setSelectedColor] = useState("black");
  const [degree, setDegree] = useState(0);

  return (
    <div>
      <section className="container action">
        <button onClick={() => setDegree((degree) => (degree === 0 ? 180 : 0))}>
          Toggle Angle
        </button>

        <section className="flex">
          {colors.map((color) => (
            <ColorPicker
              color={color}
              selectedColor={selectedColor}
              key={color}
              handleClick={() => setSelectedColor(color)}
            />
          ))}
        </section>
      </section>
      <FloorPlan color={selectedColor} rotate={degree} />
    </div>
  );
};
