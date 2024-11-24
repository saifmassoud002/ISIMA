import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "../src/data/Screen/ProductDetailScreen";
import ProductsScreen from "../src/data/Screen/ProductsScreen";
import ShoppingCart from "../src/data/Screen/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Products Screen */}
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                style={{ flexDirection: "row", marginRight: 10 }}
                onPressIn={() => navigation.navigate("Cart")}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>3</Text>
              </Pressable>
            ),
          })}
        />
        {/* Product Detail Screen */}
        <Stack.Screen
          name="Product Detail"
          component={ProductDetailScreen}
          options={{ presentation: "modal" }}
        />
        {/* Shopping Cart Screen */}
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
