import { StyleSheet, Text, View } from "react-native"
import { WINDOW_HEIGHT, WINDOW_WIDTH, myColors, myFonts } from "../utils"
import { Icon, Icons } from "./index"
import { useNavigation } from "@react-navigation/native"

const Header = ({ title, isHideCart }) => {
   const navigation = useNavigation()
   return (
      <View style={styles.container}>
         <Icon type={Icons.Ionicons} name='arrow-back-circle' size={30} color='#fff' onPress={() => navigation.goBack()} />
         <Text style={styles.title}>{title}</Text>
         {isHideCart ? (
            <Icon type={Icons.Ionicons} name='cart' size={30} color='#fff' />
         ) : (
            null
         )}

      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   container: {
      height: WINDOW_HEIGHT * 0.1,
      backgroundColor: myColors.primary,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
   },
   title: {
      fontSize: 18,
      color: '#fff',
      fontFamily: myFonts.bold
   }
})