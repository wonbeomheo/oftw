import Content from "../Content.jsx";
import InputBox from "./InputBox.jsx";

const Login = () => {
    return (
        <Content center="pt-20 flex flex-col items-center" isForm={true}>
            <InputBox title="User ID" type="text" placeholder="Enter user id"/>
            <InputBox title="Password" type="password" placeholder="Enter your password"/>
            <div className="flex justify-center items-center bg-black/80 size-10 rounded-lg w-full mt-8">
                <span>Sign In</span>
            </div>
        </Content>
    );
};

export default Login