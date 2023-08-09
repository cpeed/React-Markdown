import increaseHeight from "../assets/functions";

import { useRef, useEffect, useState } from "react";
export default function Previewer({ markDown, setShowEditor }) {
  const ref = useRef(null);
  const [isResized, setIsResized] = useState(true);

  useEffect(() => {
    ref.current.innerHTML = markDown;
  }, [markDown]);
  return (
    <>
      <div className="previewer-container">
        <div className="previewer-toolbar">
          <i className="fa fa-fire"> </i>
          <h3>Previewer</h3>
          <i
            onClick={() =>
              increaseHeight(isResized, setIsResized, setShowEditor, ref)
            }
            className="fa fa-arrows-alt"
            id="resize"
          ></i>
        </div>
        <div ref={ref} id="preview"></div>
      </div>
    </>
  );
}
