import { View, Text, StyleSheet } from "react-native";

const ItemList = ({text, handleRemoveItem}) => {
    return(
        <View style={[style.card, {flexDirection:"row"}]}>
            <Text>{text}</Text>
            <Text style={style.remove_button} onPress={()=>{
                handleRemoveItem()
                alert(text + " deleted")
                }}>X</Text>
        </View>
    )
}



const style = StyleSheet.create({
    card:{
        backgroundColor:"#ddd",
        padding: 10,
        margin: 5,
    },
    remove_button:{
        position: "absolute",
        right:0,
        padding:5,
        margin: 5
        
    }
})

export default ItemList