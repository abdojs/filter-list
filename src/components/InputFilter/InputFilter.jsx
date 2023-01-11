import React, { useRef } from "react";

const InputFilter = ({filterCard}) => {
  const text = useRef(null);
  return (
    <div>
      <div className="container">
        <div>
          <input
            onChange={() => filterCard(text.current.value)}
            ref={text}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default InputFilter;
