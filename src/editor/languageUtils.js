const extensionLanguageMap = {
  css: "css",
  html: "html",
  js: "javascript",
  jsx: "javascript",
  json: "json",
  md: "markdown",
  scss: "scss",
  ts: "typescript",
  tsx: "typescript",
};

export function getLanguageForFile(file) {
  if (file?.language) return file.language;
  const extension = file?.name?.split(".").pop()?.toLowerCase();
  return extensionLanguageMap[extension] ?? "plaintext";
}