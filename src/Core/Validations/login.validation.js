const EmailValidation = (Email) =>{
    var regex = new RegExp("[a-zA-Z][a-zA-Z0-9]+@(gmail)\.(com)");
    var result = regex.test(Email);
    return result;
}

const PasswordValidation = (Password) =>{
    var regex = new RegExp("[0-9]+");
    var result = regex.test(Password);
    return result;
}

export {EmailValidation, PasswordValidation};