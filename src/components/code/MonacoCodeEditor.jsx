import Editor from "@monaco-editor/react";
import { monacoEditorOptions } from "../../editor/monacoConfig.js";
import { defineTriStudioTheme, triStudioThemeName } from "../../editor/monacoTheme.js";
import { getLanguageForFile } from "../../editor/languageUtils.js";

function MonacoCodeEditor({ file, value, onChange }) {
  const language = getLanguageForFile(file);

  return (
    <div className="monaco-editor-shell" aria-label={`${file.name} editor`}>
      <Editor
        key={file.id}
        path={file.path}
        defaultLanguage={language}
        language={language}
        value={value}
        theme={triStudioThemeName}
        beforeMount={defineTriStudioTheme}
        onChange={(nextValue) => onChange(nextValue ?? "")}
        options={monacoEditorOptions}
      />
    </div>
  );
}

export default MonacoCodeEditor;