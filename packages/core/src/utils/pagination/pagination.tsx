import { useEffect, useState } from "react";
interface Infor {
  size: number;
  perPage: number;
  current: number;
  buttonNumberDisplay: number;
}
export default function Pagination(props: {
  infor: Infor;
  setCurrent: (newCurrent: number) => void;
}) {
  const { infor, setCurrent } = props;
  const { size, perPage, current, buttonNumberDisplay } = infor;
  const [buttons, setButtons] = useState<number[]>([]);
  const [move, setMove] = useState<number>(0);
  useEffect(() => {
    const newButtonCount =
      size / perPage == 0 ? size / perPage : size / perPage + 1;

    const newButtons = Array.from(
      { length: newButtonCount },
      (_, index) => index + 1
    );
    setButtons(newButtons);
  }, [size, perPage]);

  const isCurrent = (index: number): string => {
    if (index == current) {
      return " bg-violet-500 text-red";
    }
    return " bg-white";
  };

  const moveRight = () => {
    if (move < buttons.length - buttonNumberDisplay) setMove(move + 1);
  };

  const moveLeft = () => {
    if (move > 0) setMove(move - 1);
  };

  return (
    <div className="my-2 flex gap-2 justify-end items-center">
      <button
        onClick={() => moveLeft()}
        className="font-medium shadow-sm py-1.5 px-3.5 bg-white text-gray-700 rounded-l-md border-2 hover:bg-violet-500"
      >
        Pre
      </button>

      {buttons.slice(move, move + buttonNumberDisplay).map((item) => (
        <button
          key={item}
          className={
            `font-medium shadow-sm py-1.5 px-3.5 text-gray-700 rounded-md border-2 hover:bg-violet-500` +
            isCurrent(item)
          }
          onClick={() => setCurrent(item)}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => moveRight()}
        className="font-medium shadow-sm py-1.5 px-3.5 bg-white text-gray-700 rounded-l-md border-2 hover:bg-violet-500"
      >
        Next
      </button>
    </div>
  );
}
