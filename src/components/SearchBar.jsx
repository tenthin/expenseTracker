function SearchBar({searchText, setSearchText}) {
  return (
    <form className="mt-9 lg:w-[450px] m-auto mb-5">
      <input
        type="text"
        placeholder="Search Activity"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="h-9 w-full border px-2 rounded-lg"
      />
    </form>
  );
}

export default SearchBar;
