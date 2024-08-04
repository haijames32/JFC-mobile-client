import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { myFonts, WINDOW_WIDTH, myColors } from "../utils"

import { Icon } from '../components/index'
const InputIcon = ({
   width = WINDOW_WIDTH * 0.8,
   height = 55,
   isTrim = false,
   iconType,
   iconName = '',
   placeholder = '',
   onPressIcon,
   ...props
}) => {
   return (
      <View style={[styles.container, { width: width, height: height }]}>
         <TextInput
            {...props}
            value={props.value}
            style={[styles.input, props.style]}
            onChangeText={value => props.onChangeText && props.onChangeText(isTrim ? value.trim() : value)}
            placeholderTextColor={myColors.textHint}
            placeholder={placeholder} />
         <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPressIcon}
            style={styles.rightIcon}>
            <Icon type={iconType}
               name={iconName}
               size={20}
               color={myColors.textHint} />
         </TouchableOpacity>
      </View>
   )
}

export default InputIcon

const styles = StyleSheet.create({
   container: {
      marginVertical: 7,
      flexDirection: "row",
      backgroundColor: '#fff',
      borderRadius: 8,
      alignItems: "center",
      paddingStart: 5
   },
   input: {
      width: '87%',
      borderRadius: 8,
      alignItems: 'center',
      fontSize: 16,
      fontFamily: myFonts.medium,
      color: myColors.textBlack
   },
   rightIcon: {
      height: '100%',
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   }
})