import React from 'react';
import { Button, ButtonGroup, Dialog, TextField } from '@material-ui/core';
import axios from 'axios';

const styles = {
    mainOpenBtn: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "32px",
        padding: '10px 50px 10px 50px',
    },
    m15: {
        margin: '15px'
    },
    p50: {
        padding: "15px 50px"
    },
    bgc: {
        backgroundColor: '#212121'
    }
}

let loginInfo = {
    user_id: '',
    user_pw: ''
};

export default function SignIn(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const changeInfo = (e) => {
        e.target.id.indexOf('id') !== -1 ? loginInfo.user_id = e.target.value : loginInfo.user_pw = e.target.value;
    };

    const loginMsg = () => {
        // axios.post(
        //     '/api/login',
        //     {
        //         user_id: loginInfo.user_id,
        //         user_pw: loginInfo.user_pw
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // axios.post('/login', )
    }

    return (
        <div>
            {/* 오픈 버튼 */}
            <Button style={styles.mainOpenBtn} variant="contained" color="primary" onClick={handleClickOpen}>
                {props.btnName}
            </Button>

            {/* 내용 */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="SignIn-dialog-title"
                aria-describedby="SignIn-dialog-description"
            >

                {/* 로그인 폼 */}
                <TextField
                    id="filled-id-input"
                    label="Id"
                    type="id"
                    autoComplete="current-id"
                    variant="outlined"
                    style={styles.m15}
                    onChange={changeInfo}
                />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    style={styles.m15}
                    onChange={changeInfo}
                />

                <ButtonGroup>
                    <Button style={styles.p50} onClick={loginMsg} variant="text" color="primary" autoFocus>{props.btnTrue}</Button>
                    <Button style={styles.p50} onClick={loginMsg} variant="text" color="primary">{props.btnFalse}</Button>
                </ButtonGroup>
            </Dialog>

        </div>
    );
}
