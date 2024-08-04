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
      height: 190,
      width: WINDOW_WIDTH / 2 - 8,
      borderRadius: 13,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
      marginTop: 8
   },
   img: {
      height: 130,
      width: 170,
      borderRadius: 15
   },
   title: {
      fontFamily: myFonts.bold,
      fontSize: 18,
      color: myColors.textBlack
   }
})