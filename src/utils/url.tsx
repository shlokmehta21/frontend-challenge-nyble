export const getSearchParams = (search: string) =>
  search
    .slice(1)
    .split('&')
    .reduce((acc: any, curr) => {
      const kv = curr.split('=');
      acc[kv[0]] = kv[1];
      return acc;
    }, {});
