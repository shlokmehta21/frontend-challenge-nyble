export const UserStatus = {
  VERIFIED: 'VERIFIED' as 'VERIFIED',
  HOLD: 'HOLD' as 'HOLD',
  FROZEN: 'FROZEN' as 'FROZEN',
  ADMIN: 'ADMIN' as 'ADMIN',
  DEACTIVATED: 'DEACTIVATED' as 'DEACTIVATED',
  DEMO: 'DEMO' as 'DEMO',
};
export type UserStatusType = typeof UserStatus;

export const CustomerAccountType = {
  EARLY_PAYROLL: 'EARLY_PAYROLL' as 'EARLY_PAYROLL',
  SUBSCRIPTION: 'SUBSCRIPTION' as 'SUBSCRIPTION',
  THREE_DS: 'THREE_DS' as 'THREE_DS',
};
export type CustomerAccountTypeType = typeof CustomerAccountType;

export const PaymentStatus = {
  SCHEDULED: 'SCHEDULED' as 'SCHEDULED',
  PENDING: 'PENDING' as 'PENDING',
  SENT: 'SENT' as 'SENT',
  PAID: 'PAID' as 'PAID',
  FAILED: 'FAILED' as 'FAILED',
  CANCELLED: 'CANCELLED' as 'CANCELLED',
};
export type PaymentStatusType = typeof PaymentStatus;

export const PaymentType = {
  INITIAL: 'INITIAL' as 'INITIAL',
  RECURRING: 'RECURRING' as 'RECURRING',
  SINGLE: 'SINGLE' as 'SINGLE',
  EARLY_PAYROLL: 'EARLY_PAYROLL' as 'EARLY_PAYROLL',
  SUBSCRIPTION: 'SUBSCRIPTION' as 'SUBSCRIPTION',
  SUBSCRIPTION_UPGRADE: 'SUBSCRIPTION_UPGRADE' as 'SUBSCRIPTION_UPGRADE',
};
export type PaymentTypeType = typeof PaymentType;

export const PaymentMethodType = {
  EFT: 'EFT' as 'EFT',
  VISA_DEBIT: 'VISA_DEBIT' as 'VISA_DEBIT',
  CARD: 'CARD' as 'CARD',
  INTERAC: 'INTERAC' as 'INTERAC',
  BANK_ACC: 'BANK_ACC' as 'BANK_ACC',
};
export type PaymentMethodTypeType = typeof PaymentMethodType;

export const PaymentProvider = {
  ZUMRAILS: 'ZUMRAILS' as 'ZUMRAILS',
  STRIPE: 'STRIPE' as 'STRIPE',
  VOPAY: 'VOPAY' as 'VOPAY',
  BERKELEY: 'BERKELEY' as 'BERKELEY',
  DCB: 'DCB' as 'DCB',
};
export type PaymentProviderType = typeof PaymentProvider;

export const PaymentMethodStatus = {
  VALID: 'VALID' as 'VALID',
  INVALID: 'INVALID' as 'INVALID',
  REMOVED: 'REMOVED' as 'REMOVED',
  PENDING: 'PENDING' as 'PENDING',
  VALIDATING: 'VALIDATING' as 'VALIDATING',
};
export type PaymentMethodStatusType = typeof PaymentMethodStatus;

export const EPAdvanceOption = {
  EXPRESS: 'EXPRESS' as 'EXPRESS',
  REGULAR: 'REGULAR' as 'REGULAR',
};
export type EPAdvanceOptionType = typeof EPAdvanceOption;

export const EPAdvanceStatus = {
  INITIAL: 'INITIAL' as 'INITIAL',
  ADVANCE_SENT: 'ADVANCE_SENT' as 'ADVANCE_SENT',
  ADVANCE_DEPOSITED: 'ADVANCE_DEPOSITED' as 'ADVANCE_DEPOSITED',
  ADVANCE_FAILED: 'ADVANCE_FAILED' as 'ADVANCE_FAILED',
  AWAITING_REPAYMENT: 'AWAITING_REPAYMENT' as 'AWAITING_REPAYMENT',
  REPAYMENT_FAILED: 'REPAYMENT_FAILED' as 'REPAYMENT_FAILED',
  COMPLETED: 'COMPLETED' as 'COMPLETED',
  CANCELLED: 'CANCELLED' as 'CANCELLED',
};
export type EPAdvanceStatusType = typeof EPAdvanceStatus;

export const Trend = {
  CONSISTENT: 'CONSISTENT' as 'CONSISTENT',
  DECREASING: 'DECREASING' as 'DECREASING',
  INCREASING: 'INCREASING' as 'INCREASING',
  NA: 'NA' as 'NA',
};
export type TrendType = typeof Trend;

