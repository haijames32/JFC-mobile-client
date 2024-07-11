import { StyleSheet, TextInput, View } from "react-native"
import { WINDOW_WIDTH } from "../utils"


const Input = ({
   placeholder,
   onChangeText,
   value,
   ...props
}) => {
   return (
      <View style={styles.container}>
         <TextInput
            {...props}
            style={[styles.input, props.style]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value} />
      </View>
   )
}

export default Input

const styles = StyleSheet.create({
   container: {
      marginVertical: 5
   },
   input: {
      width: WINDOW_WIDTH * 0.7,
      height: 45,
      borderRadius: 10,
      alignItems: 'center',
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 1,
   }
})