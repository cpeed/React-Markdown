import { marked } from "marked";
import { useEffect, useRef, useState } from "react";
import texts from "../assets/input.json";
import increaseHeight from "../assets/functions";

function toMarkDown(text) {
  marked.setOptions({
    breaks: true
  })
  return marked.parse(text);
}
export default function Editor({ setMarkDown, setShowPreviewer }) {
  const ref = useRef(null);
  const [isResized, setIsResized] = useState(true);

  useEffect(() => {
    setMarkDown(toMarkDown(ref.current.value));
  }, []);

  return (
    <>
      <div className="editor-container">
        <div className="editor-toolbar">
          <i className="fa fa-fire"> </i>
          <h3>Editor</h3>
          <i
            onClick={() =>
              increaseHeight(isResized, setIsResized, setShowPreviewer, ref)
            }
            className="fa fa-arrows-alt"
            id="resize"
          >
            {" "}
          </i>
        </div>
        <textarea
          ref={ref}
          onChange={(e) => setMarkDown(toMarkDown(e.currentTarget.value))}
          id="editor"
        >
          {texts.text}
        </textarea>
      </div>
    </>
  );
}