export const MessageStatus = {
  SCHEDULED: 'SCHEDULED' as 'SCHEDULED',
  PROCESSING: 'PROCESSING' as 'PROCESSING',
  DELIVERED: 'DELIVERED' as 'DELIVERED',
  CANCELLED: 'CANCELLED' as 'CANCELLED',
};
export type MessageStatusType = typeof MessageStatus;

export const MessageChannel = {
  DEFAULT: 'DEFAULT' as 'DEFAULT',
  NOTIFICATION: 'NOTIFICATION' as 'NOTIFICATION',
  EMAIL: 'EMAIL' as 'EMAIL',
  IN_APP: 'IN_APP' as 'IN_APP',
};
export type MessageChannelType = typeof MessageChannel;

export const MessageType = {
  NA: 'NA' as 'NA',
  REPAYMENT_REMINDER: 'REPAYMENT_REMINDER' as 'REPAYMENT_REMINDER',
  NEW_ADVANCE_REMINDER: 'NEW_ADVANCE_REMINDER' as 'NEW_ADVANCE_REMINDER',
  ANNOUNCEMENT: 'ANNOUNCEMENT' as 'ANNOUNCEMENT',
};
export type MessageTypeType = typeof MessageType;

export const SignupIntentStatus = {
  NEW: 'NEW' as 'NEW',
  COMPLETE: 'COMPLETE' as 'COMPLETE',
  NEED_NAME: 'NEED_NAME' as 'NEED_NAME',
  VERIFY_PHONE: 'VERIFY_PHONE' as 'VERIFY_PHONE',
  NEED_ADDRESS: 'NEED_ADDRESS' as 'NEED_ADDRESS',
  NEED_DOB: 'NEED_DOB' as 'NEED_DOB',
  NEED_PASSWORD: 'NEED_PASSWORD' as 'NEED_PASSWORD',
  CONNECT_BANK: 'CONNECT_BANK' as 'CONNECT_BANK',
  ADD_CARD: 'ADD_CARD' as 'ADD_CARD',
};
export type SignupIntentStatusType = typeof SignupIntentStatus;

export const ApplicationAction = {
  NONE: 'NONE' as 'NONE',
  BANK_CONNECTION: 'BANK_CONNECTION' as 'BANK_CONNECTION',
  REFRESH_BANK_CONNECTION: 'REFRESH_BANK_CONNECTION' as 'REFRESH_BANK_CONNECTION',
  CREDIT_CHECK: 'CREDIT_CHECK' as 'CREDIT_CHECK',
};
export type ApplicationActionType = typeof ApplicationAction;

export const BankAggregationIntentStatus = {
  CREATED: 'CREATED' as 'CREATED',
  AWAITING_CUSTOMER_CONNECTION: 'AWAITING_CUSTOMER_CONNECTION' as 'AWAITING_CUSTOMER_CONNECTION',
  AWAITING_PROVIDER_AGGREGATION: 'AWAITING_PROVIDER_AGGREGATION' as 'AWAITING_PROVIDER_AGGREGATION',
  COMPLETED: 'COMPLETED' as 'COMPLETED',
  FAILED: 'FAILED' as 'FAILED',
};
export type BankAggregationIntentStatusType = typeof BankAggregationIntentStatus;

export const BankAggregationProvider = {
  FLINKS: 'FLINKS' as 'FLINKS',
  PLAID: 'PLAID' as 'PLAID',
  ZUMRAILS: 'ZUMRAILS' as 'ZUMRAILS',
};
export type BankAggregationProviderType = typeof BankAggregationProvider;

export const CustomerCreditReportStatus = {
  UNCOMMITTED: 'UNCOMMITTED' as 'UNCOMMITTED',
  COMMITTED: 'COMMITTED' as 'COMMITTED',
  COMMIT_FAILED: 'COMMIT_FAILED' as 'COMMIT_FAILED',
  SUBMITTED: 'SUBMITTED' as 'SUBMITTED',
};
export type CustomerCreditReportStatusType = typeof CustomerCreditReportStatus;

export const CustomerCreditReportRating = {
  OK: 'OK' as 'OK',
  MISSED: 'MISSED' as 'MISSED',
  DELINQUANT_30: 'DELINQUANT_30' as 'DELINQUANT_30',
  DELINQUANT_60: 'DELINQUANT_60' as 'DELINQUANT_60',
  DELINQUANT_90: 'DELINQUANT_90' as 'DELINQUANT_90',
  DELINQUANT_120: 'DELINQUANT_120' as 'DELINQUANT_120',
  DELINQUANT_180: 'DELINQUANT_180' as 'DELINQUANT_180',
  WRITTEN_OFF: 'WRITTEN_OFF' as 'WRITTEN_OFF',
  NA: 'NA' as 'NA',
};
export type CustomerCreditReportRatingType = typeof CustomerCreditReportRating;

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthday: string;
  status: keyof UserStatusType;
  profileId?: string;
  defaultPaymentMethodId?: string;
  accounts?: CustomerAccount[];
  advance_intents?: EPAdvanceIntent[];
  devices?: Device[];
  addresses?: Address[];
  profile?: CustomerProfile;
  rewards_account?: RewardsAccount;
  features?: Feature[];
  feature_groups?: FeatureGroup[];
  gender?: string;
  referral_code?: string;
  internal_note?: string;
  username?: string;
}

