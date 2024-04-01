import InputBox from "./InputBox.jsx";
import Content from "../Content.jsx";
import {useState} from "react";

const Registration = () => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onChanges = {
        "userId": setUserId,
        "email": setEmail,
        "password": setPassword,
        "password2": setPassword2
    }

    const onChange = (event) => {
        onChanges[event.target['id']](event.target.value);
    }

    return (
        <Content center="flex flex-col items-center" isForm={true}>
            <InputBox id="userId" title="User ID" placeholder="Enter user id" value={userId} type="text" buttonTitle="Validate" onChange={onChange}/>
            <InputBox id="email" title="Email" placeholder="Enter your email" value={email} type="text" buttonTitle="Verify" onChange={onChange}/>
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