import { StyleSheet, Text, TouchableOpacity } from "react-native"
import FastImage from "react-native-fast-image"
import { myColors, myFonts, WINDOW_WIDTH } from "../../../utils"


const CategoryItem = ({ name, image, onPress }) => {
   return (
      <TouchableOpacity
         activeOpacity={0.5}
         style={styles.container}
         onPress={onPress}>
         <FastImage
            style={styles.img}
            source={{ uri: image }} />
         <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
   )
}

export default CategoryItem

const styles = StyleSheet.create({
   container: {
      backgroundColor: myColors.primary2,
      height: 195,
      width: WINDOW_WIDTH / 2 - 10,
      borderRadius: 10,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginStart: 5,
      marginTop: 8
   },
   img: {
      height: 120,
      width: 150,
      backgroundColor: '#fff',
      borderRadius: 15
   },
   title: {
      fontFamily: myFonts.bold,
      fontSize: 18,
      color: myColors.textBlack
   }
})