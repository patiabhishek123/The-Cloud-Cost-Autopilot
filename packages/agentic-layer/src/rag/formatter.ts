export function formatDocs(kbResponse: any): string {
  if (!kbResponse?.results || kbResponse.results.length === 0) {
    return "";
  }

  return kbResponse.results
    .map((doc: any, index: number) => {
      const content = doc.text_content || "";

      if (!content) return "";

      const source = doc.metadata?.item_name || "DigitalOcean Docs";

      return `DOC ${index + 1}:
Source: ${source}

${content.slice(0, 700)}`;
    })
    .filter(Boolean)
    .join("\n\n");
}
