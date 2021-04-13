import React from "react";

type Props = {
  words: string[];
  isInputCorrect: boolean;
};

const WordContainer: React.FC<Props> = (props) => {
  return (
    <div className="max-h-32 overflow-hidden border-indigo-300 border-4 p-3 lg:p-4 leading-9 md:leading-[3rem]">
      <span
        className={`font-medium text-2xl md:text-3xl lg:text-4xl ${
          props.isInputCorrect ? "bg-indigo-300" : "bg-red-500"
        } rounded-md text-gray-900 px-1`}
      >
        {props.words ? props.words[0] : "asdf"}
      </span>
      {props.words
        ? props.words.slice(1).map((word, index) => (
            <span
              className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-900 px-1"
              key={index}
            >
              {word}{" "}
            </span>
          ))
        : "ere"}
    </div>
  );
};

export default WordContainer;
