import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../../utils"

const OptionItem = ({ name = '', image, onPress }) => {
   return (
      <TouchableOpacity
         style={styles.container}
         onPress={onPress}
         activeOpacity={0.5}>
         <Image
            style={styles.img}
            source={image} />
         <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
   )
}

export default OptionItem

const styles = StyleSheet.create({
   container: {
      width: (WINDOW_WIDTH / 2) - 20,
      height: 90,
      borderRadius: 15,
      backgroundColor: myColors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 7
   },
   img: {
      height: 50,
      width: 50,
      borderRadius: 20
   },
   title: {
      fontFamily: myFonts.bold,
      fontSize: 15,
      color: myColors.textWhile
   }
})