import { StyleSheet, Text, View } from "react-native"
import FastImage from "react-native-fast-image"
import { myColors, myFonts, WINDOW_WIDTH } from "../utils"
import { Button } from "../components"

const Product = ({ image, name, price, onPress }) => {
   return (
      <View style={styles.container}>
         <View>
            <FastImage
               style={styles.img}
               source={{ uri: image }} />
         </View>
         <View style={styles.containerRight}>
            <Text style={[styles.font, styles.txtName]}>{name}</Text>
            <Text style={[styles.font, styles.txtPrice]}>{price} đ</Text>
            <Button
               style={styles.btn}
               title="MUA NGAY"
               onPress={onPress} />
         </View>
      </View>
   )
}

export default Product

const styles = StyleSheet.create({
   container: {
      height: 150,
      width: WINDOW_WIDTH - 20,
      borderRadius: 15,
      marginTop: 15,
      flexDirection: 'row',
      backgroundColor: myColors.textWhile,
   },
   img: {
      width: 150,
      height: 150,
      borderRadius: 15,
   },
   containerRight: {
      paddingHorizontal: 10,
      flex: 1,
      borderRadius: 15,
      justifyContent: 'center'
   },
   font: {
      fontFamily: myFonts.extraBold
   },
   txtName: {
      fontSize: 16,
      color: myColors.textBlack
   },
   txtPrice: {
      fontSize: 15,
      color: myColors.primary
   },
   btn: {
      width: 140,
      height: 45,
      marginTop: 10,
   }
})