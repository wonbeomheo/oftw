import {useState} from "react";
import ButtonModal from "./ButtonModal.jsx";
import ButtonModalContent from "./ButtonModalContent.jsx";

const Footer = () => {

    const [open, setOpen] = useState(false);

    const onClickButton = () => {
        const brModal = document.getElementById('br-modal');
        setOpen(true);
        brModal.classList.toggle('translate-y-6');
    }

    return <>
        <footer className="flex justify-end mt-3 mb-4 mr-4">
            <ButtonModal open={open} onClose={() => {
                const brModal = document.getElementById('br-modal');
                setOpen(false);
                brModal.classList.toggle('translate-y-6');
            }
            }>
                <ButtonModalContent/>
            </ButtonModal>
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