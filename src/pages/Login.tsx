import React from 'react';
import {useDispatch} from "react-redux";
import {login} from '../reducers/UserReducer'
import AuthForm from "../components/AuthForm";
import AuthButton from "../components/AuthButton";
import {colors} from "../styles/variables";
import RegularText from "../components/RegularText";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../const/routes";
import SmallText from "../components/SmallText";
import TextInput from "../components/TextInput";

const Login = () => {
    const dispatch = useDispatch()

    function onLoginClick() {
        dispatch(login())
    }

    return (
        <AuthForm title={'Log in'}>
            <form action="#">
                <TextInput title={'login'} type={'text'}/>
                <TextInput title={'password'} type={'password'}/>
            </form>
            <AuthButton onClick={() => onLoginClick()}>
                <RegularText color={colors.white}>Log in</RegularText>
            </AuthButton>
            <div style={{
                marginTop: '30px',
                textAlign: 'center'
            }}>
                <NavLink to={REGISTRATION_ROUTE}
                         style={{textDecoration: 'none'}}>
                    <SmallText color={'#000'}>
                        Don’t have an account yet? Register
                    </SmallText>
                </NavLink>
            </div>
        </AuthForm>
    );
};

export default Login;