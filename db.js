import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña',
    database: 'usuariostea',
});

export default pool;
