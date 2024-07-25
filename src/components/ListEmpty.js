import { StyleSheet, Text, View } from "react-native"
import { Icon, Icons } from './index'
import { myColors, myFonts } from '../utils/index'

const ListEmpty = () => {
   return (
      <View style={styles.container}>
         <Icon
            type={Icons.Ionicons}
            name="warning-outline"
            size={80}
            color={myColors.textHint} />
         <Text style={styles.title}>Không có dữ liệu.</Text>
      </View>
   )
}

export default ListEmpty

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      paddingTop: 100
   },
   title: {
      fontSize: 16,
      fontFamily: myFonts.medium
   }
})