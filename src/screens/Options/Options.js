import logo from '../../assets/images/logo-app.png'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { myColors, myFonts } from '../../utils'
import { Icon, Icons, ItemOption } from '../../components'
import { useNavigation } from '@react-navigation/native'


const Options = () => {
   const navigation = useNavigation()



   return (
      <View style={styles.container}>
         <Icon
            style={styles.btnBack}
            name='arrow-back-circle'
            size={30}
            color={myColors.background}
            onPress={() => navigation.goBack()} />
         <View style={styles.containerTop}>
            <View style={styles.containerImg}>
               <Image
                  style={styles.logo}
                  source={logo} />
            </View>
            <Text style={styles.nameUser}>Hải James</Text>
            <TouchableOpacity
               style={styles.boxEdit}
               onPress={() => navigation.navigate('EditProfile')}>
               <Text style={styles.fontLexend}>Chỉnh Sửa Tài Khoản</Text>
               <Icon
                  style={{ marginLeft: 3 }}
                  name='arrow-forward-circle'
                  size={20}
                  color={myColors.textWhile} />
            </TouchableOpacity>
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

export default Options

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: myColors.primary
   },
   btnBack: {
      position: 'absolute',
      left: 15,
      top: 33
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
      fontSize: 14,
      color: myColors.textWhile
   },
   nameUser: {
      marginTop: 15,
      fontFamily: myFonts.bold,
      fontSize: 25,
      color: myColors.textWhile
   },
   boxEdit: {
      marginTop: 5,
      flexDirection: 'row',
      paddingHorizontal: 3,
   },
   containerItem: {
      marginTop: 30
   },
})