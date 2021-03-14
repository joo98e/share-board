// EXPRESS 서버 사용
const fs = require('fs');
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

// ********************************************************* Front
// 업로드용
const multer = require('multer');
const upload = multer({dest : './upload'});

// body-parser
// REST API에서는 일반적으로 JSON 타입의 데이터를 주고 받는다.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// *********************************************************
// ********************************************************* Back
// db
const data = fs.readFileSync('./config/database.json');
const infos = JSON.parse(data);

// PORT
const port = process.env.PORT || 6880;


const connection = mysql.createConnection({
    host: infos.host,
    port: infos.port,
    user: infos.user,
    password: infos.password,
    database: infos.database
});

connection.connect();

// *********************************************************

// 회원가입
app.post('/SignUp', upload.single('image'), (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 DB에 넣어준다.

    // 쿼리문
    let sql = 'INSERT INTO users \
    VALUES(null, ?, ?, ?, ?, ?, ?,)';

    // parmas(column)
    let parmas = [profileImage, user_id, user_pw, user_name, user_email, user_phone, user_gender];

    // bianry 데이터
    let profileImage = '/image/' + req.file.filename;
    // Text 데이터
    let user_id = req.body.user_id;
    let user_pw = req.body.user_pw;
    let user_name = req.body.user_name;
    let user_email = req.body.user_email;
    let user_phone = req.body.user_phone;
    let user_gender = req.body.user_gender;
    
    connection.query(sql, parmas, (err, rows, fields) => {
        res.send(rows);
    });

});

// 이미지 보기용 접근 경로
app.use('/image', express.static('./upload'));

// *********************************************************

// 로그인
app.get('/api/login', async (req, res) => {
    const { user_id, user_pw } = req.body;

    try {
        
    } catch (error) {
        
    }
});


// *********************************************************

app.get('/users', (req, res) => {
    connection.query(
        "SELECT * FROM users;",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

// *********************************************************


app.listen(port, () => console.log(`Listening on port ${port}`));