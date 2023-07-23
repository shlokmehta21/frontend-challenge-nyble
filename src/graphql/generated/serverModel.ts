export interface BankAccount {
  balance: number;
  currency: string;
  status: string;
}

export interface ErrorResponse {
  code: number;
  name: string;
  detail?: string;
  service?: string;
  flow?: string;
}

export interface RewardsAccount {
  bones: number;
}
