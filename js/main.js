//Import Task
import Submit from "./submit.js";
import Account from "./account.js";
//Globals
window.main = document.querySelector('main');


// Load the Page
(() => {
    console.log('page loaded');

    Submit.SubmitForm();
    Submit.navFunction();
    Submit.Like();
    Account.CreateAccount();
})();