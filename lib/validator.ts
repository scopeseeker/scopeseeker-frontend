function truncatedParagraph(paragraph: string):string {
  const truncatedText = paragraph.split(' ').slice(0, 15).join(' ');
  const displayText = `${truncatedText}...`;
  return displayText;
}

export default truncatedParagraph;
