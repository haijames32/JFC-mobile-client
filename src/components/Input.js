import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { myFonts, WINDOW_WIDTH, myColors } from "../utils"


const Input = ({
   width = WINDOW_WIDTH * 0.8,
   height = 55,
   isTrim = false,
   placeholder = '',
   ...props
}) => {
   return (
      <TextInput
         {...props}
         style={[{ width: width, height: height }, styles.input, props.style]}
         onChangeText={value => props.onChangeText && props.onChangeText(isTrim ? value.trim() : value)}
         placeholderTextColor={myColors.textHint}
         placeholder={placeholder} />
   )
}

export default Input

const styles = StyleSheet.create({
   input: {
      marginVertical: 7,
      borderRadius: 8,
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      fontSize: 16,
      fontFamily: myFonts.medium,
      color: myColors.textBlack
      // shadowColor: '#000',
      // shadowOffset: {
      //    width: 0,
      //    height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 4,
      // elevation: 1,
   },
})