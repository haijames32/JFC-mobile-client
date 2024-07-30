import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { myFonts, WINDOW_WIDTH } from "../../../utils"
import { Icon, Icons } from "../../../components"


const Input = ({
   width = WINDOW_WIDTH * 0.8,
   height = 55,
   isTrim = false,
   isRightIcon = false,
   placeholder = '',
   ...props
}) => {
   return (
      <View style={[styles.container, { width: width, height: height }]}>
         <TextInput
            {...props}
            style={[styles.input, props.style]}
            onChangeText={value => props.onChangeText && props.onChangeText(isTrim ? value.trim() : value)}
            placeholder={placeholder} />
         {isRightIcon &&
            <TouchableOpacity
               style={styles.rightIcon}>
               <Icon type={Icons.Ionicons}
                  name={'eye-off-outline'}
                  size={20} />
            </TouchableOpacity>
         }
      </View>
   )
}

export default Input

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
   },
   rightIcon: {
      height: '100%',
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   }
})