function truncatedParagraph(paragraph:string, length = 15) {
  const words = paragraph.split(' ');
  
  if (words.length <= length) {
    return paragraph;
  } else {
    const truncatedText = words.slice(0, length).join(' ');
    return `${truncatedText}...`;
  }
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
