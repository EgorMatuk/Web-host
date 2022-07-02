const Pool = require('pg').Pool;
const pool = new Pool({
    user: "vdfhfqkucykkvs",
    password: "a5f231fb0e6b59da380d97af1053667711fa86ad21111b1c11fdb024fa4f0c05",
    host: "ec2-54-76-43-89.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database:"degma4fas8l0pi",
    ssl: {rejectUnauthorized: false}
});
module.exports = pool;