export interface CustomerAccount {
  id: string;
  customerId: string;
  type: keyof CustomerAccountTypeType;
  balance: number;
  maxAllowedBalance?: number;
  payments?: Payment[];
  advances?: EPAdvance[];
  max_epa_limit?: number;
  min_epa_limit?: number;
  curr_epa_limit?: number;
  last_epa_limit_inc?: string;
}

export interface Payment {
  id: string;
  status: keyof PaymentStatusType;
  type: keyof PaymentTypeType;
  date: string;
  amount: number;
  transactionId?: string;
  paymentMethodId?: string;
  advance_id?: string;
  accountId?: string;
  paymentMethod?: PaymentMethod;
  subscription_id?: string;
  billing_cycle_id?: string;
  memo?: string;
  code?: number;
  advance_status?: string;
  subscription_active?: boolean;
  customer_id?: string;
  customer_email?: string;
  customer_status?: keyof UserStatusType;
}

export interface PaymentMethod {
  id: string;
  type: keyof PaymentMethodTypeType;
  provider: keyof PaymentProviderType;
  providerId: string;
  customerId: string;
  status: keyof PaymentMethodStatusType;
  three_d_secure?: boolean;
  customer_status?: string;
  customer_email?: string;
  provider_account_id?: string;
  rails_type?: string;
  issuer?: string;
  iin?: string;
  last4?: string;
  card_brand?: string;
  masked_bank_nb?: string;
}

export interface EPAdvance {
  id: string;
  intent_id: string;
  intent?: EPAdvanceIntent;
  amount: number;
  tip: number;
  fees: number;
  option: keyof EPAdvanceOptionType;
  status: keyof EPAdvanceStatusType;
  advance_date: string;
  repayment_date: string;
  repayment_failure_cnt: number;
  account_id: string;
  payments?: Payment[];
  customer_email?: string;
  customer_id?: string;
  customer_status?: string;
}

export interface EPAdvanceIntent {
  id: string;
  customer_id: string;
  requested_amount: number;
  tip: number;
  option: keyof EPAdvanceOptionType;
  payday: string;
  date: string;
}

export interface Device {
  id: string;
  customer_id: string;
  name?: string;
  model?: string;
  manufacturer?: string;
  registered_at?: string;
  secret?: string;
  can_notify?: boolean;
}

export interface Address {
  id: string;
  customer_id: string;
  city_name: string;
  postal_code: string;
  street_name: string;
  civic_number: string;
  province_code: string;
  status: string;
}

export interface CustomerProfile {
  id: string;
  approvedScope: keyof CustomerAccountTypeType[];
  creditScore?: number;
  last_bank_pull?: string;
  need_bank_aggregation?: boolean;
  signup_date?: string;
  bank_aggreagtion_id?: string;
  epa_adjustment?: number;
  epa_need_adjustment?: boolean;
  need_password_reset?: boolean;
  password_reset_key?: string;
  web_reviewed?: boolean;
  email_validated?: boolean;
  email_validate_key?: string;
  debt_reduction_registered: boolean;
}

export interface RewardsAccount {
  id: string;
  customer_id: string;
  star_balance: number;
  earnings?: RewardsEarning[];
  redemptions?: RewardsRedemption[];
}

export interface RewardsEarning {
  id: string;
  star_amount: number;
  name: string;
  product: string;
  description?: string;
  date: string;
  rewards_account_id?: string;
}

export interface RewardsRedemption {
  id: string;
  star_amount: number;
  name: string;
  description?: string;
  date: string;
  rewards_account_id?: string;
}

export interface Feature {
  id: string;
  name: string;
  description?: string;
  customer_count?: number;
  customers?: ReducedCustomer[];
}

export interface ReducedCustomer {
  id: string;
  email?: string;
  status?: keyof UserStatusType;
}

export interface FeatureGroup {
  id: string;
  name: string;
  description?: string;
}

export interface ErrorResponse {
  code: number;
  name: string;
  detail?: string;
  service?: string;
  flow?: string;
}

export interface CustomerFinancialReportGqlObject {
  noData: boolean;
  incomeTimeSeries?: TimeSeriesElement[];
  nsfCnt: number;
  nsfFees: number;
  avgMonthlyLoanPayment: number;
  nbLenders: number;
  expenditureTrend: keyof TrendType;
  balanceTrend: keyof TrendType;
  personalizedRecommendations: RecommendationElement[];
}

