const Modal = ({open, onClose, children}) => {
    return (
        // backdrop
        <div onClick={onClose}
             className={`fixed inset-0 flex justify-center items-center 
             transition-colors ${open ? "visible bg-black opacity-60" : "invisible"}`}>
            {children}
        </div>
    )
};

export default Modal

