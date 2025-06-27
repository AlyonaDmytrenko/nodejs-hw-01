// import { error } from 'node:console';
import { PATH_DB } from '../constants/contacts.js';

const fs = require('node:fs/promises');
fs.readFile("db.json", {encoding: "utf-8"})
.then(data => {
    console.log(data);
})
.catch(error=>{
    console.error(error);
})

export const readContacts = async () => {};
