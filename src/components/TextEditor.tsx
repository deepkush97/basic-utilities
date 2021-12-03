import Editor from "@monaco-editor/react";
import React, { FC, useRef } from "react";

export const TextEditor: FC<{ onChange?: (text) => void; language: string }> =
  ({ onChange, language }) => {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
      editorRef.current = editor;
    };

    return (
      <div className="flex flex-col w-full space-y-2">
        <Editor
          className="flex-grow "
          theme="vs-dark"
          language={language}
          options={{ minimap: { enabled: false }, contextmenu: false }}
          onMount={handleEditorDidMount}
          onChange={onChange}
        />
      </div>
    );
  };
