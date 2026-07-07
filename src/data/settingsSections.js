export const settingsGroups = [
  {
    id: "general",
    label: "General",
    sections: [
      {
        id: "appearance",
        label: "Appearance",
        description: "Theme, interface density, font size, motion, and notification preferences.",
        icon: "palette",
        rows: ["Theme", "Density", "Font size", "Reduce motion", "Notifications"],
      },
      {
        id: "editor",
        label: "Editor",
        description: "Monaco editor typography, indentation, wrapping, and minimap preferences.",
        icon: "monitor",
        rows: ["Monaco font size", "Font family", "Tab size", "Word wrap", "Minimap"],
      },
      {
        id: "privacy",
        label: "Privacy",
        description: "Local telemetry and crash-report controls for the prototype.",
        icon: "shield",
        rows: ["Enable telemetry", "Send crash reports"],
      },
    ],
  },
  {
    id: "ai",
    label: "AI",
    sections: [
      {
        id: "modelProviders",
        label: "Model Providers",
        description: "Connected providers, routing roles, fallback chains, usage, and cost controls.",
        icon: "bot",
        rows: ["Provider keys", "Connected badge", "Role assignment", "Quota and cost", "Add model", "Fallback chains", "Cost caps", "Token usage"],
      },
      {
        id: "agents",
        label: "Agents",
        description: "Agent types, system prompts, tool permissions, and token budgets.",
        icon: "sliders",
        rows: ["Agent types", "System prompts", "Tool permissions", "Token budgets"],
      },
    ],
  },
  {
    id: "execution",
    label: "Execution",
    sections: [
      {
        id: "tasksExecution",
        label: "Tasks & Execution",
        description: "Parallelism, deadlines, approval gates, quality gating, and retry behavior.",
        icon: "timer",
        rows: ["Parallelism", "Deadlines and timeouts", "Approval gates", "Quality gating", "Retry policy"],
      },
      {
        id: "toolsMemory",
        label: "Tools & Memory",
        description: "Network access, tool registry, long-term memory, retention, and knowledge base.",
        icon: "wrench",
        rows: ["Network allowlist", "Tool registry", "Long-term memory", "Retention period", "Knowledge base"],
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    sections: [
      {
        id: "secretsPrivacy",
        label: "Secrets & Privacy",
        description: "Write-only credentials, provider secret status, storage backend, and data retention.",
        icon: "key",
        rows: ["Storage backend", "Provider secret status", "Add key", "Rotate key", "Delete key", "Data retention"],
      },
    ],
  },
  {
    id: "workspace",
    label: "Workspace",
    sections: [
      {
        id: "extensions",
        label: "Extensions",
        description: "TRI plugins, VS Code Marketplace search, compatibility, audit log, and MCP servers.",
        icon: "puzzle",
        rows: ["Suggested TRI plugins", "VS Code Marketplace", "Compatibility dashboard", "Installed extensions", "TRI plugins", "Plugin audit log", "MCP servers"],
      },
      {
        id: "onboarding",
        label: "Onboarding",
        description: "Restart the first-run setup flow when the workspace needs a fresh start.",
        icon: "compass",
        rows: ["Re-run onboarding"],
      },
    ],
  },
];

export const settingsSections = settingsGroups.flatMap((group) =>
  group.sections.map((section) => ({
    ...section,
    groupId: group.id,
    groupLabel: group.label,
  })),
);

export function getSettingsSection(sectionId) {
  return settingsSections.find((section) => section.id === sectionId) ?? settingsSections[0];
}

export function filterSettingsGroups(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return settingsGroups;
  }

  return settingsGroups
    .map((group) => {
      const groupMatches = group.label.toLowerCase().includes(normalizedQuery);
      const sections = group.sections.filter((section) => {
        const haystack = [section.label, section.description, ...section.rows].join(" ").toLowerCase();
        return groupMatches || haystack.includes(normalizedQuery);
      });

      return { ...group, sections };
    })
    .filter((group) => group.sections.length > 0);
}

export function flattenSettingsGroups(groups) {
  return groups.flatMap((group) =>
    group.sections.map((section) => ({
      ...section,
      groupId: group.id,
      groupLabel: group.label,
    })),
  );
}