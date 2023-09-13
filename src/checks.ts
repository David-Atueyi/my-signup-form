import { email, paWordRegex, passWord, regex } from "./app";
import {
  emailErrorIcon,
  emailErrorMessage,
  emailInputElem,
  firstNameInputElem,
  fnameErrorIcon,
  fnameErrorMessage,
  lastNameInputElem,
  lnameErrorIcon,
  lnameErrorMessage,
  passwordErrorIcon,
  passwordErrorMessage,
  passwordInputElem,
} from "./gettingHtmlElements";

//conditions
export const fnameCheck: Function = () => {
  if (!firstNameInputElem?.value) {
    firstNameInputElem!.style.border = "3px solid hsl(0, 100%, 74%)";
    firstNameInputElem?.setAttribute("placeholder", "");
    fnameErrorMessage!.style.display = "block";
    fnameErrorIcon!.style.visibility = "visible";
  } else {
    firstNameInputElem!.style.border = "3px solid hsl(154, 59%, 51%)";
    fnameErrorMessage!.style.display = "none";
    fnameErrorIcon!.style.visibility = "hidden";
  }
};
//
export const lnameCheck: Function = () => {
  if (!lastNameInputElem?.value) {
    lastNameInputElem!.style.border = "3px solid hsl(0, 100%, 74%)";
    lastNameInputElem?.setAttribute("placeholder", "");
    lnameErrorMessage!.style.display = "block";
    lnameErrorIcon!.style.visibility = "visible";
  } else {
    lastNameInputElem!.style.border = "3px solid hsl(154, 59%, 51%)";
    lnameErrorMessage!.style.display = "none";
    lnameErrorIcon!.style.visibility = "hidden";
  }
};
//
export const emailCheck: Function = () => {
  if (regex.test(email)) {
    emailInputElem!.style.border = "3px solid hsl(154, 59%, 51%)";
    emailErrorMessage!.style.display = "none";
    emailErrorIcon!.style.visibility = "hidden";
  } else {
    emailInputElem!.style.border = "3px solid hsl(0, 100%, 74%)";
    emailInputElem?.setAttribute("placeholder", "example@email.com");
    emailInputElem?.setAttribute("class", "email-input");
    
    emailErrorMessage!.style.display = "block";
    emailErrorIcon!.style.visibility = "visible";
  }
};
//
export const passwordCheck: Function = () => {
  if (!passwordInputElem?.value) {
    passwordInputElem!.style.border = "3px solid hsl(0, 100%, 74%)";
    passwordInputElem?.setAttribute("placeholder", "");
    passwordErrorMessage!.style.display = "block";
    passwordErrorIcon!.style.visibility = "visible";
  } else if (paWordRegex.test(passWord)) {
    passwordInputElem!.style.border = "3px solid hsl(154, 59%, 51%)";
    passwordErrorMessage!.style.display = "none";
    passwordErrorIcon!.style.visibility = "hidden";
  } else {
    passwordInputElem!.style.border = "3px solid hsl(0, 100%, 74%)";
    passwordInputElem?.setAttribute("placeholder", "");
    passwordErrorMessage!.style.display = "block";
    passwordErrorIcon!.style.visibility = "visible";
  }
};
