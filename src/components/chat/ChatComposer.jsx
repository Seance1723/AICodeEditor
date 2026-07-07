import { Paperclip, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { fileListToUploads } from "../../utils/fileUtils.js";

function ChatComposer({ dispatch }) {
  const [message, setMessage] = useState("");

  const handleAttachment = (event) => {
    const uploads = fileListToUploads(event.target.files, "chat-attach");
    if (uploads.length) {
      dispatch({ type: "ADD_CHAT_UPLOADS", uploads, toast: `${uploads.length} file${uploads.length === 1 ? "" : "s"} attached to chat.` });
    }
    event.target.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = message.trim();

    if (!trimmed) {
      dispatch({ type: "SHOW_TOAST", message: "Type a message before sending." });
      return;
    }

    dispatch({ type: "ADD_CHAT_MESSAGE", text: trimmed });
    setMessage("");
  };

  return (
    <form className="chat-composer" onSubmit={handleSubmit}>
      <label className="composer-icon-button" title="Attach files" aria-label="Attach files">
        <Paperclip size={18} />
        <input type="file" multiple onChange={handleAttachment} />
      </label>
      <textarea
        value={message}
        rows={1}
        placeholder="Ask Tri Studio to plan, explain, or prepare the next coding step..."
        onChange={(event) => setMessage(event.target.value)}
      />
      <button className="composer-send" type="submit" aria-label="Send message">
        <SendHorizontal size={18} />
      </button>
    </form>
  );
}

export default ChatComposer;