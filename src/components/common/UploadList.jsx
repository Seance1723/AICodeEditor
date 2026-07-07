import { FileText } from "lucide-react";
import { formatFileSize } from "../../utils/fileUtils.js";

function UploadList({ files, emptyText = "No files selected yet." }) {
  if (!files.length) {
    return <div className="empty-line">{emptyText}</div>;
  }

  const visibleFiles = files.slice(0, 6);
  const hiddenCount = files.length - visibleFiles.length;

  return (
    <div className="upload-list" aria-label="Uploaded files">
      {visibleFiles.map((file) => (
        <div className="upload-list-item" key={file.id}>
          <FileText size={15} />
          <span>{file.name}</span>
          <strong>{formatFileSize(file.sizeKb)}</strong>
        </div>
      ))}
      {hiddenCount > 0 ? <div className="upload-more">+{hiddenCount} more files selected</div> : null}
    </div>
  );
}

export default UploadList;