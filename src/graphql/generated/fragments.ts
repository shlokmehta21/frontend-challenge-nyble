import { gql } from '@apollo/client';

/*************************************************************************************
  These are standard gql fragments for querying all the fields on our backend objects

  Note:
  - These are built to have to option to be customized. To override a subfragment,
    make a subfragment with the same name as the one being overridden as a function,
    and pass it in to the parent fragment subfragmentOverrides

    eg. const ErrorFragment = () => gql`
      fragment ErrorFragment on ErrorResponse {
        code
        // Note we omitted fields to customize this query
      }
    `

    ParentFragment({errorFragment: ErrorFragment})

*************************************************************************************/


export const PaymentMethodFragment = () => gql`
  fragment PaymentMethodFragment on PaymentMethod {
    id
    type
    provider
    providerId
    customerId
    status
    three_d_secure
    customer_status
    customer_email
    provider_account_id
    rails_type
    issuer
    iin
    last4
    card_brand
    masked_bank_nb
  }
`;

export const EPAdvanceIntentFragment = () => gql`
  fragment EPAdvanceIntentFragment on EPAdvanceIntent {
    id
    customer_id
    requested_amount
    tip
    option
    payday
    date
  }
`;

export const DeviceFragment = () => gql`
  fragment DeviceFragment on Device {
    id
    customer_id
    name
    model
    manufacturer
    registered_at
    secret
    can_notify
  }
`;

export const AddressFragment = () => gql`
  fragment AddressFragment on Address {
    id
    customer_id
    city_name
    postal_code
    street_name
    civic_number
    province_code
    status
  }
`;

export const CustomerProfileFragment = () => gql`
  fragment CustomerProfileFragment on CustomerProfile {
    id
    approvedScope
    creditScore
    last_bank_pull
    need_bank_aggregation
    signup_date
    bank_aggreagtion_id
    epa_adjustment
    epa_need_adjustment
    need_password_reset
    password_reset_key
    web_reviewed
    email_validated
    email_validate_key
    debt_reduction_registered
  }
`;

export const RewardsEarningFragment = () => gql`
  fragment RewardsEarningFragment on RewardsEarning {
    id
    star_amount
    name
    product
    description
    date
    rewards_account_id
  }
`;

export const RewardsRedemptionFragment = () => gql`
  fragment RewardsRedemptionFragment on RewardsRedemption {
    id
    star_amount
    name
    description
    date
    rewards_account_id
  }
`;

export const ReducedCustomerFragment = () => gql`
  fragment ReducedCustomerFragment on ReducedCustomer {
    id
    email
    status
  }
`;

export const FeatureGroupFragment = () => gql`
  fragment FeatureGroupFragment on FeatureGroup {
    id
    name
    description
  }
`;

export const ErrorResponseFragment = () => gql`
  fragment ErrorResponseFragment on ErrorResponse {
    code
    name
    detail
    service
    flow
  }
`;

export const TimeSeriesElementFragment = () => gql`
  fragment TimeSeriesElementFragment on TimeSeriesElement {
    month
    amount
  }
`;

export const RecommendationElementFragment = () => gql`
  fragment RecommendationElementFragment on RecommendationElement {
    icon
    recommendation
  }
`;

export const HolidayFragment = () => gql`
  fragment HolidayFragment on Holiday {
    month
    day
  }
`;

export const SubscriptionFragment = () => gql`
  fragment SubscriptionFragment on Subscription {
    id
    customer_id
    account_id
    amount
    active
    start_date
    inactive_after
    trial
    type
    status
  }
`;

export const BankAccountFragment = () => gql`
  fragment BankAccountFragment on BankAccount {
    last_4_account_digits
    institution_number
    transit_number
    institution_name
    flinks_login_id
  }
`;

export const CustomerAddressFragment = () => gql`
  fragment CustomerAddressFragment on CustomerAddress {
    civic_number
    street_name
    province_code
    city_name
    postal_code
  }
`;

export const PolicyFragment = () => gql`
  fragment PolicyFragment on Policy {
    id
    subscription_id
    active
    status
    start_date
    provider_user_id
    provider_policy_nb
    provider_name
  }
`;

export const MessageFragment = () => gql`
  fragment MessageFragment on Message {
    id
    status
    channel
    type
    created_date
    scheduled_date
    text
    template_id
    recipient_id
  }
`;

export const ReviewFragment = () => gql`
  fragment ReviewFragment on Review {
    id
    customer_id
    rating
    comment
    source
    date
  }
`;

export const SignupIntentFragment = () => gql`
  fragment SignupIntentFragment on SignupIntent {
    id
    date
    email
    first_name
    last_name
    phone_number
    date_of_birth
    hashed_password
    status
    partner_id
    customer_id
  }
`;

export const LeaderboardUserFragment = () => gql`
  fragment LeaderboardUserFragment on LeaderboardUser {
    user_name
    referal_count
  }
`;

