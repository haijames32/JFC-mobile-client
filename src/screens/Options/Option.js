import logo from '../../assets/images/logo-app.png'
import { Image, StyleSheet, Text, View } from "react-native"
import { myColors, myFonts } from '../../utils'
import { Icon, Icons, ItemOption } from '../../components'
import { useNavigation } from '@react-navigation/native'


const Option = () => {
   const navigation = useNavigation()



   return (
      <View style={styles.container}>
         <Icon
            style={styles.btnBack}
            name='arrow-back-circle'
            size={30} />
         <View style={styles.containerTop}>
            <View style={styles.containerImg}>
               <Image
                  style={styles.logo}
                  source={logo} />
            </View>
            <Text style={styles.nameUser}>Hải James</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
               <Text style={styles.fontLexend}>Chỉnh sửa tài khoản</Text>
               <Icon
                  name='arrow-forward-circle'
                  size={20}
                  color={myColors.textWhile} />
            </View>
         </View>

         <View style={styles.containerItem}>
            <ItemOption
               iconName='receipt'
               title='Thông tin tài khoản'
               onPress={() => navigation.navigate('Profile')} />
            <ItemOption
               iconName='receipt'
               title='Voucher của tôi' />
            <ItemOption
               iconName='receipt'
               title='Danh sách đơn hàng'
               onPress={() => navigation.navigate('Order')} />
            <ItemOption
               iconName='location-sharp'
               title='Địa chỉ giao hàng'
               onPress={() => navigation.navigate('Address')} />
            <ItemOption
               iconName='settings'
               title='Cài đặt'
               onPress={() => navigation.navigate('Settings')} />
         </View>
      </View>
   )
}

export default Option

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: myColors.primary
   },
   btnBack: {
      position: 'absolute',
      left: 20,
      top: 20
   },
   containerImg: {
      backgroundColor: myColors.textWhile,
      borderRadius: 1000,
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      width: 150,
      marginTop: 20
   },
   logo: {
      height: 120,
      width: 120,
   },
   containerTop: {
      alignItems: 'center'
   },
   fontLexend: {
      fontFamily: myFonts.medium,
      fontSize: 16,
      color: myColors.textWhile
   },
   nameUser: {
      marginTop: 15,
      fontFamily: myFonts.bold,
      fontSize: 25,
      color: myColors.textWhile
   },
   containerItem: {
      marginTop: 30
   },
})