import { PhoneNumber } from "google-libphonenumber";

//  import PhoneNumberUtil required

export default function validatePhoneNumber(value: string) {
  console.log(value);
  const instance =
    require("google-libphonenumber").PhoneNumberUtil.getInstance();
  try {
    const phoneNumber = instance.parseAndKeepRawInput(value, "IS");
    return instance.isValidNumberForRegion(phoneNumber as PhoneNumber, "IS");
  } catch (e) {
    return false;
  }
}
