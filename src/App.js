import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { useState } from "react";
export default function App() {
  const [markDown, setMarkDown] = useState(null);
  const [showEditor, setShowEditor] = useState(true); // State to control Editor visibility
  const [showPreviewer, setShowPreviewer] = useState(true);
  return (
    <div className="App">
      {showEditor && (
        <Editor setMarkDown={setMarkDown} setShowPreviewer={setShowPreviewer} />
      )}
      {showPreviewer && (
        <Previewer markDown={markDown} setShowEditor={setShowEditor} />
      )}
    </div>
  );
}
