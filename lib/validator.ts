function truncatedParagraph(paragraph: string, length: number = 15): string {
  const truncatedText = paragraph.split(' ').slice(0, length).join(' ');
  const displayText = `${truncatedText}...`;
  return displayText;
}

export default truncatedParagraph;
