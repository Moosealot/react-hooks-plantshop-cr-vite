function Search({ search, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search plants..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;