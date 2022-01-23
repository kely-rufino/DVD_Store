function FilterGenre({ onChange, selectedGenre }) {
  const allGenres = [
    "Documentary",
    "Sci-Fi",
    "Drama",
    "Action",
    "Crime",
    "Thriller",
    "Adventure",
    "Fantasy",
    "Comedy",
    "Musical",
    "Romance",
    "War",
    "Horror",
    "Animation",
    "IMAX",
    "Children",
    "Western",
    "Film-Noir",
    "Mystery",
  ];
  return (
    <select name="G" id="genre" onChange={(e) => onChange(e.target.value)}>
      {selectedGenre === " " ? <option>Select a genre</option> : null}
      {allGenres.map((genre) => (
        <option value={genre} key={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default FilterGenre;
