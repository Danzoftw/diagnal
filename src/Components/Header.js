import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieName, getMovieList, getFilteredMovies } from "../reducer";

const Header = () => {
  const dispatch = useDispatch();
  const movieSelector = useSelector((state) => state);
  const { movieName, movieData } = movieSelector;
  const [input, setInput] = useState("");

  var reg = /^\d+$/;

  const handleSearch = (e) => {
    // if (e.target.value === "") return;
    // setInput(e.target.value);
    dispatch(getMovieName(e.target.value));
    // console.log(e.target.value);
  };

  const handleClick = () => {
    // dispatch(getMovieName(input));
    dispatch(getFilteredMovies(movieName));
  };

  // useEffect(() => {
  //   handleClick();
  // }, []);

  // console.log(movieData);
  return (
    <header className="position-relative">
      <div className="container">
        <div className="row">
          <section className="header-section position-relative">
            <div
              style={{ backgroundImage: `url("/images/nav_bar.png")` }}
              className="nav-image position-absolute bg-image-prop left top right bottom"
            ></div>
          </section>
          <section className="nav-section position-absolute w-100">
            <div className="nav-main d-flex align-items-center">
              <div className="back-button">
                <img className="w-100" src="/images/Back.png" alt="back-img" />
              </div>
              <div className="col-6 ms-4">
                <div className="input-box">
                  <input
                    className="w-100"
                    onChange={handleSearch}
                    type="text"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="search-btn">
                  <p onClick={handleClick}>search</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
