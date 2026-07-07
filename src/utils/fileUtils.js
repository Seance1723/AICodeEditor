export function fileListToUploads(fileList, source = "upload") {
  return Array.from(fileList ?? []).map((file, index) => ({
    id: `${source}-${Date.now()}-${index}-${file.name}`,
    name: file.name,
    sizeKb: Math.max(1, Math.round(file.size / 1024)),
    type: file.type || "unknown",
  }));
}

export function formatFileSize(sizeKb) {
  if (sizeKb >= 1024) return `${(sizeKb / 1024).toFixed(1)} MB`;
  return `${sizeKb} KB`;
}