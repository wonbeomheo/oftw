import '/src/assets/css/header.css';
import Weather from "./Weather.jsx";

const Header = () => {
    return <>
        <header className="h-10 mt-3">
            <nav className="flex flex-row justify-between">
                <span className="flex text-base sm:text-xl lg:text-2xl text-logo font-bold font-normal items-center text-center text-white pl-3 sm:pl-6">
                    OFTW
                </span>
                <Weather/>
            </nav>
        </header>
    </>
}

export default Header