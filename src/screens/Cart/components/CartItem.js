import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../../utils"
import FastImage from "react-native-fast-image"
import { Icon, Icons } from "../../../components"
import { formatPrice } from "../../../services/FormatPrice"


const CartItem = ({ name, price, image, quantity, onDelete }) => {
   return (
      <View style={styles.container}>
         <FastImage
            style={styles.img}
            source={{ uri: image }} />
         <View style={styles.boxCenter}>
            <Text style={[styles.font, { color: myColors.textBlack, height: 40 }]}>{name}</Text>
            <Text style={styles.txt}>{name}</Text>
            <View style={styles.boxQuantity}>
               <TouchableOpacity
                  activeOpacity={0.5}
                  style={[styles.btnUpDown]}>
                  <Icon
                     disabled
                     type={Icons.FontAwesome6}
                     name="minus"
                     color={myColors.textWhile}
                     size={15} />
               </TouchableOpacity>
               <View style={styles.boxTxtQuantity}>
                  <Text style={styles.txtQuantity}>{quantity}</Text>
               </View>
               <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.btnUpDown}>
                  <Icon
                     disabled
                     type={Icons.FontAwesome6}
                     name="plus"
                     color={myColors.textWhile}
                     size={15} />
               </TouchableOpacity>
            </View>
         </View>
         <View style={styles.boxRight}>
            <Text style={[styles.font, { color: myColors.primary }]}>{formatPrice(price)} đ</Text>
            <View style={{
               width: '100%',
               alignItems: 'center',
               marginBottom: 5
            }}>
               <View style={styles.btnDelete}>
                  <Icon
                     disabled
                     name="trash-outline"
                     color={myColors.textBlack}
                     size={20} />
               </View>
            </View>

         </View>
      </View>
   )
}

export default CartItem

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: 100,
      borderBottomWidth: 0.5,
      marginVertical: 3,
      flexDirection: 'row',
      paddingHorizontal: 8,
      backgroundColor: myColors.textWhile
   },
   img: {
      height: 60,
      width: 60,
      borderRadius: 10,
   },
   font: {
      fontFamily: myFonts.extraBold,
      fontSize: 16
   },
   boxCenter: {
      paddingHorizontal: 5,
      width: '55%'
   },
   txt: {
      fontFamily: myFonts.regular,
      fontSize: 13,
      color: myColors.textBlack
   },
   boxQuantity: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 5
   },
   btnUpDown: {
      height: 32,
      width: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: myColors.primary,
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 3,
   },
   boxTxtQuantity: {
      width: 70,
      height: 32,
      borderWidth: 1,
      borderRadius: 7,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center'
   },
   txtQuantity: {
      fontFamily: myFonts.medium,
      fontSize: 16,
      color: myColors.textBlack
   },
   boxRight: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'column'
   },
   btnDelete: {
      height: 32,
      width: 32,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: myColors.primary2,
   }
})