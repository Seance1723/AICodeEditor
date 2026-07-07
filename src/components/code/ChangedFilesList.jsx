import { Circle } from "lucide-react";
import { mockFiles } from "../../data/mockFiles.js";

function ChangedFilesList({ state, dispatch }) {
  const dirtyFiles = mockFiles.filter((file) => state.dirtyFileIds.includes(file.id));

  if (!dirtyFiles.length) {
    return <div className="empty-line">No changed files yet.</div>;
  }

  return (
    <div className="changed-files-list" aria-label="Changed files">
      {dirtyFiles.map((file) => (
        <button className="mini-list-item" type="button" key={file.id} onClick={() => dispatch({ type: "OPEN_FILE", fileId: file.id })}>
          <Circle className="dirty-indicator" size={8} fill="currentColor" />
          <span>{file.path}</span>
        </button>
      ))}
    </div>
  );
}

export default ChangedFilesList;