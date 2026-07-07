import { Bot, SendHorizontal } from "lucide-react";

function InlineAgentPrompt({ dispatch }) {
  return (
    <form
      className="inline-agent-prompt"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const input = form.elements.namedItem("agentPrompt");
        const value = input.value.trim();

        if (!value) {
          dispatch({ type: "SHOW_TOAST", message: "Describe a change before sending it to the agent." });
          return;
        }

        dispatch({ type: "ADD_TERMINAL_LOG", message: `Agent prompt queued: ${value}`, logType: "success" });
        dispatch({ type: "SHOW_TOAST", message: "Agent prompt queued for the simulated workflow." });
        input.value = "";
      }}
    >
      <Bot size={17} />
      <input name="agentPrompt" type="text" placeholder="Ask an agent to edit, explain, or review the selected file..." />
      <button type="submit" aria-label="Send agent prompt">
        <SendHorizontal size={17} />
      </button>
    </form>
  );
}

export default InlineAgentPrompt;