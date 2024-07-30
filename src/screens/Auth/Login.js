import logo from '../../assets/images/logo-app.png'
import { Text, View, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import { Input, Button } from '../../components'
import PassInput from './components/PassInput'
import { myColors, myFonts, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
   const navigation = useNavigation()
   const handleLogin = () => {

   }
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Image
               source={logo}
               style={styles.logo} />
            <Text style={styles.title}>VUI LÒNG ĐĂNG NHẬP</Text>
            <Input
               placeholder='Username*'
               isTrim />
            <PassInput
               placeholder='Password*'
               isRightIcon
               isTrim />
            <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
               <Text style={[styles.fontLexend, styles.text]}>Quên mật khẩu?</Text>
            </Pressable>
         </View>

         <View style={styles.containerBottom}>
            <Button
               onPress={handleLogin}
               style={styles.btn}
               title='Đăng nhập' />
            <View style={styles.row}>
               <Text
                  style={[
                     styles.fontLexend,
                     { color: myColors.textBlack }
                  ]}>Tạo tài khoản mới?</Text>
               <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text
                     style={[
                        styles.fontLexend,
                        styles.textRegister
                     ]}>Đăng kí ngay</Text>
               </TouchableOpacity>
            </View>
         </View>

      </View>
   )
}

export default Login

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   fontLexend: {
      fontFamily: myFonts.medium,
      fontSize: 16,
   },
   containerTop: {
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT * 0.5,
      backgroundColor: myColors.primary,
      alignItems: 'center',
      paddingTop: 20
   },
   logo: {
      width: 150,
      height: 150,
      marginBottom: 10
   },
   title: {
      marginVertical: 10,
      fontFamily: myFonts.extraBold,
      fontSize: 24,
      color: myColors.textWhile,
   },
   text: {
      color: myColors.textWhile,
      marginTop: 15
   },
   containerBottom: {
      height: WINDOW_HEIGHT * 0.5,
      width: WINDOW_WIDTH,
      backgroundColor: myColors.background,
      alignItems: 'center'
   },
   btn: {
      width: WINDOW_WIDTH * 0.8,
      marginTop: 50
   },
   row: {
      fontFamily: myFonts.medium,
      flexDirection: 'row',
      marginTop: 20
   },
   textRegister: {
      color: myColors.textBlack,
      borderBottomWidth: 1,
      borderBottomColor: myColors.textBlack,
      marginLeft: 3
   },
})