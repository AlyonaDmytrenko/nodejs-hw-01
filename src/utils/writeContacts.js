import { PATH_DB } from '../constants/contacts.js';


const fs = require('node:fs/promises');
fs.writeFile("db.json", [])
.then(() => {
    console.log("ok");
})
.catch(error=>{
    console.error(error);
})

export const writeContacts = async (updatedContacts) => {};
