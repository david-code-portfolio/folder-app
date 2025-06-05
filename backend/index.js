const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // change if needed
    database: 'folder database',
})

db.connect(err => {
    if (err) throw err
    console.log('Connected to MySQL')
});

app.listen(5173, () => {
    console.log('Backend running on http://localhost:5173')
})