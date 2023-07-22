// Note here that most components shouldn't be using the raw set auth tokens -
// they should instead use the useAuthProcedures hook
export const getUtmCampaign = () => localStorage.getItem('utm-campaign');
export const setUtmCampaign = (val: string) => localStorage.setItem('utm-campaign', val);

export const getClickId = () => localStorage.getItem('click-id');
export const setClickId = (id: string) => localStorage.setItem('click-id', id);

export const getReferralCode = () => localStorage.getItem('referral-code');
export const setReferralCode = (val: string) => localStorage.setItem('referral-code', val);

export const getLang = () => localStorage.getItem('lang');
export const setLang = (val: string) => localStorage.setItem('lang', val);
