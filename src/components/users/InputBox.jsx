import {forwardRef, useState} from "react";

const InputBox = forwardRef(function InputBox(props, ref) {
    const errorClass = props.isValid === false ? 'text-red-300' : 'text-green-300';
    const messageClass = props.message === '' ? 'invisible' : '';

    return (
        <div className="mb-4 flex flex-col w-80 gap-2 text-sm sm:text-base">
            <div className="text-white text-sm sm:text-base items-center cursor-default">{props.title}</div>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2.5">
                    <input id={props.id} className="flex-1 p-2 px-3" placeholder={props.placeholder}
                           type={props.type} onChange={props.onChange} onKeyDown={props.onKeyDown}
                           autoComplete={props.type === "password" ? "current-password" : "disabled"}/>
                    {props.buttonTitle !== undefined && props.buttonClass !== undefined &&
                        <div className={`w-full ${props.buttonClass} text-white/80
                        rounded-lg text-center p-2 cursor-pointer`}>{props.buttonTitle}</div>}
                </div>
                <div className={`${messageClass} ${errorClass}`}>{props.message}</div>
            </div>
        </div>
    );
});
export default InputBox