import axios from "axios";
import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const MaterialDetailsScreen = ({ route }) => {
  const [details, setDetails] = useState(null);
  const {
    params: { paramKey },
  } = route;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${paramKey}`)
      .then((response) => setDetails(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Material Details : {paramKey} </Text>
        <Text> {details?.name} </Text>
        <Text> {details?.email} </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});

export default MaterialDetailsScreen;
