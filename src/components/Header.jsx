import '/src/assets/css/header.css';
import Weather from "./Weather.jsx";

const Header = () => {
    return <>
        <header>
            <nav className="text-logo font-bold font-normal size-4 flex align-middle text-center text-white">OFTW</nav>
            <Weather />
        </header>
    </>
}

export default Header