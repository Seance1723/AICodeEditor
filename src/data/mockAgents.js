export const mockAgents = [
  {
    id: "ui-builder",
    name: "UI Builder",
    status: "coding",
    label: "Coding",
    workspace: "src/App.jsx",
    description: "Refining the code workspace surface and wiring UI actions.",
    progress: 64,
    actionLabel: "Inspect",
  },
  {
    id: "qa-tester",
    name: "QA Tester",
    status: "testing",
    label: "Testing",
    workspace: "Chat -> Code -> Preview",
    description: "Checking workspace transitions and visible shell states.",
    progress: 38,
    actionLabel: "View logs",
  },
  {
    id: "security-review",
    name: "Security Review",
    status: "waiting",
    label: "Waiting",
    workspace: "Approvals",
    description: "Waiting for final diff before approving simulated writes.",
    progress: 8,
    actionLabel: "Review",
  },
];

export const managerAgents = [
  ...mockAgents,
  {
    id: "approval-needed",
    name: "Approval Needed",
    status: "review",
    label: "Review",
    workspace: "Safe approval",
    description: "Agent changes require approval before file writes or shell actions.",
    progress: 72,
    actionLabel: "Approve later",
  },
];