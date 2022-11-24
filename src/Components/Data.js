import Movie from "../Components/Movie";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMovieName, getMovieList, getFilteredMovies } from "../reducer";

const Data = () => {
  const API_URL_1 = "/api/CONTENTLISTINGPAGE-PAGE1.json";
  const API_URL_2 = "/api/CONTENTLISTINGPAGE-PAGE2.json";
  const API_URL_3 = "/api/CONTENTLISTINGPAGE-PAGE3.json";
  const dispatch = useDispatch();
  const movieSelector = useSelector((state) => state);
  const { movieName, movieData, filteredMovieData } = movieSelector;

  const finalData = movieName !== "" ? filteredMovieData : movieData;

  const [data, setData] = useState([]);

  const fetchNames = async () => {
    try {
      const res = await Promise.all([
        fetch(`${API_URL_1}`),
        fetch(`${API_URL_2}`),
        fetch(`${API_URL_3}`),
      ]);
      const data = await Promise.all(res.map((r) => r.json()));

      data.map((new_data, index) => setData([...data, `${new_data}`]));
    } catch {
      throw Error("Promise failed");
    }
  };

  useEffect(() => {
    fetchNames();
  }, []);

  useEffect(() => {
    const newData = data.slice(0, -1);
    dispatch(getMovieList(newData));
  }, [data]);

  return (
    <section className="content-section w-100 h-100 position-absolute">
      <div className="container">
        <div className="row">
          {finalData.map((item, index) => (
            <div className="col-4 view-box" key={index}>
              <Movie sub={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;