export const ReferralEmailListFragment = () => gql`
  fragment ReferralEmailListFragment on ReferralEmailList {
    emails
    curr_cnt
    total_cnt
  }
`;

export const GlobalFeatureFragment = () => gql`
  fragment GlobalFeatureFragment on GlobalFeature {
    id
    name
    enabled
  }
`;

export const RegistrationFragment = () => gql`
  fragment RegistrationFragment on Registration {
    email
    registration_status
    ip_address
    sign_up_date
    customer_id
  }
`;

export const CreditHealthReportFragment = () => gql`
  fragment CreditHealthReportFragment on CreditHealthReport {
    id
    report_id
    member_number
    last_fetched_on
    customer_id
  }
`;

export const TokenFragment = () => gql`
  fragment TokenFragment on Token {
    token
  }
`;

export const ApplicationIntentFragment = () => gql`
  fragment ApplicationIntentFragment on ApplicationIntent {
    id
    customerId
    requestedScope
    nextAction
    approved
    approvedAmount
    approvedDate
    applicationDate
    finished
    underwrittings
  }
`;

export const CardSetupDataFragment = () => gql`
  fragment CardSetupDataFragment on CardSetupData {
    customerSecret
    payment_method_intent_id
  }
`;

export const AddressSuggestionsFragment = () => gql`
  fragment AddressSuggestionsFragment on AddressSuggestions {
    address
    city
    postal_code
  }
`;

export const CompletedAddressFragment = () => gql`
  fragment CompletedAddressFragment on CompletedAddress {
    address
    city
    province
    postal_code
  }
`;

export const Card3DSDataFragment = () => gql`
  fragment Card3DSDataFragment on Card3DSData {
    payment_method_id
    provider
    url
    data
    action
  }
`;

export const BankAggregationIntentFragment = () => gql`
  fragment BankAggregationIntentFragment on BankAggregationIntent {
    id
    customer_id
    status
    provider
    flinks_iframe_link
    flinks_login_id
    plaid_link_token
    plaid_public_token
    plaid_access_token
    zumrails_iframe_link
    zumrails_user_id
    zumrails_req_id
    zumrails_card_id
  }
`;

export const BankAggregationFragment = () => gql`
  fragment BankAggregationFragment on BankAggregation {
    id
    bank_code
    bank_name
    account_number
    transit_number
    account_type
    customer_id
    bank_aggregation_intent_id
  }
`;

export const CustomerCreditReportFragment = () => gql`
  fragment CustomerCreditReportFragment on CustomerCreditReport {
    id
    customer_id
    file_id
    status
    period_month
    period_year
    m2_base_json_serialized
    m2_base_string
    m2_trailer_json_serialized
    created_on
    updated_on
    submitted_on
    rating
    next_history
    account_first_opened
    account_date_closed
  }
`;

const customerFragmentDefaultSubfragments = {
  customerAccountFragment: CustomerAccountFragment,
  ePAdvanceIntentFragment: EPAdvanceIntentFragment,
  deviceFragment: DeviceFragment,
  addressFragment: AddressFragment,
  customerProfileFragment: CustomerProfileFragment,
  rewardsAccountFragment: RewardsAccountFragment,
  featureFragment: FeatureFragment,
  featureGroupFragment: FeatureGroupFragment,
};

export function CustomerFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...customerFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.customerAccountFragment()}
    ${subfragments.ePAdvanceIntentFragment()}
    ${subfragments.deviceFragment()}
    ${subfragments.addressFragment()}
    ${subfragments.customerProfileFragment()}
    ${subfragments.rewardsAccountFragment()}
    ${subfragments.featureFragment()}
    ${subfragments.featureGroupFragment()}

    fragment CustomerFragment on Customer {
      id
      firstName
      lastName
      phoneNumber
      email
      birthday
      status
      profileId
      defaultPaymentMethodId
      accounts {
        ...CustomerAccountFragment
      }
      advance_intents {
        ...EPAdvanceIntentFragment
      }
      devices {
        ...DeviceFragment
      }
      addresses {
        ...AddressFragment
      }
      profile {
        ...CustomerProfileFragment
      }
      rewards_account {
        ...RewardsAccountFragment
      }
      features {
        ...FeatureFragment
      }
      feature_groups {
        ...FeatureGroupFragment
      }
      gender
      referral_code
      internal_note
      username
    }
  `;
};

const customerAccountFragmentDefaultSubfragments = {
  paymentFragment: PaymentFragment,
  ePAdvanceFragment: EPAdvanceFragment,
};

export function CustomerAccountFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...customerAccountFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.paymentFragment()}
    ${subfragments.ePAdvanceFragment()}

    fragment CustomerAccountFragment on CustomerAccount {
      id
      customerId
      type
      balance
      maxAllowedBalance
      payments {
        ...PaymentFragment
      }
      advances {
        ...EPAdvanceFragment
      }
      max_epa_limit
      min_epa_limit
      curr_epa_limit
      last_epa_limit_inc
    }
  `;
};

