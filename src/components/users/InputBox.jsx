import {forwardRef} from "react";

const InputBox = forwardRef(function InputBox(props, ref) {
    return (
        <div className="flex flex-col gap-2 text-sm sm:text-base justify-center items-center">
            <div className="text-white text-sm sm:text-base text-center items-center cursor-default">{'User ID'}</div>
            <div className="input-box-content">
                <div className="input-box-body">
                    <input className="input-box-input" />
                    <div className="input-box-button">{'Validate'}</div>
                </div>
                <div className="input-box-message">{'Valid!'}</div>
            </div>
        </div>
    );
});
export default InputBox