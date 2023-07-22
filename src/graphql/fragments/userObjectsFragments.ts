import { gql } from '@apollo/client';

/*************************************************************************************\

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

\*************************************************************************************/

export const ErrorFragment = () => gql`
  fragment ErrorFragment on ErrorResponse {
    code
    name
    detail
    service
    flow
  }
`;

export const PaymentFragment = () => gql`
  fragment PaymentFragment on PaymentGqlObject {
    id
    date
    status
    amount
    type
  }
`;

export const ProductFragment = () => gql`
  fragment ProductFragment on ProductGqlObject {
    id
    merchantId
    price
    name
  }
`;

export const MerchantInvoiceFragment = () => gql`
  fragment MerchantInvoiceFragment on MerchantInvoiceGqlObject {
    id
    merchantId
    checkoutId
    createdAt
    processedAt
    completedAt
    amount
    status
  }
`;

const leaseItemFragmentDefaultSubfragments = {
  productFragment: ProductFragment,
};

export const LeaseItemFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...leaseItemFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.productFragment()}
    fragment LeaseItemFragment on LeaseItem {
      product {
        ...ProductFragment
      }
      quantity
    }
  `;
};

const leaseFragmentDefaultSubfragments = {
  paymentFragment: PaymentFragment,
  leaseItemFragment: LeaseItemFragment,
};

export const LeaseFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...leaseFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.paymentFragment()}
    ${subfragments.leaseItemFragment()}
    fragment LeaseFragment on LeaseGqlObject {
      id
      status
      insuranceEnabled
      downPaymentAmount
      capitalizedCost
      cashback
      shippingFees
      salesTax
      faceValue
      insuranceAmount
      totalAmount
      leaseTerms
      leaseTermsFrequency
      startDate
      endDate
      recurringPaymentAmount
      recurringInsuranceAmount
      recurringTotalAmount
      pdfLink
      payments {
        ...PaymentFragment
      }
      items {
        ...LeaseItemFragment
      }
    }
  `;
};

const userFragmentDefaultSubfragments = {};

export const UserFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...userFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    fragment UserFragment on User {
      id
      firstName
      lastName
      email
      phoneNumber
      availableCredit
      creditUsage
      paymentMethodId
    }
  `;
};

export const MerchantFragment = () => gql`
  fragment MerchantFragment on Merchant {
    id
    name
    type
    storeUrl
    active
  }
`;

export const MerchantPublicFragment = () => gql`
  fragment MerchantPublicFragment on MerchantPublicGqlObject {
    id
    type
    name
    storeUrl
    storeAddress
    active
    slug
  }
`;

const checkoutFragmentDefaultSubfragments = {
  leaseFragment: LeaseFragment,
  userFragment: UserFragment,
  merchantFragment: MerchantFragment,
  merchantInvoiceFragment: MerchantInvoiceFragment,
};

export const CheckoutFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...checkoutFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.leaseFragment()}
    ${subfragments.userFragment()}
    ${subfragments.merchantFragment()}
    ${subfragments.merchantInvoiceFragment()}
    fragment CheckoutFragment on CheckoutGqlObject {
      id
      userId
      merchantId
      leaseId
      failReason
      state
      deliveryMethod
      creationDate
      lease {
        ...LeaseFragment
      }
      user {
        ...UserFragment
      }
      merchant {
        ...MerchantFragment
      }
      invoices {
        ...MerchantInvoiceFragment
      }
    }
  `;
};

export const CheckoutStateCountFragment = () => gql`
  fragment CheckoutStateCountFragment on CheckoutListStateCountGqlObject {
    initial
    leaseGenerated
    purchaseConfirmed
    deliveryMethodSet
    done
    refunded
    abandoned
    failed
  }
`;

const checkoutListAggregationFragmentDefaultSubfragments = {
  checkoutStateCountFragment: CheckoutStateCountFragment,
};

