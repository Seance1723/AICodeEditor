import { FolderOpen, Plus, Upload } from "lucide-react";
import { fileListToUploads, inferFolderNameFromFileList } from "../../utils/fileUtils.js";

function ProjectActions({ dispatch }) {
  const handleFolderSelect = (event) => {
    const folderName = inferFolderNameFromFileList(event.target.files);

    if (folderName) {
      dispatch({ type: "SET_WORKSPACE", name: folderName, status: `Local folder selected: ${folderName}` });
    } else {
      dispatch({ type: "SHOW_TOAST", message: "Select a folder with files to infer the workspace name." });
    }

    event.target.value = "";
  };

  const handleCodeUpload = (event) => {
    const uploads = fileListToUploads(event.target.files, "code-upload");

    if (uploads.length) {
      dispatch({ type: "ADD_CODE_UPLOADS", uploads });
    }

    event.target.value = "";
  };

  return (
    <div className="project-actions">
      <button className="quiet-action" type="button" onClick={() => dispatch({ type: "CREATE_PROJECT" })}>
        <Plus size={16} />
        <span>Create project</span>
      </button>

      <label className="quiet-action file-action">
        <FolderOpen size={16} />
        <span>Select local folder</span>
        <input type="file" webkitdirectory="true" directory="true" multiple onChange={handleFolderSelect} />
      </label>

      <label className="quiet-action file-action">
        <Upload size={16} />
        <span>Upload to code</span>
        <input type="file" multiple onChange={handleCodeUpload} />
      </label>
    </div>
  );
}

export default ProjectActions;