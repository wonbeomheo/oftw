import '/src/assets/css/header.css';
import Weather from "./Weather.jsx";

const Header = () => {
    return <>
        <header className="h-10 mt-20">
            <nav className="flex flex-row justify-between">
                <span className="flex text-base sm:text-xl lg:text-2xl text-logo font-bold font-normal items-center text-center text-white pl-6 sm:pl-10">
                    OFTW
                </span>
                <Weather/>
            </nav>
        </header>
    </>
}

export default Header