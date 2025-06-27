export const addOneContact = async () => {};

const fs = require('node:fs/promises');

fs.appendFile("db.json", [])
.then(() => {
    console.log("ok");
})
.catch(error=>{
    console.error(error);
})

addOneContact();
