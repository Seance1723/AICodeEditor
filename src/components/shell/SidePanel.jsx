import ChatSidePanel from "../chat/ChatSidePanel.jsx";
import CodeSidePanel from "../code/CodeSidePanel.jsx";
import PreviewSidePanel from "../preview/PreviewSidePanel.jsx";

function SidePanel({ state, dispatch }) {
  if (state.currentView === "chat") {
    return <ChatSidePanel state={state} dispatch={dispatch} />;
  }

  if (state.currentView === "preview") {
    return <PreviewSidePanel state={state} dispatch={dispatch} />;
  }

  return <CodeSidePanel state={state} dispatch={dispatch} />;
}

export default SidePanel;