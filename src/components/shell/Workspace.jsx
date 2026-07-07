import ChatWorkspace from "../chat/ChatWorkspace.jsx";
import CodeWorkspace from "../code/CodeWorkspace.jsx";
import PreviewWorkspace from "../preview/PreviewWorkspace.jsx";

function Workspace({ state, dispatch }) {
  if (state.currentView === "chat") {
    return <ChatWorkspace state={state} dispatch={dispatch} />;
  }

  if (state.currentView === "preview") {
    return <PreviewWorkspace state={state} dispatch={dispatch} />;
  }

  return <CodeWorkspace state={state} dispatch={dispatch} />;
}

export default Workspace;