const Pool = require('pg').Pool;
module.exports = new Pool({
    user: "postgres",
    password: "222440",
    host: "localhost",
    port: 5432,
    database:"video_host"
});