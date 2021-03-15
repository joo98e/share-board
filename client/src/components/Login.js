
import React, { Component } from "react";

import SignIn from './SignIn';
import SignUp from './SignUp';

class Login extends Component {
    
    render() {

        return (
            <div>

                {/* 로그인 버튼 */}
                <SignIn />

                {/* 회원가입 버튼 */}
                
                <SignUp />
                
            </div>
        )
    }
}

export default Login;