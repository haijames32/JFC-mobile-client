import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../../utils"

const NewsItem = ({ title = '', image, color, onPress }) => {
   return (
      <TouchableOpacity
         onPress={onPress}
         activeOpacity={0.5}
         style={[styles.container, { backgroundColor: color }]}>
         <Image
            style={styles.img}
            source={image} />
         <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
   )
}

export default NewsItem

const styles = StyleSheet.create({
   container: {
      width: (WINDOW_WIDTH / 2) - 25,
      height: 160,
      borderRadius: 15,
      marginHorizontal: 5,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: myColors.primary,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 3,
   },
   img: {
      height: 70,
      width: 70,
      borderRadius: 10,
   },
   title: {
      fontFamily: myFonts.extraBold,
      fontSize: 17,
      color: myColors.textWhile
   },
})