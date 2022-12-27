import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import useResults from "../../hooks/useResults";

const SearchScreen = () => {
  const [getResults, results, errorMsg] = useResults();
  const [searchQuery, setSearchQuery] = useState("");

  const onQueryChange = (query) => {
    setSearchQuery(query);
  };

  const onQuerySubmit = (query) => {
    getResults(query);
  };

  return (
    <View>
      <SearchBar
        searchQuery={searchQuery}
        onQueryChange={onQueryChange}
        onQuerySubmit={() => onQuerySubmit(searchQuery)}
      />
      {errorMsg && <Text>{errorMsg}</Text>}
      <Text>There are {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
