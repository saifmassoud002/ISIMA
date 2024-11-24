import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import products from "../products"; 
import { useNavigation } from "@react-navigation/native";

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products} // Correctly passing product array
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Product Detail", { productId: item.id }) // Passing product ID as a param
          }
          style={styles .itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()} // Ensuring unique keys
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default ProductsScreen;
