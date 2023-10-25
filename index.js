import { generateId } from "./src/services/generator.js";
import { verifyUser } from "./src/services/verificator.js";

const testUser = {
    login: 'ChuckBass',
    id: '12cs5_yyt437a1cc'
}

const testBtn = document.querySelector("#test-btn");
testBtn.addEventListener('click', () => verifyUser(testUser));

const testInputBtn = document.querySelector("#test-input-btn");
const formInput = document.querySelector("#test-input");
testInputBtn.addEventListener('click', () => {
    const textFromInput = formInput.value;
    alert(textFromInput);
});

formInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});