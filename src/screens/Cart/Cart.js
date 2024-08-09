import { StyleSheet, Text, View } from "react-native"
import { myColors, myFonts, WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils"
import { useMemo, useState } from "react"
import { Button, Icon, ListEmpty } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import CartItem from "./components/CartItem"
import { formatPrice } from "../../services/FormatPrice"

const Cart = () => {
   const navigation = useNavigation()
   const [total, setTotal] = useState(0)

   const data = [
      { id: 1, name: 'Gà giòn vãi ò', price: 33000, quantity: 1, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 2, name: 'Gà giòn vãi ò', price: 33000, quantity: 1, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 3, name: 'Gà giòn vãi ò', price: 33000, quantity: 1, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 4, name: 'Gà giòn vãi ò', price: 33000, quantity: 1, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
   ]


   const componentHeader = useMemo(() => {
      return (
         <View style={styles.viewHeader}>
            <Icon
               name="close-circle"
               color={myColors.primary}
               size={45}
               onPress={() => navigation.goBack()} />
            <Text style={[styles.font, { color: myColors.textBlack, fontSize: 22 }]}>GIỎ HÀNG</Text>
            <View style={{ width: 45 }}></View>
         </View>
      )
   }, [])

   const componentButton = useMemo(() => {
      return (
         <View style={styles.boxBtn}>
            <Button
               style={[styles.btn, { backgroundColor: myColors.primary2 }]}
               title="THÊM MÓN"
               textColor={myColors.textBlack}
               sizeTitle={14}
               onPress={() => console.log('Chọn món')} />
            <Button
               style={styles.btn}
               title="THANH TOÁN"
               sizeTitle={14}
               onPress={() => console.log('Thanh toán')} />
         </View>
      )
   }, [])


   return (
      <View style={styles.container}>
         <View style={styles.content}>
            {componentHeader}
            <FlashList
               data={data}
               showsVerticalScrollIndicator={false}
               contentContainerStyle={{ paddingTop: 5 }}
               estimatedItemSize={350}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                  <CartItem
                     key={item.id}
                     name={item.name}
                     price={item.price}
                     image={item.image}
                     quantity={item.quantity} />
               )}
               ListEmptyComponent={() =>
                  <ListEmpty
                     title="Không có sản phẩm" />
               } />
            <View style={styles.containerBottom}>
               <View style={styles.boxTotal}>
                  <Text style={styles.txtTongCong}>Tổng Cộng :</Text>
                  <Text style={[styles.font, { color: myColors.primary, fontSize: 18 }]}>{formatPrice(total)} đ</Text>
               </View>
               {componentButton}
            </View>
         </View>
      </View>
   )
}

export default Cart

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "rgba(0,0,0,0.5)",
   },
   content: {
      backgroundColor: myColors.textWhile,
      width: WINDOW_WIDTH * 0.85,
      height: WINDOW_HEIGHT * 0.6,
      borderRadius: 20
   },
   viewHeader: {
      width: '100%',
      height: '14%',
      backgroundColor: myColors.primary2,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   font: {
      fontFamily: myFonts.extraBold
   },
   containerBottom: {
      position: 'static',
      bottom: 0,
      right: 0,
      height: '23%',
      borderTopWidth: 1,
      padding: 10,
   },
   boxTotal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   txtTongCong: {
      fontFamily: myFonts.regular,
      fontSize: 16,
      color: myColors.textBlack
   },
   boxBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15
   },
   btn: {
      width: 150,
      height: 50
   }
})