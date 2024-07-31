import { StyleSheet, Text, View } from "react-native"
import { WINDOW_HEIGHT, WINDOW_WIDTH, myColors, myFonts } from "../utils"
import { Icon, Icons } from "./index"
import { useNavigation } from "@react-navigation/native"

const Header = ({ title = '', isIconCart = false }) => {
   const navigation = useNavigation()
   return (
      <View style={styles.container}>
         <Icon
            type={Icons.Ionicons}
            name='arrow-back-circle'
            size={30} color='#fff'
            onPress={() => navigation.goBack()} />
         <Text style={styles.title}>{title}</Text>
         {isIconCart ? (
            <View>
               <Icon
                  type={Icons.Ionicons}
                  name='cart' size={30}
                  color='#fff'
                  onPress={() => navigation.navigate('Cart')} />
               <View style={styles.numberCart}>
                  <Text style={styles.txtNumber}>2</Text>
               </View>
            </View>
         ) : (
            <View style={{ width: 30 }}></View>
         )}
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT * 0.11,
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
   },
   numberCart: {
      position: 'absolute',
      top: -8,
      right: -8,
      height: 20,
      width: 20,
      borderRadius: 1000,
      backgroundColor: myColors.primary2,
      alignItems: 'center',
      justifyContent: 'center'
   },
   txtNumber: {
      fontFamily: myFonts.medium,
      fontSize: 14,
      color: myColors.textBlack
   },
})