export const minutesBetween = (d1: Date, d2: Date) => {
  return Math.abs(d1.getTime() - d2.getTime()) / 1000 / 60;
};

export const hoursBetween = (d1: Date, d2: Date) => {
  return Math.abs(d1.getTime() - d2.getTime()) / 1000 / 3600;
};

export const daysBetween = (d1: Date, d2: Date) => {
  return Math.abs(d1.getTime() - d2.getTime()) / 1000 / 3600 / 24;
};

export const yearsBetween = (d1: Date, d2: Date) => {
  return daysBetween(d1, d2) / 365;
};

export const weekdayDateFilterFunction = (date: Date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
