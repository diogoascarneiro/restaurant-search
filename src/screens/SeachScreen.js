import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <View>
      <SearchBar searchQuery={searchQuery} onQueryChange={onQueryChange} />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
