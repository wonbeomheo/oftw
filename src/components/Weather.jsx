import {useEffect, useState} from "react";

const Weather = () => {
    const [city, setCity] = useState("Seoul");
    const [res, setRes] = useState({});
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER;

    useEffect(() => {
        selectCity();
    }, [city]);

    const onChangeCity = (event) => {
        setCity(event.target.value);
    }

    const selectCity = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=en`
        )
            .then((response) => response.json())
            .then((response) => {
                setRes({...response});
                console.log(res);
            });
    };

    return <>
        <div>
            <h3>Forecast</h3>
            <select name="cities" id="weather_city" onChange={onChangeCity}>
                <option value="Seoul">Seoul</option>
                <option value="Busan">Busan</option>
            </select>
        </div>
        <div>
            <span className="weather__temp">{Object.keys(res).includes('main') ? `${res.main.temp} °C` : null}</span>
            <div className="weather__icon">
                <img
                    src={Object.keys(res).includes('weather') ? `https://openweathermap.org/img/wn/${res.weather[0].icon}.png` : null}
                    alt={Object.keys(res).includes('weather') ? res.weather[0].description : null}
                    loading="lazy"
                />
            </div>
        </div>
    </>;
}

export default Weather