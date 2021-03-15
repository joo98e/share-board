
import React, { Component } from "react";
import { Button, ButtonGroup, Dialog, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

import '../css/Home.css';
import '../css/main.css'

const styles = theme => ({
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
})

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // dialog
            open: false,
            user_id: '',
            user_pw: ''
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClickClose = () => {
        this.setState({
            open: false
        });
    }

    handleValueChange = (e) => {
        let nextState = {}

        nextState[e.target.name] = e.target.value;

        this.setState(nextState);
    }

    SignIn = () => {
        const url = '/login';
        const formData = new FormData();
        formData.append('user_id', this.state.user_id);
        formData.append('user_pw', this.state.user_pw);

        return axios.post(url, formData);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button className={classes.mainOpenBtn} variant="contained" color="primary" onClick={this.handleClickOpen}>Sign In</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClickClose}
                    aria-labelledby="SignIn-dialog-title"
                    aria-describedby="SignIn-dialog-description"
                >
                    {/* 로그인 폼 */}
                    <TextField
                        onChange={this.handleValueChange}
                        name ="user_id"
                        id="filled-id-input"
                        label="Id"
                        type="id"
                        autoComplete="current-id"
                        variant="outlined"
                        className={classes.m15}
                    />
                    <TextField
                        onChange={this.handleValueChange}
                        name ="user_pw"
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        className={classes.m15}
                    />

                    <ButtonGroup>
                        <Button className={classes.p50} variant="text" color="primary">로그인</Button>
                        <Button className={classes.p50} variant="text" color="primary">아이디 / 비밀번호 찾기</Button>
                    </ButtonGroup>

                </Dialog>
            </div>
        )
    }
}


export default withStyles(styles)(SignIn);
