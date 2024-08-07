import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Button, Header, Icon, Icons } from "../../components"
import { useNavigation, useRoute } from "@react-navigation/native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../utils"
import { FlashList } from "@shopify/flash-list"
import Product from "../../items/Product"

const CategoryDetails = () => {
   const navigation = useNavigation()
   const { name } = useRoute().params

   const address = '100 Đường Ô Diên, Đội 2, Hạ Mỗ, Đan Phượng, Hà Nội'

   const data = [
      { id: 1, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 2, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 3, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 4, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 5, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 6, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 7, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 8, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 9, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
   ]


   return (
      <View style={styles.container}>
         <Header
            title="Chọn Món"
            isIconCart />

         <View style={styles.address}>
            <Text style={styles.giaoden}>Giao đến: </Text>
            <Text style={styles.txtAddress}
               numberOfLines={1}>{address}</Text>
            <View style={styles.boxIconEditAddress}>
               <Icon
                  type={Icons.AntDesign}
                  name="edit"
                  color={myColors.textBlack}
                  size={15}
                  onPress={() => console.log('Edit Address')} />
            </View>
         </View>

         <View style={styles.menu}>
            <Icon
               type={Icons.Foundation}
               name="list"
               color={myColors.primary}
               size={35}
               onPress={() => navigation.goBack()} />
            <Text style={styles.title}>{name}</Text>
            <View style={{ width: 30 }}></View>
         </View>

         <FlashList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
            estimatedItemSize={WINDOW_WIDTH - 20}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <Product
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  onPress={() => navigation.navigate('ProductDetails', { item })} />
            )}
         />
      </View>
   )
}

export default CategoryDetails

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   address: {
      width: WINDOW_WIDTH,
      height: 30,
      flexDirection: 'row',
      paddingHorizontal: 10,
      backgroundColor: myColors.primary,
      alignItems: 'center'
   },
   boxIconEditAddress: {
      marginLeft: 5,
      backgroundColor: myColors.primary2,
      alignItems: 'center',
      justifyContent: 'center',
      height: 22,
      width: 22,
      borderRadius: 50
   },
   menu: {
      width: WINDOW_WIDTH,
      height: 60,
      flexDirection: 'row',
      backgroundColor: myColors.textWhile,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15
   },
   title: {
      color: myColors.primary,
      fontFamily: myFonts.extraBold,
      fontSize: 18
   },
   giaoden: {
      fontFamily: myFonts.semiBold,
      fontSize: 16,
      color: myColors.textWhile,
   },
   txtAddress: {
      width: WINDOW_WIDTH * 0.7,
      fontFamily: myFonts.light,
      fontSize: 16,
      color: myColors.textWhile,
   }
})