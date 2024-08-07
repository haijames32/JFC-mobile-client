import { StyleSheet, Text, View } from "react-native"
import { myColors, myFonts, WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils"
import { useMemo } from "react"
import { Icon, ListEmpty } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import CartItem from "./components/CartItem"

const Cart = () => {
   const navigation = useNavigation()

   const data = [
      { id: 1, name: 'Gà giòn vãi ò', price: 33000, quantity: 1, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 2, name: 'Gà giòn vãi ò', price: 33000, quantity: 1, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
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


   return (
      <View style={styles.container}>
         <View style={styles.content}>
            {componentHeader}
            <FlashList
               data={data}
               showsVerticalScrollIndicator={false}
               contentContainerStyle={{ paddingVertical: 5 }}
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

   }
})