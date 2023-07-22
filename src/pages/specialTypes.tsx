export const PaymentFrequency = {
  WEEKLY: 'WEEKLY' as 'WEEKLY',
  EVERY_TWO_WEEKS: 'EVERY_TWO_WEEKS' as 'EVERY_TWO_WEEKS',
  MONTHLY: 'MONTHLY' as 'MONTHLY',
  OTHER: 'OTHER' as 'OTHER',
};
export type PaymentFrequencyType = typeof PaymentFrequency;

export const EmploymentStatus = {
  FULLTIME: 'Full-Time' as 'Full-Time',
  PART_TIME: 'Part-Time' as 'Part-Time',
  SELF_EMPLOYED: 'Self-Employed' as 'Self-Employed',
  STUDENT: 'Student' as 'Student',
  UNEMPLOYED: 'Unemployed' as 'Unemployed',
};

export const SimpleEmploymentStatus = {
  EMPLOYED: 'Employed' as 'Employed',
  UNEMPLOYED: 'Unemployed' as 'Unemployed',
  GOVERNMENT_INCOME: 'Government Income' as 'Government Income',
};

export const AdvanceType = {
  REGULAR: 'REGULAR' as 'REGULAR',
  EXPRESS: 'EXPRESS' as 'EXPRESS',
};

export type AdvanceTypeType = typeof AdvanceType;
