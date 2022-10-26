import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ItemList from "./components/ItemList";

export default function App() {
  // flexDirection : column, row, row-reverse, column-reverse
  // justifyContent(yatay): flex-start, flex-end, center, space-between, space-around
  //  flexWrap: no-wrap, wrap, wrap-reverse
  // alignItems(dikey): flex-start, flex-end, center, stretch

  const style = StyleSheet.create({
    title: {
      backgroundColor: "blue",
      padding: 10,
    },
    title_text: {
      color: "white",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "700",
    },
    input: {
      padding: 10,
      backgroundColor: "white",
      flex: 1,
    },
    button: {
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    add_button_text: {
      color: "#fff",
      alignItems: "center",
    },
    button_remove_all_item:{
      color: "#fff",
      textAlign:"center"
    }
  });

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSave = () => {
    data.push(text);
    setData(data);
    setText("");
  };

  const removeItem = (i) => {
    const arr = data.filter((item) => item !== i);
    setData(arr);
  };

  const removeAllItem = () => {
    setData([])
    alert("All deleted")
  }

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={style.title}>
        <Text style={style.title_text}>To-Do Application</Text>
      </View>
      <View
        style={{ backgroundColor: "#ccc", padding: 10, flexDirection: "row" }}
      >
        <TextInput
          value={text}
          style={style.input}
          onChangeText={(text) => setText(text)}
          placeholder="Input text..."
          autoFocus={true}
        />
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            handleSave();
            alert(text + " added");
          }}
        >
          <Text style={style.add_button_text}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 15 }}>
        {data.map((item, key) => (
          <ItemList
            key={key}
            text={item}
            handleRemoveItem={() => removeItem(item)}
          />
        ))}
      </View>
      {data.length !== 0 ? (
        <View>
          <TouchableOpacity style={style.button} onPress={()=>removeAllItem()}>
          <Text style={style.button_remove_all_item}>All deleted</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
