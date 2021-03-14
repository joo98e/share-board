import React from 'react';
import { Button, ButtonGroup, Dialog, TextField } from '@material-ui/core';
import { post } from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: null,
            profileImageFileName: '',
            user_id: '',
            user_pw: '',
            user_name: '',
            user_email: '',
            user_phone: '',
            user_gender: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.SignUp()
            .then((response) => {
                console.log(response.data);

                // 전송 이 후 값 초기화
                this.setState({
                    profileImage: null,
                    profileImageFileName: '',
                    user_id: '',
                    user_pw: '',
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    user_gender: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
            
        // window.location.reload();
    }

    handleFileChange = (e) => {
        this.setState({
            profileImage : e.target.files[0],
            profileImageFileName : e.target.value
        });
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    SignUp = () => {
        const url = '/api/SignUp';
        const formData = new FormData();
        formData.append('image', this.state.profileImage);
        formData.append('user_id', this.state.user_id);
        formData.append('user_pw', this.state.user_pw);
        formData.append('user_name', this.state.user_name);
        formData.append('user_email', this.state.user_email);
        formData.append('user_phone', this.state.user_phone);
        formData.append('user_gender', this.state.user_gender);

        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        };

        return post(url, formData, config);

    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                프로필 : <input type="file" name="file" file={this.state.profileImage} value={this.state.profileImageFileName} onChange={this.handleFileChange} /><br/>
                <TextField label="아이디" type="text" name="user_id" value={this.state.user_id} onChange={this.handleValueChange} /><br/>
                <TextField label="비밀번호" type="password" name="user_pw" value={this.state.user_pw} onChange={this.handleValueChange} /><br/>
                <TextField label="성명" type="text" name="user_name" value={this.state.user_name} onChange={this.handleValueChange} /><br/>
                <TextField label="이메일" type="text" name="user_email" value={this.state.user_email} onChange={this.handleValueChange} /><br/>
                <TextField label="번호" type="text" name="user_phone" value={this.state.user_phone} onChange={this.handleValueChange} /><br/>
                <TextField label="성별" type="text" name="user_gender" value={this.state.user_gender} onChange={this.handleValueChange} /><br/>
                {/* <Button>
                    Sign Up
                </Button> */}
                <Button type="submit">up</Button>


            </form>
        )
    }

}

export default SignUp;
