import React from 'react';
import AuthButton from "../components/AuthButton";
import RegularText from "../components/RegularText";
import {colors} from "../styles/variables";
import AuthForm from "../components/AuthForm";
import TextInputItem from "../components/TextInputItem";

const Register = () => {
    return (
        <AuthForm title={'Registration'}>
            <form action="#">
                <TextInputItem title={'username'} type={'text'}/>
                <TextInputItem title={'e-mail'} type={'text'}/>
                <TextInputItem title={'password'} type={'password'}/>
                <TextInputItem title={'confirm password'} type={'password'}/>
            </form>
            <AuthButton>
                <RegularText color={colors.white}>Register</RegularText>
            </AuthButton>
        </AuthForm>
    );
};

export default Register;