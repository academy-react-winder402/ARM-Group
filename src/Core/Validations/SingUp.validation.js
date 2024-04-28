const PhoneValidation = (PhoneNumber) => {
  var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  var result = regex.test(PhoneNumber);
  return result;
};

export { PhoneValidation };
