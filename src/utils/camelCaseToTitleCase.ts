export function camelCaseToTitleCase(str: string): string {
  // Split the string into words based on camelCase
  const words: string[] = str.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');

  // Capitalize the first letter of each word
  const titleCaseWords: string[] = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back together with spaces
  return titleCaseWords.join(' ');
}
