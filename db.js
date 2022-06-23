const Pool = require('pg').Pool;
const pool = new Pool({
    user: "VideoHost",
    password: "222440",
    host: "localhost",
    port:"5432",
    data: "users"
});