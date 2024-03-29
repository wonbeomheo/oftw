import {Link} from "react-router-dom";

const ModalContent = () => {
    return (
        <div className="flex flex-col columns-2">
            <Link to="/users/register">
                <div className="bg-gray-600">{"Sign Up"}</div>
            </Link>
            <Link to="/users/login">
                <div className="bg-gray-600">{"Sign In"}</div>
            </Link>
        </div>
    );
};

export default ModalContent