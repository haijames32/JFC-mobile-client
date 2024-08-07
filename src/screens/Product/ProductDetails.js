import { useNavigation, useRoute } from "@react-navigation/native"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../utils"
import { formatPrice } from "../../services/FormatPrice"
import { Icon, Icons } from "../../components"
import FastImage from "react-native-fast-image"
import { useMemo, useState } from "react"

const ProductDetails = () => {
   const navigation = useNavigation()
   const { name, price, image } = useRoute().params?.item
   const [quantity, setQuantity] = useState(1)


   const componentInfoProduct = useMemo(() => {
      return (
         <View style={styles.containerTitle}>
            <Icon
               style={styles.btnBack}
               name='arrow-back-circle'
               size={30}
               onPress={() => navigation.goBack()} />
            <FastImage
               style={styles.img}
               source={{ uri: image }} />
            <View style={styles.boxInfoProd}>
               <Text style={[styles.font, { color: myColors.textBlack }]}>{name}</Text>
               <Text style={[styles.font, { color: myColors.primary }]}>{formatPrice(price)} đ</Text>
            </View>
         </View>
      )
   }, [])


   return (
      <View style={styles.container}>
         {componentInfoProduct}
         <View style={styles.containerDescription}>
            <ScrollView>
               <View style={styles.boxQuantity}>
                  <TouchableOpacity
                     disabled={quantity === 1 ? true : false}
                     onPress={() => setQuantity(quantity - 1)}
                     activeOpacity={0.5}
                     style={[styles.btnUpDown, { opacity: quantity === 1 ? 0.6 : 1 }]}>
                     <Icon
                        disabled
                        type={Icons.FontAwesome6}
                        name="minus"
                        color={myColors.textWhile}
                        size={20} />
                  </TouchableOpacity>
                  <View style={styles.boxTxtQuantity}>
                     <Text style={styles.txtQuantity}>{quantity}</Text>
                  </View>
                  <TouchableOpacity
                     onPress={() => setQuantity(quantity + 1)}
                     activeOpacity={0.5}
                     style={styles.btnUpDown}>
                     <Icon
                        disabled
                        type={Icons.FontAwesome6}
                        name="plus"
                        color={myColors.textWhile}
                        size={20} />
                  </TouchableOpacity>
               </View>
            </ScrollView>
         </View>

      </View>
   )
}

export default ProductDetails

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: myColors.background
   },
   containerTitle: {
      paddingTop: 30,
      backgroundColor: myColors.textWhile,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 3,
   },
   btnBack: {
      position: 'absolute',
      left: 15,
      top: 33
   },
   img: {
      width: WINDOW_WIDTH,
      height: 350,
   },
   boxInfoProd: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: WINDOW_WIDTH,
      padding: 15,
   },
   font: {
      fontFamily: myFonts.bold,
      fontSize: 20
   },
   containerDescription: {
      backgroundColor: myColors.textWhile,
      marginTop: 10,
      height: 200
   },
   boxQuantity: {
      width: WINDOW_WIDTH,
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 10,
   },
   btnUpDown: {
      height: 45,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: myColors.primary,
      borderRadius: 8
   },
   boxTxtQuantity: {
      width: 70,
      height: '100%',
      borderWidth: 1,
      borderRadius: 10,
      marginHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center'
   },
   txtQuantity: {
      fontFamily: myFonts.medium,
      fontSize: 16,
      color: myColors.textBlack
   }
})