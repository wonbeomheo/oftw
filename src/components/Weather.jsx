import {useState} from "react";

const Weather = () => {
    const [res, setRes] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const API_KEY = import.meta.env.VITE_OPEN_WEATHER;

    const selectCity = () => {
        fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=${API_KEY}&lang=en`
        )
            .then((response) => {
                setIsLoaded(() => {return true});
                response.json();
            })
            .then((response) => {
                setRes({...response});
            });
    };

    if(!isLoaded) {
        selectCity();
    }

    return <>
        <div className="flex pr-6 sm:pr-10">
            <div className="flex flex-col">
                <span id="weather__temp_max" className="text-sm sm:text-base text-right">{Object.keys(res).includes('main') ? `${res.main.temp_max} °C` : null}</span>
                <span id="weather__temp_min" className="text-sm sm:text-base text-right">{Object.keys(res).includes('main') ? `${res.main.temp_min} °C` : null}</span>
            </div>
            <div id="weather__icon">
                <img
                    className="max-h-10"
                    src={Object.keys(res).includes('weather') ? `https://openweathermap.org/img/wn/${res.weather[0].icon}.png` : null}
                    alt={Object.keys(res).includes('weather') ? res.weather[0].description : null}
                    loading="lazy"
                />
            </div>
            <div id="nav-date" className="flex flex-col">
                <span data-name="year" className="text-sm sm:text-base tracking-custom">2024</span>
                <span data-name="dates" className="flex-row text-sm sm:text-base">
                    <span data-name="month">03 | </span>
                    <span data-name="date" className="font-extrabold">24</span>
                </span>

            </div>
        </div>
    </>;
}

export default Weather