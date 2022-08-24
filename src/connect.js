import pkg from 'pg';
const { Client } = pkg;

//connect to postgresql dvdrental db
const connectionString = "postgres://postgres:postgres@localhost:5432/dvdrental";

const db = new Client({
    connectionString: connectionString
});

export default db;