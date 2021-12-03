import React, { useState } from "react";
import { Button } from "../components/Button";
import { DiffEditorApp } from "../components/DiffEditor";
import { TextEditor } from "../components/TextEditor";
import { languages } from "../data/languages";

function Index() {
  const [originalText, setOriginalText] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border-0 px-2 py-1 bg-gray-800 text-white font-medium focus:outline-none focus:ring-2 hover:ring-2 ring-white smooth shadow-s hover:shadow-m"
      >
        <option value="">--Select--</option>
        {languages.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <div className="flex justify-center w-full h-96 space-x-4">
        <TextEditor
          onChange={(text) => setOriginalText(text)}
          language={language}
        />
        <TextEditor
          onChange={(text) => setModifiedText(text)}
          language={language}
        />
      </div>
      <div>
        <Button onClick={() => setShow((prev) => !prev)}>Show Diff</Button>
      </div>
      {show && (
        <div className="flex items-center justify-center w-full h-96">
          <DiffEditorApp
            language={language}
            originalCode={originalText}
            modifiedCode={modifiedText}
          />
        </div>
      )}
    </div>
  );
}

export default Index;
