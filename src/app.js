import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Font,
  Paragraph,
  Markdown,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import "./style.css";

createEditor(document.querySelector("#ckeditor-root"));

function createEditor(parentElement) {
  const editorRoot = document.createElement("div");
  editorRoot.setAttribute("id", "ckeditor-chat-root");

  parentElement.append(editorRoot);

  return ClassicEditor.create(editorRoot, {
    plugins: [Markdown, Essentials, Bold, Italic, Font, Paragraph],
    toolbar: ["bold", "italic"],
  }).then((editor) => {
    return editor;
  });
}
