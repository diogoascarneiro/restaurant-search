import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="white" />
      <TextInput style={styles.input} placeholder="Search restaurants" placeholderTextColor="#FFFFFF82"></TextInput>
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
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderLeftColor: "white",
    borderLeftWidth: 1,
    color: "white",
    marginLeft: 10,
    paddingLeft: 10,
  },
});

export default SearchBar;
