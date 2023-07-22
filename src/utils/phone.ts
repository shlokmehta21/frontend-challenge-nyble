// Only works for canadian/us phone numbers
export const maybeAddPrefix = (n: string) => {
  if (!n.startsWith('+')) {
    if (n.length == 10) {
      return `+1${n}`;
    } else if (n.length == 11) {
      return `+${n}`;
    }
  }
  return n;
};

// Only works for canadian/us phone numbers
export const prettyFormat = (n: string) => {
  const pn = maybeAddPrefix(n);
  if (pn.length == 12) {
    return `${pn.substr(0, 2)}(${pn.substr(2, 3)}) ${pn.substr(5, 3)}-${pn.substr(8)}`;
  }
  return pn;
};