export const CheckoutListAggregationFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...checkoutListAggregationFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.checkoutStateCountFragment()}
    fragment CheckoutListAggregationFragment on CheckoutListAggregationGqlObject {
      averageInvoiceAmount
      totalAmountProcessed
      stateCount {
        ...CheckoutStateCountFragment
      }
    }
  `;
};

const checkoutsListFragmentDefaultSubfragments = {
  checkoutFragment: CheckoutFragment,
  checkoutListAggregationFragment: CheckoutListAggregationFragment,
};

export const CheckoutsListFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...checkoutsListFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.checkoutFragment()}
    ${subfragments.checkoutListAggregationFragment()}
    fragment CheckoutsListFragment on PaginatedCheckoutListGqlObject {
      checkouts {
        ...CheckoutFragment
      }
      pageSize
      page
      totalPages
      totalRecords
      aggregation {
        ...CheckoutListAggregationFragment
      }
    }
  `;
};

const customerFragmentDefaultSubfragments = {
  checkoutFragment: CheckoutFragment,
  connectedMerchantsFragment: MerchantPublicFragment,
};

export const CustomerFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...customerFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.checkoutFragment()}
    ${subfragments.connectedMerchantsFragment()}
    fragment CustomerFragment on CustomerGqlObject {
      id
      firstName
      lastName
      email
      phoneNumber
      inPersonCode
      availableCredit
      creditUsage
      profile {
        approvedScope
      }

      paymentMethodId

      checkouts {
        ...CheckoutFragment
      }
      connectedMerchants {
        ...MerchantPublicFragment
      }
    }
  `;
};

export const PaymentMethodFragment = (subfragmentOverrides = {}) => {
  return gql`
    fragment PaymentMethodFragment on PaymentMethodGqlObject {
      id
      type
      provider
    }
  `;
};

const customerAtMerchantFragmentDefaultSubfragments = {
  customerFragment: CustomerFragment,
};

export const CustomerAtMerchantFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...customerAtMerchantFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.customerFragment()}
    fragment CustomerAtMerchantFragment on CustomerAtMerchantGqlObject {
      date
      customer {
        ...CustomerFragment
      }
    }
  `;
};

export const CustomerListAggregationFragment = () => gql`
  fragment CustomerListAggregationFragment on CustomerListAggregationGqlObject {
    averageApprovedCredit
    averageCreditUsage
    totalActiveCustomers
  }
`;

const customersAtMerchantListFragmentDefaultSubfragments = {
  customerAtMerchantFragment: CustomerAtMerchantFragment,
  customerListAggregationFragment: CustomerListAggregationFragment,
};

export const CustomersAtMerchantListFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...customersAtMerchantListFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.customerAtMerchantFragment()}
    ${subfragments.customerListAggregationFragment()}
    fragment CustomersAtMerchantListFragment on PaginatedCustomerAtMerchantListGqlObject {
      customers {
        ...CustomerAtMerchantFragment
      }
      pageSize
      page
      totalPages
      totalRecords
      aggregation {
        ...CustomerListAggregationFragment
      }
    }
  `;
};

const merchantInvoicesListFragmentDefaultSubfragments = {
  merchantInvoiceFragment: MerchantInvoiceFragment,
};

export const MerchantInvoicesListFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...merchantInvoicesListFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.merchantInvoiceFragment()}
    fragment MerchantInvoicesListFragment on PaginatedMerchantInvoiceListGqlObject {
      invoices {
        ...MerchantInvoiceFragment
      }
      pageSize
      page
      totalPages
      totalRecords
    }
  `;
};

const customerAccountFragmentDefaultSubfragments = {
  paymentFragment: PaymentFragment,
};

export const CustomerAccountFragment = (subfragmentOverrides = {}) => {
  const subfragments = {
    ...customerAccountFragmentDefaultSubfragments,
    ...subfragmentOverrides,
  };

  return gql`
    ${subfragments.paymentFragment()}
    fragment CustomerAccountFragment on CustomerAccountGqlObject {
      id
      customerId
      type
      balance
      maxAllowedBalance
      payments {
        ...PaymentFragment
      }
    }
  `;
};

export const ApplicationIntentFragment = (subfragmentOverrides = {}) => {
  return gql`
    fragment ApplicationIntentFragment on ApplicationIntentGqlObject {
      id
      customerId
      nextAction
      approved
      approvedAmount
    }
  `;
};
