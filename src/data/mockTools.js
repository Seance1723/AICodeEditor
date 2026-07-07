import { Database, Eye, GitPullRequest, PenTool, Server } from "lucide-react";

export const mockTools = [
  { id: "browser-preview", name: "Browser Preview", detail: "Inspect local UI", icon: Eye },
  { id: "figma-import", name: "Figma Import", detail: "Bring in design context", icon: PenTool },
  { id: "database-viewer", name: "Database Viewer", detail: "Review app data", icon: Database },
  { id: "github-pr", name: "GitHub PR", detail: "Prepare review flow", icon: GitPullRequest },
  { id: "mcp-servers", name: "MCP Servers", detail: "Connect external tools", icon: Server },
];