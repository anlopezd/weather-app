import { useState } from "react";
import { WeatherInfo } from "./components/WeatherInfo";
import { useForm } from "./hooks/useForm";
import "./App.css"

function App() {
  const { formData, onChangeData, reset } = useForm({ search: "" });
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [loading, setLoading] = useState(false)

    const fetchWeather = async( name ) => {
      try {
        setLoading(true)
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q=${ name }&appid=79fe5ba0f50ca00652b1a3308f4b24a7`
        const resp = await fetch(url);
        const data = await resp.json();
        if(data){
          setLoading(false)
          setWeatherInfo(data)
        }

      } catch (error) {
        console.log(error)
        setWeatherInfo(null)
      }
    }
  const onSubmit = (e) => {
    e.preventDefault();
    if( formData.search.length === 0){
      return;
    }
    fetchWeather(formData.search.toLowerCase())
    reset()
  };

  return (
    <div className="App container-fluid bg-dark text-white">
      <div className="row">
      <h1>Weather App</h1>
      <hr />

      <form onSubmit={onSubmit} className="col-xs-12 col-xl-6">
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="Buscar..."
          value={formData.search}
          onChange={onChangeData}
          autoComplete="off"
        />
        <button type="submit" className="btn btn-outline-light mt-2">Buscar</button>
      </form>


      <div className="col-xs-12 col-xl-6">
      {weatherInfo !== null ? <WeatherInfo loading={loading} weatherInfo={weatherInfo} /> : <h2 className="text-white">Ciudad...</h2> }
      </div>
    </div>
    </div>
  );
}

export default App;
