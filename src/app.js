import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Font,
  Code,
  Paragraph,
  Markdown,
  Autoformat,
  CodeBlock,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import "./style.css";

export async function createEditor(parentElement) {
  const editorRoot = document.createElement("div");
  editorRoot.setAttribute("id", "ckeditor-chat-root");

  parentElement.append(editorRoot);

  return ClassicEditor.create(editorRoot, {
    plugins: [
      Markdown,
      Essentials,
      Bold,
      Italic,
      Code,
      Font,
      Paragraph,
      Autoformat,
      CodeBlock,
    ],
    toolbar: ["bold", "italic", "code", "codeBlock"],
  }).then((editor) => {
    return editor;
  });
}
