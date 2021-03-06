import "./weatherInfo.css";

export const WeatherInfo = ({ weatherInfo, loading }) => {
  const { name, weather, main } = weatherInfo;

  if (weatherInfo.message) {
    return (
      <div>
        <h2>Ciudad no encontrada, intentalo otra vez</h2>
        <ol className="list list-group mb-3">
          Posibles motivos por lo que no se encontró la ciudad:
          <li className="list-group-item mt-2">La ciudad no existe</li>
          <li className="list-group-item">Se escribió con mala ortografía</li>
        </ol>
      </div>
    );
  }

  return (
    <div className="text-center">
      {loading ? (
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div
          className="card text-black mt-2"
        >
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="time"
            className="bg-dark card-img-top img"
          />
          <div className="card-body mt-2">
            <div className="text-center">
              <h2 className="card-title">{name}</h2>
            </div>
            <div>
              <p className="card-text">Descripción: {weather[0].description}</p>
              <p className="card-text">Temperatura: {main.temp} </p>
              <p className="card-text">Temperatura minima: {main.temp_min} </p>
              <p className="card-text">Temperatura Maxima: {main.temp_max} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
