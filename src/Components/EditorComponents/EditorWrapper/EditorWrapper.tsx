import React, { useState } from "react";
import { EditorState } from "draft-js";
// @ts-ignore
import { DraftailEditor } from "draftail";
import { blockTypes, inlineStyles, entityTypes } from "./data";

export const EditorWrapper = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <DraftailEditor
      editorState={editorState}
      onChange={setEditorState}
      blockTypes={blockTypes}
      inlineStyles={inlineStyles}
      entityTypes={entityTypes}
    />
  );
};
