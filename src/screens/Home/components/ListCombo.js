import { StyleSheet, View } from "react-native"
import { WINDOW_WIDTH } from "../../../utils"
import { FlashList } from "@shopify/flash-list"
import Product from "../../../items/Product"

const ListCombo = ({ listProduct = [] }) => {
   return (
      <View style={styles.container}>
         <FlashList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            data={listProduct}
            estimatedItemSize={WINDOW_WIDTH - 20}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <Product
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  onPress={() => console.log(item.id)} />
            )}
         />
      </View>
   )
}

export default ListCombo

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH,
   }
})