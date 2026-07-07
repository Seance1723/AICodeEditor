export const triStudioThemeName = "tri-studio-light";

export function defineTriStudioTheme(monaco) {
  monaco.editor.defineTheme(triStudioThemeName, {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "667085" },
      { token: "keyword", foreground: "6458ee", fontStyle: "bold" },
      { token: "string", foreground: "147d64" },
      { token: "number", foreground: "b45309" },
      { token: "type.identifier", foreground: "1aa7ec" },
    ],
    colors: {
      "editor.background": "#fbfdff",
      "editor.foreground": "#172033",
      "editorLineNumber.foreground": "#98a2b3",
      "editorLineNumber.activeForeground": "#6458ee",
      "editor.selectionBackground": "#dfe7ff",
      "editor.inactiveSelectionBackground": "#edf2ff",
      "editor.lineHighlightBackground": "#f3f6fb",
      "editorCursor.foreground": "#6458ee",
      "editorIndentGuide.background1": "#dce3ee",
      "editorIndentGuide.activeBackground1": "#c9d4e5",
      "scrollbarSlider.background": "#c9d4e580",
      "scrollbarSlider.hoverBackground": "#98a2b380",
    },
  });
}