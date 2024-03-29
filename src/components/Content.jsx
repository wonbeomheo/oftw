import Card from "./Card.jsx";
import "/src/assets/css/style.css";

const Content = ({children}) => {
    return (
        <section className="content-wrapper m-4 sm:mx-10 overflow-scroll scrollbar-hide">
            {children}
        </section>
    );
}

export default Content