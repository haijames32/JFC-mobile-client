import { useNavigation, useRoute } from "@react-navigation/native"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { myColors, myFonts, WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils"
import { formatPrice } from "../../services/FormatPrice"
import { Button, Icon, Icons } from "../../components"
import FastImage from "react-native-fast-image"
import { useEffect, useMemo, useState } from "react"

const ProductDetails = () => {
   const navigation = useNavigation()
   const { name, price, image } = useRoute().params?.item
   const [state, setState] = useState({
      quantity: 1,
      total: 0
   })



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

   const componentButton = useMemo(() => {
      return (
         <View style={styles.boxBtn}>
            <Button
               style={[styles.btn, { backgroundColor: '#F67B50' }]}
               title="THÊM VÀO GIỎ"
               sizeTitle={13}
               onPress={() => console.log('Thêm giỏ hàng')} />
            <Button
               style={styles.btn}
               title="THANH TOÁN NGAY"
               sizeTitle={13}
               onPress={() => console.log('Thanh toán ngay')} />
         </View>
      )
   }, [])

   useEffect(() => {
      setState(pre => ({ ...pre, total: pre.quantity * price }))
   }, [state.quantity])


   return (
      <View style={styles.container}>
         {componentInfoProduct}
         <View style={styles.containerDescription}>
            <ScrollView>
               <View style={styles.boxQuantity}>
                  <TouchableOpacity
                     disabled={state.quantity === 1 ? true : false}
                     onPress={() => setState(pre => ({ ...pre, quantity: pre.quantity - 1 }))}
                     activeOpacity={0.5}
                     style={[styles.btnUpDown, { opacity: state.quantity === 1 ? 0.7 : 1 }]}>
                     <Icon
                        disabled
                        type={Icons.FontAwesome6}
                        name="minus"
                        color={myColors.textWhile}
                        size={20} />
                  </TouchableOpacity>
                  <View style={styles.boxTxtQuantity}>
                     <Text style={styles.txtQuantity}>{state.quantity}</Text>
                  </View>
                  <TouchableOpacity
                     onPress={() => setState(pre => ({ ...pre, quantity: pre.quantity + 1 }))}
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

         <View style={styles.containerBottom}>
            <View style={styles.boxTotal}>
               <Text style={styles.txtTongCong}>Tổng Cộng :</Text>
               <Text style={[styles.font, { color: myColors.primary }]}>{formatPrice(state.total)} đ</Text>
            </View>
            {componentButton}
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
      top: 33,
      zIndex: 1
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
      flex: 1,
   },
   boxQuantity: {
      width: WINDOW_WIDTH,
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 10,
      marginTop: 25,
   },
   btnUpDown: {
      height: 45,
      width: 48,
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
      width: 90,
      height: 48,
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
   },
   containerBottom: {
      height: WINDOW_HEIGHT * 0.18,
      width: WINDOW_WIDTH,
      position: 'static',
      bottom: 0,
      right: 0,
      borderTopWidth: 1,
      borderTopColor: myColors.primary,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: myColors.textWhile
   },
   boxTotal: {
      width: '100%',
      flexDirection: 'row',
      paddingTop: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   txtTongCong: {
      fontFamily: myFonts.light,
      color: myColors.textBlack,
      fontSize: 17
   },
   boxBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10
   },
   btn: {
      width: (WINDOW_WIDTH / 2) - 30,
      height: 47,
      borderRadius: 10
   }
})