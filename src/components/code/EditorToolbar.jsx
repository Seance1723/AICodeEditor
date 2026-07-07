import { FileCode2, RotateCcw, WrapText } from "lucide-react";

function EditorToolbar({ file, isDirty, dispatch }) {
  return (
    <div className="editor-toolbar">
      <div className="editor-file-meta">
        <FileCode2 size={16} />
        <span>{file.path}</span>
        {isDirty ? <strong>Unsaved prototype change</strong> : <strong>Clean</strong>}
      </div>
      <div className="editor-toolbar-actions">
        <button
          className="quiet-action"
          type="button"
          onClick={() => dispatch({ type: "SHOW_TOAST", message: "Word wrap is enabled for the Monaco prototype." })}
        >
          <WrapText size={16} />
          <span>Wrap on</span>
        </button>
        <button
          className="quiet-action"
          type="button"
          disabled={!isDirty}
          onClick={() => dispatch({ type: "RESET_EDITOR_VALUE", fileId: file.id })}
        >
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}

export default EditorToolbar;