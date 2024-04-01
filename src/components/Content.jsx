import "/src/assets/css/style.css";

const Content = ({center = "", isForm = false, children}) => {
    return (
        <section className={`content-wrapper m-4 sm:mx-10 overflow-scroll scrollbar-hide ${center}`}>
            {isForm !== false ? <form>{children}</form> : children}
        </section>
    );
}

export default Content