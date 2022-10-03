const bcrypt = require("bcrypt");
const key = "NgoMinhHieu20031999";
const createPassHash = (password) => {
    const result = bcrypt.hashSync(password , 10);
    return result;
}

module.exports = {
    createPassHash
}

