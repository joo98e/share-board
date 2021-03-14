
import React, { Component } from "react";

import SignIn from './SignIn';
import SignUp from './SignUp';

class Login extends Component {
    
    render() {

        return (
            <div>

                {/* 로그인 버튼 */}
                <SignIn 
                    btnName="Sign In" 
                    content="" 
                    btnTrue="로그인" 
                    btnFalse="아이디 / 비밀번호 찾기" 
                />

                {/* 회원가입 버튼 */}
                
                <SignUp 
                    btnName="Sign Up" 
                    content="" 
                    btnTrue="" 
                    btnFalse="" 
                />

            </div>
        )
    }
}

export default Login;