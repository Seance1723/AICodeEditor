import { Circle, FileCode2, Folder } from "lucide-react";
import { mockFiles } from "../../data/mockFiles.js";

function FileTree({ state, dispatch }) {
  return (
    <div className="file-tree" aria-label="Project files">
      <div className="file-tree-root">
        <Folder size={16} />
        <span>{state.workspaceName === "No folder selected" ? state.projectTitle : state.workspaceName}</span>
      </div>
      <div className="file-tree-list">
        {mockFiles.map((file) => {
          const isActive = file.id === state.selectedFileId;
          const isDirty = state.dirtyFileIds.includes(file.id);

          return (
            <button
              className={isActive ? "file-tree-item is-active" : "file-tree-item"}
              type="button"
              key={file.id}
              onClick={() => dispatch({ type: "OPEN_FILE", fileId: file.id })}
            >
              <FileCode2 size={16} />
              <span>{file.path}</span>
              {isDirty ? <Circle className="dirty-indicator" size={8} fill="currentColor" /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FileTree;