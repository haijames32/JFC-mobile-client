import { StyleSheet, View, ImageBackground } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../utils"
import { Header } from "../../components"
import { FlashList } from "@shopify/flash-list"
import CategoryItem from "./components/CategoryItem"
import { useNavigation } from "@react-navigation/native"

const Category = () => {
   const navigation = useNavigation()
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
      <ImageBackground
         source={require('../../assets/images/img-background.jpg')}
         style={styles.container}>
         <Header
            title="Thực Đơn"
            isIconCart />
         <FlashList
            data={data}
            estimatedItemSize={WINDOW_WIDTH / 2}
            numColumns={2}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 8 }}
            renderItem={({ item }) => (
               <CategoryItem
                  name={item.name}
                  image={item.image}
                  onPress={() => {
                     navigation.navigate('CategoryDetails', { name: item.name })
                  }} />
            )}
         />
      </ImageBackground>

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