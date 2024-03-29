import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/users/Registration.jsx";
import Card from "./components/Card.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/users/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route
                    path="/" element={<Main/>} errorElement={<ErrorPage/>}/>
                <Route path="/users/register" element={<Registration/>} errorElement={<ErrorPage/>}/>
                <Route path="/users/login" element={<Login/>} errorElement={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
