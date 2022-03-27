import "./weatherInfo.css"

export const WeatherInfo = ({ weatherInfo, loading }) => {
  
    const { name, weather, main} = weatherInfo

    let img;

    if(weatherInfo.message){
        return (
            <div>
            <h2>Ciudad no encontrada, intentalo otra vez</h2>
            <ol className="list list-group mb-3">
                Posibles motivos por lo que no se encontró la ciudad:
                <li className="list-group-item mt-2">La ciudad no existe</li>
                <li className="list-group-item">Se escribió con mala ortografía</li>
            </ol>
            </div>
        )
    }

    switch (weather[0].description) {
        case "tormenta":
        img = "tormenta.jpg"    
        break;

        case "llovizna" && "llovizna ligera":
        img = "llovizna.jpg"
        break;

        default:
        img = "cloud.jpg"

    }

    return (
        <div className="text-center">
            {loading ? (
            <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
            <div className="card text-black">
                <img src={`imagenes/${img}`} alt="time" className="card-img-top img" />
            <div className="card-body">
                <div className="text-center">
                   <h2 className="card-title">{ name }</h2>
                </div>
                <div className="card-description">
                    <p className="card-text">Descripción: {weather[0].description}</p>
                    <p className="card-text">Temperatura: {main.temp} </p>
                    <p className="card-text">Temperatura minima: {main.temp_min} </p>
                    <p className="card-text">Temperatura Maxima: {main.temp_max} </p>
                </div>
            </div>
        </div>
        )}
        </div>
  

    )
}
