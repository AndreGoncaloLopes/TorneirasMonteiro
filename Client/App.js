import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const [masterData, setMasterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((response) => {
          setFilteredData(response);
          setMasterData(response);
        })
        .catch((err) => console.log(err));
    };
    fetchPosts();
  }, []);

  const onPress = (id) => {
    console.log(id);
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <Text style={styles.itemStyle}>
          {item.id} . {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "#c8c8c8" }} />
    );
  };

  const searchFilter = (text) => {
    text = text.toLowerCase();
    if (text.trim()) {
      const newData = masterData.filter((item) => {
        return (
          item.name.toLowerCase().includes(text) ||
          item.username.toLowerCase().includes(text)
        );
      });
      setFilteredData(newData);
    } else {
      setFilteredData(masterData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          // value={search}
          placeholder="nome ou referência..."
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={ItemView}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 100,
  },
  itemStyle: {
    padding: 20,
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "white",
  },
});

export default App;
