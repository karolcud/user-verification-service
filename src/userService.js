import { generateId } from "./generator.js"
import userDatabase from "./database/userDatabase.js"

export function createUser(name) {
    let user = {
        name: name,
        id: generateId()
    };

    return user;
}


export function addUserToDatabase(user) {
    userDatabase.push(user);
}