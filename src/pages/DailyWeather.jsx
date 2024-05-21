import Search from "../components/Search";
import Weather from "../components/Weather";


function DailyWeather() {
  return (
    <div className="coniner">
        <div className="row">
            <div className="col-12 card">
                <h2 className="crad-title mt-3">Daily Weather App</h2>
                <br/>
                <Search />
                <Weather />
                <footer>https://aminprofessional.com/</footer>
            </div>
        </div>
    </div>
  )
}

export default DailyWeather;