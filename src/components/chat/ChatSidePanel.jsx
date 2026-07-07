import { MessageSquare, Upload } from "lucide-react";
import { chatSessions } from "../../data/mockMessages.js";
import { fileListToUploads } from "../../utils/fileUtils.js";
import UploadList from "../common/UploadList.jsx";

function ChatSidePanel({ state, dispatch }) {
  const handleUpload = (event) => {
    const uploads = fileListToUploads(event.target.files, "chat-upload");
    if (uploads.length) {
      dispatch({ type: "ADD_CHAT_UPLOADS", uploads });
    }
    event.target.value = "";
  };

  return (
    <aside className="side-panel chat-side-panel">
      <p className="panel-label">Chat</p>
      <h1>Planning space</h1>
      <div className="panel-stack">
        {chatSessions.map((session) => (
          <button className={session.id === "current" ? "mini-list-item is-active" : "mini-list-item"} type="button" key={session.id}>
            <MessageSquare size={16} />
            <span>{session.name}</span>
            <strong>{session.detail}</strong>
          </button>
        ))}
      </div>

      <label className="upload-zone">
        <Upload size={18} />
        <span>Upload to Chat</span>
        <small>References, screenshots, specs</small>
        <input type="file" multiple onChange={handleUpload} />
      </label>

      <section className="side-section">
        <p className="panel-label">Uploaded files</p>
        <UploadList files={state.chatUploads} emptyText="No chat uploads yet." />
      </section>
    </aside>
  );
}

export default ChatSidePanel;