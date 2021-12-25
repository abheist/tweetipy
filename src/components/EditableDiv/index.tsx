import React from "react";

export default function EditableDiv({ sizes }: any) {
  return (
    <div
      style={{
        minHeight: sizes.minHeight,
        minWidth: sizes.minWidth,
        maxWidth: sizes.maxWidth,
        padding: "16px",
      }}
      contentEditable="true"
      data-placeholder="Edit me"
    >
      Hello what are you doing?
    </div>
  );
}
