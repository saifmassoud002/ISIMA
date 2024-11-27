import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { purchasesadd, purchasesreduce } from "../store/productsSlice";

const CartListItem = () => {
  const dispatch = useDispatch();

  // Fetch purchases from the Redux store
  const purchases = useSelector((state) => state.purchases.products);

  // Increase quantity of a product
  const increaseQuantity = (product) => {
    dispatch(purchasesadd(product)); // Re-add the product to increase its quantity
  };

  // Decrease quantity of a product
  const decreaseQuantity = (product) => {
    dispatch(purchasesreduce(product.id)); // Use a reducer to decrease quantity
  };

  return (
    <FlatList
      data={purchases}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item}) => (
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.contentContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.size}>Size: 45</Text> {/* Add size if available */}

            <View style={styles.footer}>
              <Feather
                onPress={() => decreaseQuantity(item)}
                name="minus-circle"
                size={24}
                color="gray"
              />
              <Text style={styles.quantity}>{item.quantity || 1}</Text>
              <Feather
                onPress={() => increaseQuantity(item)}
                name="plus-circle"
                size={24}
                color="gray"
              />
              <Text style={styles.itemTotal}>
                ${item.price * (item.quantity || 1)}
              </Text>
            </View>
          </View>
        </View>
      )}
      ListEmptyComponent={
        <Text style={styles.emptyText}>Your cart is empty! 🛒</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
  emptyText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 50,
  },
});

export default CartListItem;
