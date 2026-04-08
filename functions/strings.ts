export function toStartCase(str: string) {
  const _str = str.trim();
  if (_str.length === 0) return "";
  return _str.charAt(0).toUpperCase() + _str.slice(1).toLowerCase();
}

export function toTitleCase(str: string, excludeMinorWords: boolean = false) {
  const _str = str.trim();
  if (_str.length === 0) return "";

  // prettier-ignore
  const minorWords = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of', 'in', 'with']);
  
  let strArr = str
    .toLowerCase()
    .split(" ")
    .filter((word) => word.length > 0);

  if (excludeMinorWords) {
    strArr = strArr.map((word, index, array) => {
      // Always capitalize the first and last word, otherwise check if it's a minor word
      const isFirst = index === 0;
      const isLast = index === array.length - 1;
      const isMinor = minorWords.has(word);

      if (!isFirst && !isLast && isMinor) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  } else {
    strArr = strArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  }

  return strArr.join("");
}