const paymentFragmentDefaultSubfragments = {
  paymentMethodFragment: PaymentMethodFragment,
};

export function PaymentFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...paymentFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.paymentMethodFragment()}

    fragment PaymentFragment on Payment {
      id
      status
      type
      date
      amount
      transactionId
      paymentMethodId
      advance_id
      accountId
      paymentMethod {
        ...PaymentMethodFragment
      }
      subscription_id
      billing_cycle_id
      memo
      code
      advance_status
      subscription_active
      customer_id
      customer_email
      customer_status
    }
  `;
};

const ePAdvanceFragmentDefaultSubfragments = {
  ePAdvanceIntentFragment: EPAdvanceIntentFragment,
  paymentFragment: PaymentFragment,
};

export function EPAdvanceFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...ePAdvanceFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.ePAdvanceIntentFragment()}
    ${subfragments.paymentFragment()}

    fragment EPAdvanceFragment on EPAdvance {
      id
      intent_id
      intent {
        ...EPAdvanceIntentFragment
      }
      amount
      tip
      fees
      option
      status
      advance_date
      repayment_date
      repayment_failure_cnt
      account_id
      payments {
        ...PaymentFragment
      }
      customer_email
      customer_id
      customer_status
    }
  `;
};

const rewardsAccountFragmentDefaultSubfragments = {
  rewardsEarningFragment: RewardsEarningFragment,
  rewardsRedemptionFragment: RewardsRedemptionFragment,
};

export function RewardsAccountFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...rewardsAccountFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.rewardsEarningFragment()}
    ${subfragments.rewardsRedemptionFragment()}

    fragment RewardsAccountFragment on RewardsAccount {
      id
      customer_id
      star_balance
      earnings {
        ...RewardsEarningFragment
      }
      redemptions {
        ...RewardsRedemptionFragment
      }
    }
  `;
};

const featureFragmentDefaultSubfragments = {
  reducedCustomerFragment: ReducedCustomerFragment,
};

export function FeatureFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...featureFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.reducedCustomerFragment()}

    fragment FeatureFragment on Feature {
      id
      name
      description
      customer_count
      customers {
        ...ReducedCustomerFragment
      }
    }
  `;
};

const customerFinancialReportGqlObjectFragmentDefaultSubfragments = {
  timeSeriesElementFragment: TimeSeriesElementFragment,
  recommendationElementFragment: RecommendationElementFragment,
};

export function CustomerFinancialReportGqlObjectFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...customerFinancialReportGqlObjectFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.timeSeriesElementFragment()}
    ${subfragments.recommendationElementFragment()}

    fragment CustomerFinancialReportGqlObjectFragment on CustomerFinancialReportGqlObject {
      noData
      incomeTimeSeries {
        ...TimeSeriesElementFragment
      }
      nsfCnt
      nsfFees
      avgMonthlyLoanPayment
      nbLenders
      expenditureTrend
      balanceTrend
      personalizedRecommendations {
        ...RecommendationElementFragment
      }
    }
  `;
};

const paymentMethodsListFragmentDefaultSubfragments = {
  paymentMethodFragment: PaymentMethodFragment,
};

export function PaymentMethodsListFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...paymentMethodsListFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.paymentMethodFragment()}

    fragment PaymentMethodsListFragment on PaymentMethodsList {
      paymentMethods {
        ...PaymentMethodFragment
      }
    }
  `;
};

const statHolidaysFragmentDefaultSubfragments = {
  holidayFragment: HolidayFragment,
};

export function StatHolidaysFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...statHolidaysFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.holidayFragment()}

    fragment StatHolidaysFragment on StatHolidays {
      data {
        ...HolidayFragment
      }
    }
  `;
};

const billingCycleFragmentDefaultSubfragments = {
  paymentFragment: PaymentFragment,
};

export function BillingCycleFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...billingCycleFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.paymentFragment()}

    fragment BillingCycleFragment on BillingCycle {
      id
      start_date
      end_date
      status
      paid
      active
      subscription_id
      payments {
        ...PaymentFragment
      }
    }
  `;
};

const leaderboardFragmentDefaultSubfragments = {
  leaderboardUserFragment: LeaderboardUserFragment,
};

export function LeaderboardFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...leaderboardFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.leaderboardUserFragment()}

    fragment LeaderboardFragment on Leaderboard {
      data {
        ...LeaderboardUserFragment
      }
    }
  `;
};

const addressSuggestionsListFragmentDefaultSubfragments = {
  addressSuggestionsFragment: AddressSuggestionsFragment,
};

export function AddressSuggestionsListFragment(subfragmentOverrides = {}) {
  const subfragments = {
    ...addressSuggestionsListFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  }

  return gql`
    
    ${subfragments.addressSuggestionsFragment()}

    fragment AddressSuggestionsListFragment on AddressSuggestionsList {
      address_suggestions {
        ...AddressSuggestionsFragment
      }
    }
  `;
};
