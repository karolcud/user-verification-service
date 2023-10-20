import { generateId } from "./src/generator.js";
import { verifyUser } from "./src/verificator.js";

const testUser = {
    login: 'ChuckBass',
    id: '12cs5_yyt437a1cc'
}

console.log('Wygenerowane ID', generateId());
verifyUser(testUser);