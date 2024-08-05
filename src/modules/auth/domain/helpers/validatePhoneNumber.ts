import { AsYouType } from 'libphonenumber-js';

export const formatPhoneNumber = (phoneNumber: string) => {
  return new AsYouType().input(phoneNumber);
};
