import { emailCheck, fnameCheck, lnameCheck, passwordCheck } from "./checks";
import {
  buttonElem,
  emailInputElem,
  firstNameInputElem,
  lastNameInputElem,
  passwordInputElem,
  showPassWordElem,
} from "./gettingHtmlElements";

//
// global variables
let firstName: string;
let lastName: string;
export let email: string;
export let passWord: string;
export let regex: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-z0-9-]+\.[a-z]{2,4}$/;
export let paWordRegex: RegExp = /^[a-zA-Z0-9_-]{3,20}$/;
//
//
const handleFirstNameInput: EventListener = (event: Event): void => {
  const usersFistName = event.target as HTMLInputElement;
  firstName = usersFistName.value;
};
const handleLastNameInput: EventListener = (event: Event): void => {
  const usersLastName = event.target as HTMLInputElement;
  lastName = usersLastName.value;
};
const handleEmailInput: EventListener = (event: Event): void => {
  const usersEmail = event.target as HTMLInputElement;
  email = usersEmail.value;
};
//
//
const handlePswordInput: EventListener = (event: Event): void => {
  const usersPsword = event.target as HTMLInputElement;
  passWord = usersPsword.value;
};
//
const handleShowPassword = () => {
  if (passwordInputElem?.type == "password") {
   passwordInputElem!.type = "text";
    showPassWordElem!.innerText = "Hide Password";
  }
  else {
    passwordInputElem!.type = "password";
    showPassWordElem!.innerText = "Show Password";
  }
};

//
const handleButton: EventListener = (): void => {
  fnameCheck();
  lnameCheck();
  emailCheck();
  passwordCheck();
};
//
// EventListener
firstNameInputElem?.addEventListener("change", handleFirstNameInput);
lastNameInputElem?.addEventListener("change", handleLastNameInput);
emailInputElem?.addEventListener("change", handleEmailInput);
passwordInputElem?.addEventListener("change", handlePswordInput);
showPassWordElem?.addEventListener("click",handleShowPassword);
buttonElem?.addEventListener("click", handleButton);
