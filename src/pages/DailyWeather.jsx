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
                <footer> Copyright &copy; 2024. All rights are reserved by <a href= "https://aminprofessional.com/"> Md Abdullah Al Amin Khan </a></footer>
            </div>
        </div>
    </div>
  )
}

export default DailyWeather;
