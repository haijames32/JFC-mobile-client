import { StyleSheet, View, Image, Text } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../utils"
import { Header } from "../../components"
import { FlashList } from "@shopify/flash-list"
import FastImage from "react-native-fast-image"
import CategoryItem from "./components/CategoryItem"

const Category = () => {

   const data = [
      { id: 1, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 2, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 3, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 4, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 5, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 6, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 7, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 8, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 9, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 10, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 11, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 12, name: 'Gà giòn', image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
   ]

   return (
      <View style={styles.container}>
         <Header
            title="Thực Đơn"
            isIconCart />
         <FlashList
            data={data}
            estimatedItemSize={WINDOW_WIDTH / 2}
            numColumns={2}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingTop: 5, paddingBottom: 20 }}
            renderItem={({ item }) => (
               <CategoryItem
                  name={item.name}
                  image={item.image}
                  onPress={() => {
                     console.log(item.id);
                  }} />
            )}
            ListFooterComponent={() => {
               return (
                  <View style={{ width: WINDOW_WIDTH, alignItems: 'center', marginTop: 10 }}>
                     <Text style={styles.txtFooter}>Hết rồi</Text>
                  </View>

               )
            }}
         />
      </View>

   )
}

export default Category

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: myColors.background
   },
   txtFooter: {
      fontFamily: myFonts.medium,
      fontSize: 16,
      color: myColors.textBlackHint
   }
})