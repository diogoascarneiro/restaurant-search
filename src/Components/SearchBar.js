import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ searchQuery, onQueryChange }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={onQueryChange}
        placeholder="Search restaurants"
        placeholderTextColor="#FFFFFF82"
        autoCapitalize="none"
        autoCorrect={false}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "violet",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
  },
  input: {
    borderLeftColor: "white",
    borderLeftWidth: 1,
    color: "white",
    marginLeft: 10,
    paddingLeft: 10,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
  },
});

export default SearchBar;