export interface TimeSeriesElement {
  month: string;
  amount: number;
}

export interface RecommendationElement {
  icon: string;
  recommendation: string;
}

export interface PaymentMethodsList {
  paymentMethods: PaymentMethod[];
}

export interface StatHolidays {
  data: Holiday[];
}

export interface Holiday {
  month: number;
  day: number;
}

export interface Subscription {
  id: string;
  customer_id: string;
  account_id: string;
  amount: number;
  active: boolean;
  start_date: string;
  inactive_after?: string;
  trial?: boolean;
  type?: string;
  status?: string;
}

export interface BankAccount {
  last_4_account_digits?: string;
  institution_number?: string;
  transit_number?: string;
  institution_name?: string;
  flinks_login_id?: string;
}

export interface BillingCycle {
  id: string;
  start_date: string;
  end_date: string;
  status?: string;
  paid: boolean;
  active: boolean;
  subscription_id?: string;
  payments?: Payment[];
}

export interface CustomerAddress {
  civic_number?: string;
  street_name?: string;
  province_code?: string;
  city_name?: string;
  postal_code?: string;
}

export interface Policy {
  id: string;
  subscription_id: string;
  active: boolean;
  status?: string;
  start_date: string;
  provider_user_id?: string;
  provider_policy_nb?: string;
  provider_name?: string;
}

export interface Message {
  id: string;
  status: keyof MessageStatusType;
  channel: keyof MessageChannelType;
  type: keyof MessageTypeType;
  created_date?: string;
  scheduled_date?: string;
  text?: string;
  template_id?: string;
  recipient_id: string;
}

export interface Review {
  id: string;
  customer_id: string;
  rating: number;
  comment: string;
  source: string;
  date: string;
}

export interface SignupIntent {
  id: string;
  date: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  date_of_birth?: string;
  hashed_password?: string;
  status: keyof SignupIntentStatusType;
  partner_id?: string;
  customer_id?: string;
}

export interface Leaderboard {
  data?: LeaderboardUser[];
}

export interface LeaderboardUser {
  user_name: string;
  referal_count: number;
}

export interface ReferralEmailList {
  emails: string[];
  curr_cnt?: number;
  total_cnt?: number;
}

export interface GlobalFeature {
  id: string;
  name: string;
  enabled: boolean;
}

export interface Registration {
  email: string;
  registration_status: string;
  ip_address: string;
  sign_up_date?: string;
  customer_id?: string;
}

export interface CreditHealthReport {
  id: string;
  report_id: string;
  member_number: string;
  last_fetched_on?: string;
  customer_id: string;
}

export interface Token {
  token: string;
}

export interface ApplicationIntent {
  id: string;
  customerId: string;
  requestedScope: keyof CustomerAccountTypeType;
  nextAction: keyof ApplicationActionType;
  approved: boolean;
  approvedAmount: number;
  approvedDate?: string;
  applicationDate?: string;
  finished: boolean;
  underwrittings?: string;
}

export interface CardSetupData {
  customerSecret: string;
  payment_method_intent_id?: string;
}

export interface AddressSuggestionsList {
  address_suggestions?: AddressSuggestions[];
}

export interface AddressSuggestions {
  address?: string;
  city?: string;
  postal_code?: string;
}

export interface CompletedAddress {
  address: string;
  city: string;
  province: string;
  postal_code: string;
}

export interface Card3DSData {
  payment_method_id: string;
  provider: keyof PaymentProviderType;
  url?: string;
  data?: string;
  action?: string;
}

export interface BankAggregationIntent {
  id: string;
  customer_id: string;
  status: keyof BankAggregationIntentStatusType;
  provider: keyof BankAggregationProviderType;
  flinks_iframe_link?: string;
  flinks_login_id?: string;
  plaid_link_token?: string;
  plaid_public_token?: string;
  plaid_access_token?: string;
  zumrails_iframe_link?: string;
  zumrails_user_id?: string;
  zumrails_req_id?: string;
  zumrails_card_id?: string;
}

export interface BankAggregation {
  id: string;
  bank_code: string;
  bank_name?: string;
  account_number?: string;
  transit_number?: string;
  account_type?: string;
  customer_id: string;
  bank_aggregation_intent_id: string;
}

export interface CustomerCreditReport {
  id: string;
  customer_id: string;
  file_id: string;
  status: keyof CustomerCreditReportStatusType;
  period_month: number;
  period_year: number;
  m2_base_json_serialized?: string;
  m2_base_string?: string;
  m2_trailer_json_serialized?: string;
  created_on: string;
  updated_on?: string;
  submitted_on?: string;
  rating: keyof CustomerCreditReportRatingType;
  next_history?: string;
  account_first_opened?: string;
  account_date_closed?: string;
}

export interface InputAddress {
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  province: string;
  city: string;
}
