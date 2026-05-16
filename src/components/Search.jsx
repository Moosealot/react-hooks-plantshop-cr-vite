function Search({ search, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;