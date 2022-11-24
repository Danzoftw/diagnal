const Movie = (sub, index) => {
  const subData = sub.sub;
  return subData.map((item) => (
    <div className="movie-container pb-5" key={index}>
      <div className="movie-image">
        <img
          className="w-100"
          src={
            item["poster-image"]
              ? item["poster-image"]
              : "/images/placeholder_for_missing_posters.png"
          }
          alt="poster-img"
        />
      </div>
      <div className="movie-name pt-2">
        <p className="text-start">{item.name}</p>
      </div>
    </div>
  ));
};

export default Movie;
