import { EmailRegex, UUIDRegex, CurrencyRegex } from './RegularExpressions';

export const validateEmail = (input: string): Boolean => {
  if (EmailRegex.test(input)) return true;
  else return false;
};

export const validateUUID = (input: string): Boolean => {
  if (UUIDRegex.test(input)) return true;
};

export const validateCurrency = (input: string): Boolean => {
  if (CurrencyRegex.test(input)) return true;
  else return false;
};
