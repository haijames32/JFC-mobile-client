import logo from '../../../assets/images/logo-app.png'
import { Image, StyleSheet, Text, View } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../../utils"
import { Icon, Icons } from '../../../components'
import { useNavigation } from '@react-navigation/native'


const Header = ({ name = '' }) => {
   const navigation = useNavigation()
   return (
      <View style={styles.container}>
         <View style={styles.boxLogo}>
            <Image
               style={styles.logo}
               source={logo} />
         </View>
         <Text style={styles.txtName}>{name}</Text>

         <View style={styles.boxIcon}>
            <View>
               <Icon
                  type={Icons.MaterialCommunityIcons}
                  name='bell'
                  color={myColors.textWhile}
                  size={25}
                  onPress={() => console.log('Notification')} />
               <View style={styles.number}>
                  <Text style={styles.txtNumber}>2</Text>
               </View>
            </View>
            <View>
               <Icon
                  name='cart'
                  color={myColors.textWhile}
                  size={25}
                  onPress={() => navigation.navigate('Cart')} />
               <View style={styles.number}>
                  <Text style={styles.txtNumber}>2</Text>
               </View>
            </View>
         </View>
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH,
      height: 75,
      flexDirection: 'row',
      backgroundColor: myColors.primary,
      alignItems: 'center',
      paddingHorizontal: 10
   },
   boxLogo: {
      height: 45,
      width: 45,
      borderRadius: 50,
      backgroundColor: myColors.textWhile,
      alignItems: 'center',
      justifyContent: 'center'
   },
   logo: {
      height: 40,
      width: 40,
      borderRadius: 50
   },
   txtName: {
      fontFamily: myFonts.semiBold,
      fontSize: 19,
      color: myColors.textWhile,
      width: WINDOW_WIDTH * 0.63,
      paddingStart: 10
   },
   boxIcon: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
   },
   number: {
      position: 'absolute',
      top: -10,
      right: -10,
      height: 18,
      width: 18,
      borderRadius: 1000,
      backgroundColor: myColors.primary2,
      alignItems: 'center',
      justifyContent: 'center'
   },
   txtNumber: {
      fontFamily: myFonts.medium,
      fontSize: 13,
      color: myColors.textBlack
   },
})