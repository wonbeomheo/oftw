import {useState} from "react";
import Modal from "./Modal.jsx";
import ModalContent from "./ModalContent.jsx";

const Footer = () => {

    const [open,setOpen] = useState(false);

    const onClickButton = () => {
        setOpen(true);
    }

    return <>
        <footer className="flex justify-end mt-3 mb-4 mr-4">
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalContent/>
            </Modal>
            <div
                className="flex size-10 border-solid border-white border-2 rounded-full justify-center items-center"
                onClick={onClickButton}
            >
                <div className="size-8 border-solid border-white border-4 rounded-full"></div>
            </div>
        </footer>
    </>
}

export default Footer