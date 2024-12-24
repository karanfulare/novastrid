import mysql from 'mysql2/promise';

const connection =  mysql.createPool({
    host: process.env.db_host,
    user:process.env.db_user,
    password: process.env.db_password,
    database:process.env.db_schema,
  });

export default  connection ;