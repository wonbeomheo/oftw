import InputBox from "./InputBox.jsx";
import Content from "../Content.jsx";
import {useState} from "react";
import axios from "axios";

const Registration = () => {
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

    function validateId(id) {
        setId(id);
        id.length > 0 ? setIdIsValid(true) : setIdIsValid(false);
    }
    function validateEmail(email) {
      let isValid = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (isValid) {
        setEmail(email);
        setEmailIsValid(true);
        setEmailMessage("Email is valid.")
      } else {
        setEmailMessage("Invalid email address");
        setEmailIsValid(false);
      }
    }

    const onChanges = {
        "userId": validateId,
        "email": validateEmail,
        "password": setPassword,
        "password2": setPassword2
    }

    const onChange = (event) => {
        onChanges[event.target['id']](event.target.value);
    }

    return (
        <Content center="flex flex-col items-center" isForm={true}>
            <InputBox id="userId" title="User ID" placeholder="Enter user id" value={id} type="text" message={idMessage} isValid={idIsValid} buttonTitle="Validate" onChange={onChange}/>
            <InputBox id="email" title="Email" placeholder="Enter your email" value={email} type="text" message={emailMessage} isValid={emailIsValid} buttonTitle="Verify" onChange={onChange} />
            <InputBox id="password" title="Password" placeholder="Enter password" type="password" onChange={onChange}/>
            <InputBox id="password2" title="Confirm Password" placeholder="Enter password" type="password" onChange={onChange}/>
            <div className="mt-8 w-full bg-gray-500 size-10 rounded-lg flex justify-center items-center cursor-pointer"
                 onClick={() => {
                console.log('clicked');
            }}>
                <span>Sign Up</span>
            </div>
        </Content>
    );
};

export default Registration