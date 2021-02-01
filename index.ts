import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";

const langs = {
  python,
  sql,
};

function createEditor(lang, doc = "") {
  const langExt = langs[lang];
  const initialState = EditorState.create({
    doc,
    extensions: [basicSetup, langExt()],
  });

  const view = new EditorView({
    parent: document.getElementById(`editor-${lang}`),
    state: initialState,
  });
}

createEditor("python");
createEditor("sql", "SELECT 'sql';");
