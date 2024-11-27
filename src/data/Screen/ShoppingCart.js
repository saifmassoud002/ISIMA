import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import CartListItem from "../../components/CartListItem";
import { memoizedPurchases } from "../../store/selectors";



const ShoppingCart = () => {
  // Access purchases from the Redux store
  
  const purchases = useSelector(memoizedPurchases);

  return (
    <View style={styles.container}>
      {purchases.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty! 🛒</Text>
      ) : (
        //TODO sala7 il mochkla mta3 il t3awid bili inti tmapi par id 
        //TODO tala3 il text string wen ili ytala3 fi 8alta minha 
        //TODO sala7 il numero ili yatla3 ba7tha il karousa
        
        <FlatList
          data={purchases}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
    marginTop: 50,
  },
});

export default ShoppingCart;
