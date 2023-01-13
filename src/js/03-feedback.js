import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("submit", removeDataFromLocalStorage);
form.addEventListener('input', throttle(setDataInLocalStorage, 500));


function setDataInLocalStorage() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({
        email: input.value,
        message: textarea.value
    }));
}

function removeDataFromLocalStorage(evt){
    evt.preventDefault();

    const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedSettings = JSON.parse(savedSettings);
    
    if (parsedSettings.email === "" || parsedSettings.message === "") {
        alert("Please fill in all the fields!");
    } else {
        console.log(parsedSettings)
        evt.currentTarget.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY);
    }
}

function getDataFromLocalStorage(){
    const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedSettings = JSON.parse(savedSettings);

    if(parsedSettings){
    input.value = parsedSettings.email;
    textarea.value = parsedSettings.message;
    }
}

getDataFromLocalStorage();
