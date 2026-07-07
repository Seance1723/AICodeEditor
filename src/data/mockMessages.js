export const initialChatMessages = [
  {
    id: "msg-hello",
    role: "assistant",
    author: "Tri Studio",
    text: "Share the project goal, upload references, or sketch a plan here. Preview stays hidden in Chat mode.",
    time: "09:00",
  },
  {
    id: "msg-plan",
    role: "user",
    author: "You",
    text: "Prepare the editor shell with Monaco as the base code surface.",
    time: "09:02",
  },
];

export const chatSessions = [
  { id: "current", name: "Tri Studio plan", detail: "Active" },
  { id: "ux", name: "Editor UX notes", detail: "Draft" },
  { id: "agents", name: "Agent workflow", detail: "Later" },
];