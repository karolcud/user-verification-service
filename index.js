import { generateId } from "./src/generator.js";
import { verifyUser } from "./src/verificator.js";
import { createUser,addUserToDatabase } from "./src/userService.js";
import userDatabase from "./src/database/userDatabase.js";

console.log('Wygenerowane ID', generateId());

let user_1 = createUser('Archie');
let user_2 = createUser('Betty');
let user_3 = createUser('Jughead');
let user_4 = createUser('Veronica');
let user_5 = createUser('Hiram');


addUserToDatabase(user_1);
addUserToDatabase(user_2);
addUserToDatabase(user_3);
addUserToDatabase(user_4);
addUserToDatabase(user_5);

console.log('userDB: ', userDatabase);

const correctUser = userDatabase[0];
const failUser = { name: 'Karolas', id: 'kc135_123dupa456' };

verifyUser(correctUser);
verifyUser(failUser);
