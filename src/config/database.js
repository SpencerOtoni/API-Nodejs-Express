import mysql from 'mysql'

const connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'agenda-petshop'
})

export default connect