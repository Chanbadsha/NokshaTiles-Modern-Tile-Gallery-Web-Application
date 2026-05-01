const SearchTiles = (searchName = "", tilesInfo = []) => {
  const query = searchName.toLowerCase();

  return tilesInfo.filter((tile) => tile?.title?.toLowerCase().includes(query));
};

export default SearchTiles;
