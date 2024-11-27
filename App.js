import { StyleSheet } from "react-native";
import Navigation from "./src/navigation"; // Ensure this path is correct
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
