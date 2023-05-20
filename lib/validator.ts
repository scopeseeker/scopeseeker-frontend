function truncatedParagraph(paragraph: string, length: number = 15): string {
  const truncatedText = paragraph.split(' ').slice(0, length).join(' ');
  const displayText = `${truncatedText}...`;
  return displayText;
}

export default truncatedParagraph;

// function truncatedParagraph(paragraph: string, length: number = 100) {
//   if (paragraph.length <= length) {
//     return paragraph;
//   } else {
//     const truncatedText = paragraph.slice(0, length);
//     const displayText = `${truncatedText}...`;
//     return displayText;
//   }
// }

// export default truncatedParagraph;
