import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { python } from "@codemirror/lang-python";

const initialState = EditorState.create({
  doc: "",
  extensions: [basicSetup, python()],
});

const view = new EditorView({
  parent: document.getElementById("editor"),
  state: initialState,
});
