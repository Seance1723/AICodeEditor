export const mockFiles = [
  {
    id: "app",
    name: "App.jsx",
    path: "src/App.jsx",
    language: "javascript",
    value: `import { useState } from "react";
import { Sparkles } from "lucide-react";

function App() {
  const [mode, setMode] = useState("chat");

  return (
    <main className="tri-studio">
      <header>
        <Sparkles size={18} />
        <h1>Tri Studio</h1>
      </header>
      <button onClick={() => setMode("code")}>Open Code</button>
      <p>Current mode: {mode}</p>
    </main>
  );
}

export default App;
`,
  },
  {
    id: "main-style",
    name: "main.scss",
    path: "src/styles/main.scss",
    language: "scss",
    value: `@use "tokens";
@use "layout";
@use "components";

.tri-studio {
  min-height: 100vh;
  color: var(--text);
  background: var(--bg);
}

button {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
}
`,
  },
  {
    id: "agents",
    name: "mockAgents.js",
    path: "src/data/mockAgents.js",
    language: "javascript",
    value: `export const agents = [
  {
    id: "ui-builder",
    name: "UI Builder",
    status: "coding",
    progress: 64,
  },
  {
    id: "qa-tester",
    name: "QA Tester",
    status: "testing",
    progress: 38,
  },
];
`,
  },
  {
    id: "readme",
    name: "README.md",
    path: "README.md",
    language: "markdown",
    value: `# Tri Studio

Tri Studio is a light-mode AI-native code editor prototype.

- Chat is for thinking.
- Code is for building.
- Preview is for reviewing.
`,
  },
];

export function getMockFile(fileId) {
  return mockFiles.find((file) => file.id === fileId) ?? mockFiles[0];
}

export function createInitialEditorValues() {
  return Object.fromEntries(mockFiles.map((file) => [file.id, file.value]));
}