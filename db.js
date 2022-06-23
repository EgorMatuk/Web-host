const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "222440",
    host: "localhost",
    port: 5432,
    data: "VideoHost"
});
module.exports = pool;