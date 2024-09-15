import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Font,
  Paragraph,
  Markdown,
} from "ckeditor5";

createEditor(document.querySelector("#ckeditor-root"));

function createEditor(parentElement) {
  const editorRoot = document.createElement("div");
  editorRoot.setAttribute("id", "ckeditor-chat-root");

  parentElement.append(editorRoot);

  ClassicEditor.create(editorRoot, {
    plugins: [Markdown, Essentials, Bold, Italic, Font, Paragraph],
    toolbar: ["bold", "italic"],
  }).then((editor) => {
    const submitButton = document.querySelector("#button-submit");
    if (submitButton) {
      submitButton.addEventListener("click", () => {
        const output = editor.getData();
      });
    }
  });
}
