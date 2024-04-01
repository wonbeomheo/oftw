import {Link} from "react-router-dom";

const ButtonModalContent = () => {
    return (
        <div className="w-32 p-2 text-black select-none bg-gray-300 rounded-2xl rounded-br-3xl">
            <div className="flex flex-col columns-2">
                <Link to="/users/register">
                    <div className="bg-gray-300 text-gray-800 text-center">{"Sign Up"}</div>
                </Link>
                <Link to="/users/login">
                    <div className="bg-gray-300 text-gray-800 text-center">{"Sign In"}</div>
                </Link>
            </div>
        </div>
    );
};

export default ButtonModalContent