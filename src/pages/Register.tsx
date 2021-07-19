import React from 'react';
import AuthButton from "../components/AuthButton";
import RegularText from "../components/RegularText";
import {colors} from "../styles/variables";
import AuthForm from "../components/AuthForm";
import TextInput from "../components/TextInput";

const Register = () => {
    return (
        <AuthForm title={'Registration'}>
            <form action="#">
                <TextInput title={'username'} type={'text'}/>
                <TextInput title={'e-mail'} type={'text'}/>
                <TextInput title={'password'} type={'password'}/>
                <TextInput title={'confirm password'} type={'password'}/>
            </form>
            <AuthButton>
                <RegularText color={colors.white}>Register</RegularText>
            </AuthButton>
        </AuthForm>
    );
};

export default Register;