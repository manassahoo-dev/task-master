import { MouseEventHandler } from "react";

export const ColorPicker = ({
  color,
  selectedColor,
  handleClick,
}: {
  color: string;
  selectedColor: string;
  handleClick: MouseEventHandler;
}) => {
  return (
    <div
      className="color-picker"
      style={{
        backgroundColor: color,
        opacity: color === selectedColor ? 1 : 0.25,
      }}
      title={color}
      onClick={handleClick}
    ></div>
  );
};
