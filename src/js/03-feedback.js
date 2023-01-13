import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputTextContent = document.querySelector("input");
const textarea = document.querySelector("textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("submit", removeDataFromLocalStorage);
form.addEventListener('input', throttle(setDataInLocalStorage, 500));

const formData = {};

function setDataInLocalStorage(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

function removeDataFromLocalStorage(evt){
    evt.preventDefault();

    const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedSettings = JSON.parse(savedSettings);

    console.log(parsedSettings)

    evt.currentTarget.reset();
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function getDataFromLocalStorage(){
    const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY || "");
    const parsedSettings = JSON.parse(savedSettings);

    if(parsedSettings){
    inputTextContent.value = parsedSettings.email;
    textarea.value = parsedSettings.message ;
    }
}

getDataFromLocalStorage()