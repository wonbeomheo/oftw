import InputBox from "./InputBox.jsx";
import Content from "../Content.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Registration = () => {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PASSWD_REGX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    const [id, setId] = useState('');
    const [idMessage, setIdMessage] = useState('');
    const [idIsValid, setIdIsValid] = useState(false);

    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);

    const [password2, setPassword2] = useState('');
    const [password2Message, setPassword2Message] = useState('');
    const [password2IsValid, setPassword2IsValid] = useState(false);

    function validateId(value) {
        setId(() => value);
        value.length > 0 ? setIdIsValid(true) : setIdIsValid(false);
        checkButtonActive();
        console.log(id);
    }

    function validateEmail(email) {
        let isValid = String(email)
            .toLowerCase()
            .match(EMAIL_REGEX);
        if (isValid) {
            setEmail(email);
            setEmailIsValid(true);
            setEmailMessage("Email is valid.")
        } else {
            setEmailMessage("Invalid email address");
            setEmailIsValid(false);
        }
        checkButtonActive();
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    function onChangePassword2(event) {
        setPassword2(event.target.value);

    }

    function checkButtonActive() {
        if (idIsValid && emailIsValid && passwordIsValid && password2IsValid) {
            return "bg-black/80";
        } else {
            return "bg-gray-500";
        }
    }

    function checkPasswords() {
        if (password !== password2) {
            setPasswordIsValid(false);
            setPassword2IsValid(false);
            setPasswordMessage("Password does not match");
            setPassword2Message("Password does not match");
        } else {
            setPasswordIsValid(true);
            setPassword2IsValid(true);
            setPasswordMessage("");
            setPassword2Message("");
        }
    }

    useEffect(() => {
        if (password.length === 0) {
            setPasswordIsValid(false)
            setPasswordMessage("");
            checkPasswords();
        } else {
            if (String(password).match(PASSWD_REGX)) {
                if (password.length < 8) {
                    setPasswordIsValid(false);
                    setPasswordMessage("Password must be at least 8 characters");
                } else {
                    checkPasswords();
                }
            } else {
                setPasswordIsValid(false);
                setPasswordMessage("Password must contain at least a lowercase, a uppercase and a numeric character");
            }
        }
        checkButtonActive();
    }, [password]);

    useEffect(() => {
        if (password2.length === 0) {
            setPassword2IsValid(false)
            setPassword2Message("");
            checkPasswords();
        } else {
            if (String(password2).match(PASSWD_REGX)) {
                if (password2.length < 8) {
                    setPassword2IsValid(false);
                    setPassword2Message("Password must be at least 8 characters");
                } else {
                    checkPasswords();
                }
            } else {
                setPassword2IsValid(false);
                setPassword2Message("Password must contain at least a lowercase, a uppercase and a numeric character");
            }
        }
        checkButtonActive();
    }, [password2])

    return (
        <Content center="pt-20 flex flex-col items-center" isForm={true}>
            <InputBox id="userId" title="User ID" placeholder="Enter user id" value={id} type="text" message={idMessage}
                      isValid={idIsValid} buttonTitle="Validate" onChange={validateId}/>
            <InputBox id="email" title="Email" placeholder="Enter your email" value={email} type="text"
                      message={emailMessage} isValid={emailIsValid} buttonTitle="Verify" onChange={validateEmail}/>
            <InputBox id="password" title="Password" placeholder="Enter password" type="password"
                      value={password} message={passwordMessage} isValid={passwordIsValid} onChange={onChangePassword}/>
            <InputBox id="password2" title="Confirm Password" placeholder="Enter password" type="password"
                      value={password2} message={password2Message} isValid={password2IsValid} onChange={onChangePassword2}/>
            <div
                className={`mt-8 w-full ${checkButtonActive()} size-10 rounded-lg flex justify-center items-center cursor-pointer`}
                onClick={() => {
                }}>
                <span>Sign Up</span>
            </div>
        </Content>
    );
};

export default Registration