import React, { FC, useRef } from "react";
import { DiffEditor } from "@monaco-editor/react";

export const DiffEditorApp: FC<{
  originalCode: string;
  modifiedCode: string;
  language: string;
}> = ({ modifiedCode, originalCode, language }) => {
  const diffEditorRef = useRef(null);

  function handleEditorDidMount(editor) {
    diffEditorRef.current = editor;
  }

  return (
    <DiffEditor
      className="w-full h-full"
      theme="vs-dark"
      language={language}
      options={{ minimap: { enabled: false } }}
      original={originalCode}
      modified={modifiedCode}
      onMount={handleEditorDidMount}
    />
  );
};
