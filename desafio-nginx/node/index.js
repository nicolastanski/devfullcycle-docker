const express = require('express')
const app = express()
const mysql = require('mysql')

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.set('view engine', 'hbs');

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) VALUES('Nicolas Tanski')`
connection.query(sql);

var listNames
connection.query(`SELECT * FROM people`, (error, results) => {
    if (error) throw error;
    listNames = results
})
connection.end()

app.get('/', async (req, res) => {
    res.render('index', { listNames })
})

app.listen(3000, () => console.log('✅ Server started'))