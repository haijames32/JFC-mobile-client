import logo from '../../assets/images/logo-app.png'
import { Image, StyleSheet, Text, View } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../utils"
import { Button, Icon, Icons, Input } from '../../components'
import PassInput from './components/PassInput'
import { Dropdown } from 'react-native-element-dropdown'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const Register = () => {
   const navigation = useNavigation()
   const [value, setValue] = useState('None')

   const gender = [
      { label: 'Giới tính', value: 'None' },
      { label: 'Nam', value: 'Male' },
      { label: 'Nữ', value: 'Female' },
   ]

   const handleRegister = () => {

   }

   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Image
               source={logo}
               style={styles.logo} />
            <Text style={styles.title}>ĐĂNG KÍ TÀI KHOẢN</Text>
         </View>

         <View style={styles.containerInput}>
            <Input
               placeholder='Name*'
               isTrim />
            <Input
               placeholder='Username*'
               isTrim />
            <Input
               placeholder='Email*'
               keyboardType="email-address"
               isTrim />
            <Input
               placeholder='Phone Number*'
               keyboardType="number-pad"
               maxLength={10}
               isTrim />
            <PassInput
               placeholder='Password*'
               isTrim
               isRightIcon />
            <PassInput
               placeholder='Confirm Password*'
               isTrim
               isRightIcon />

            <Dropdown
               style={styles.dropdown}
               placeholderStyle={styles.placeholderStyle}
               selectedTextStyle={styles.selectedTextStyle}
               inputSearchStyle={styles.inputSearchStyle}
               iconStyle={styles.iconStyle}
               data={gender}
               maxHeight={200}
               labelField="label"
               valueField="value"
               placeholder="Gender"
               searchPlaceholder="Search..."
               value={value}
               onChange={item => {
                  setValue(item.value);
               }}
            />
         </View>

         <View style={styles.containerBtn}>
            <Button
               onPress={() => navigation.goBack()}
               style={styles.btn}
               title='Đăng nhập'
               textColor={myColors.textBlack} />
            <Button
               onPress={handleRegister}
               style={styles.btn}
               title='Đăng kí'
               textColor={myColors.textBlack} />
         </View>

      </View>
   )
}

export default Register

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: myColors.primary
   },
   fontLexend: {
      fontFamily: myFonts.medium,
      fontSize: 16
   },
   logo: {
      width: 80,
      height: 80,
      marginBottom: 5
   },
   title: {
      marginVertical: 7,
      fontSize: 24,
      color: myColors.textWhile,
      fontFamily: myFonts.extraBold
   },
   containerTop: {
      alignItems: 'center',
      paddingTop: 20
   },
   containerInput: {

   },
   containerBtn: {
      width: WINDOW_WIDTH * 0.8,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20
   },
   btn: {
      backgroundColor: myColors.primary2,
      color: myColors.textBlack,
      width: WINDOW_WIDTH * 0.35
   },
   //Dropdown
   dropdown: {
      marginTop: 8,
      backgroundColor: myColors.textWhile,
      borderRadius: 8,
      height: 55,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
   },
   icon: {
      marginRight: 5,
   },
   placeholderStyle: {
      fontSize: 16,
      fontFamily: myFonts.medium
   },
   selectedTextStyle: {
      fontSize: 16,
      fontFamily: myFonts.medium,
      marginStart: 10
   },
   iconStyle: {
      width: 30,
      height: 30,
      marginEnd: 7
   },
   inputSearchStyle: {
      height: 40,
      fontSize: 16,
      fontFamily: myFonts.medium
   },
   placeholderStyle: {
      marginStart: 10,
      fontFamily: myFonts.medium
   }
})