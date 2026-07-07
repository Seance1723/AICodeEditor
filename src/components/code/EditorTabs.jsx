import { X } from "lucide-react";

function EditorTabs({ files, selectedFileId, dirtyFileIds, dispatch }) {
  return (
    <div className="editor-tabs" role="tablist" aria-label="Open files">
      {files.map((file) => {
        const isActive = file.id === selectedFileId;
        const isDirty = dirtyFileIds.includes(file.id);

        return (
          <button
            className={isActive ? "editor-tab is-active" : "editor-tab"}
            type="button"
            role="tab"
            aria-selected={isActive}
            key={file.id}
            onClick={() => dispatch({ type: "SET_SELECTED_FILE", fileId: file.id })}
          >
            <span className={isDirty ? "dirty-dot" : "clean-dot"} aria-hidden="true" />
            <span className="editor-tab-name">{file.name}</span>
            {files.length > 1 ? (
              <span
                className="tab-close"
                role="button"
                tabIndex={0}
                aria-label={`Close ${file.name}`}
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch({ type: "CLOSE_FILE", fileId: file.id });
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    event.stopPropagation();
                    dispatch({ type: "CLOSE_FILE", fileId: file.id });
                  }
                }}
              >
                <X size={13} />
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export default EditorTabs;