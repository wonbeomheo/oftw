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

    useEffect(() => {
        if (email.length !== 0) {
            let isValid = String(email)
                .toLowerCase()
                .match(EMAIL_REGEX);
            if (isValid) {
                setEmailIsValid(true);
                setEmailMessage("");
            } else {
                setEmailMessage("Invalid email address");
                setEmailIsValid(false);
            }
        } else {
            setEmailMessage("");
            setEmailIsValid(false);
        }
    }, [email]);

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
    }, [password2])

    return (
        <Content center="pt-20 flex flex-col items-center" isForm={true}>
            <InputBox id="userId" title="User ID" placeholder="Enter user id" value={id} type="text" message={idMessage}
                      isValid={idIsValid} buttonTitle="Validate" onChange={(event) => setId(event.target.value)}
                      buttonClass={id.length > 0 ? "bg-black/80" : "bg-gray-500"}
            />
            <InputBox id="email" title="Email" placeholder="Enter your email" value={email} type="text"
                      message={emailMessage} isValid={emailIsValid} buttonTitle="Verify" onChange={(event) => setEmail(event.target.value)}
                      buttonClass={emailIsValid ? "bg-black/80" : "bg-gray-500"}
            />
            <InputBox id="password" title="Password" placeholder="Enter password" type="password"
                      value={password} message={passwordMessage} isValid={passwordIsValid}
                      onChange={(event) => setPassword(event.target.value)}/>
            <InputBox id="password2" title="Confirm Password" placeholder="Enter password" type="password"
                      value={password2} message={password2Message} isValid={password2IsValid}
                      onChange={(event) => setPassword2(event.target.value)}/>
            <div
                className={`mt-8 w-full bg-black/80 size-10 rounded-lg flex justify-center items-center cursor-pointer`}
                onClick={() => {
                }}>
                <span>Sign Up</span>
            </div>
        </Content>
    );
};

export default Registration