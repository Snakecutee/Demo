const Pool = require('pg').Pool

const pg_conn = new Pool({
    user: 'adefyqyioepbvh',
    host: 'ec2-44-210-228-110.compute-1.amazonaws.com',
    database: 'dd2kkcoi5hog5h',
    password: 'c6b297f132f9667c75b289be5362b0e945ad34d64b7104ad0542cc69158a0fd9',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})


module.exports = pg_conn;
