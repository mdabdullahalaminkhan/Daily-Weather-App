import { useDispatch } from 'react-redux';
import { newCity } from '../react-redux/state/citySlice';

function Search() {
  let inputtedValue = "";


  const dispatch = useDispatch();

  const onInputChange = (event) => {
    inputtedValue = event.target.value;
  };

  const onButtonClick = () => {
    dispatch(newCity(inputtedValue));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            placeholder="Enter your current city or country name"
            className="form-control my-3 mx-4"
            onChange={onInputChange}
          />
        </div>
        <div className="col-2 col-md-2 col-sm-12">
          <button
            onClick={onButtonClick}
            className="btn btn-md btn-primary my-3"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;

