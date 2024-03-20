import { MouseEventHandler, useState } from "react";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
};
