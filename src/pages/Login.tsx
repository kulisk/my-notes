import React from 'react';
import {useDispatch} from "react-redux";
import {login} from '../reducers/UserReducer'

const Login = () => {
    const dispatch = useDispatch()

    function onLoginClick() {
        dispatch(login())
    }

    return (
        <div>
            <button onClick={() => onLoginClick()}>Login</button>
        </div>
    );
};

export default Login;