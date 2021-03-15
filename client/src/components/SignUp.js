import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
    hidden: {
        display: 'none'
    },
    mainOpenBtn: {
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "18px",
        color: "#fff"
    },
    pd: {
        padding: "0 180px 0 20px",
    },
    mtb15: {
        margin: "15px 0"
    },
});

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            fileName: '',
            user_id: '',
            user_pw: '',
            user_name: '',
            user_email: '',
            user_phone: '',
            user_gender: '',
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            fileName: '',
            user_id: '',
            user_pw: '',
            user_name: '',
            user_email: '',
            user_phone: '',
            user_gender: '',
            open: false
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.SignUp()
            .then((response) => {
                console.log(response.data);

                // 전송 이 후 값 초기화
                this.setState({
                    file: null,
                    fileName: '',
                    user_id: '',
                    user_pw: '',
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    user_gender: '',
                    open: 'false'
                });

                // 전송 알람
                alert('가입이 완료되었습니다.');
            })
            .catch((error) => {
                console.log(error);
            });

        // window.location.reload();
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        });

        console.log(e.target)
        console.log(e.target.value)
        console.log(e.target.files[0]);
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    SignUp = () => {
        const url = '/api/SignUp';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('user_id', this.state.user_id);
        formData.append('user_pw', this.state.user_pw);
        formData.append('user_name', this.state.user_name);
        formData.append('user_email', this.state.user_email);
        formData.append('user_phone', this.state.user_phone);
        formData.append('user_gender', this.state.user_gender);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        return axios.post(url, formData, config);

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button className={classes.mainOpenBtn} variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    Sign Up
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>회원가입</DialogTitle>
                    <DialogContent className={classes.pd}>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="secondary" component="span" name="file">
                                {this.state.fileName === "" ? "프로필 이미지 선택" : "선택 완료!"}
                            </Button>
                        </label>
                        <br />
                        <TextField className={classes.mtb15} variant="outlined" helperText="" label="아이디" type="text" name="user_id" value={this.state.user_id} onChange={this.handleValueChange} /><br />
                        <TextField className={classes.mtb15} variant="outlined" helperText="" label="비밀번호" type="password" name="user_pw" value={this.state.user_pw} onChange={this.handleValueChange} /><br />
                        <TextField className={classes.mtb15} variant="outlined" helperText="" label="성명" type="text" name="user_name" value={this.state.user_name} onChange={this.handleValueChange} /><br />
                        <TextField className={classes.mtb15} variant="outlined" helperText="" label="이메일" type="text" name="user_email" value={this.state.user_email} onChange={this.handleValueChange} /><br />
                        <TextField className={classes.mtb15} variant="outlined" helperText="ex) 010-xxxx-xxxx" label="번호" type="text" name="user_phone" value={this.state.user_phone} onChange={this.handleValueChange} /><br />
                        <TextField className={classes.mtb15} variant="outlined" helperText="" label="성별" type="text" name="user_gender" value={this.state.user_gender} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="secondary" onClick={this.handleFormSubmit}>
                            가입하기
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={this.handleClose}>
                            닫기
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}

export default withStyles(styles)(SignUp);
