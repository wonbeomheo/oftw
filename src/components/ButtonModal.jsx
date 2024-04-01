const ButtonModal = ({open, onClose, children}) => {
    return (
        // backdrop
        <div onClick={onClose}
             className={`absolute top-0 left-0 h-screen w-screen flex justify-center items-center 
             transition-colors ${open ? "visible bg-black/60" : "invisible"}`}>
            <div id="br-modal" className="fixed bottom-16 right-4 transition ease-out duration-500 translate-y-6">
                {children}
            </div>
        </div>
    );
};

export default ButtonModal

