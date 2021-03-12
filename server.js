// EXPRESS 서버 사용
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// db
const data = fs.readFileSync('./config/database.json');
const infos = JSON.parse(data);


const connection = mysql.createConnection({
    host: infos.host,
    port: infos.port,
    user: infos.user,
    password: infos.password,
    database: infos.database
});

connection.connect();

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PORT
const port = process.env.PORT || 6880;

// REST API에서는 일반적으로 JSON 타입의 데이터를 주고 받는다.

app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 DB에 넣어준다.
    
    

});

app.get('/users', (req, res) => {
    connection.query(
        "SELECT * FROM users;",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});


app.listen(port, () => console.log(`Listening on port ${port}`));