export const lowercaseFirstLetter = (s: string) => {
  return `${s[0].toLowerCase()}${s.slice(1)}`;
};

export const uppercaseFirstLetter = (s: string) => {
  return `${s[0].toUpperCase()}${s.slice(1)}`;
};
