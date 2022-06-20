import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import MaterialDetailsScreen from "./src/screens/MaterialDetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="MaterialDetailsScreen"
          component={MaterialDetailsScreen}
          options={{
            title: "Descrição do Material",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
