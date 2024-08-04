import React, { StyleSheet, Text, TouchableOpacity } from "react-native"
import { myColors, myFonts, WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils"

const Button = ({
   title = '',
   onPress,
   textColor = myColors.textWhile,
   ...props
}) => {
   return (
      <TouchableOpacity
         {...props}
         style={[
            styles.container,
            props.style,
         ]}
         onPress={onPress}>
         <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
   )
}

export default Button

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH * 0.5,
      height: 55,
      borderRadius: 7,
      backgroundColor: myColors.primary,
      justifyContent: 'center',
      alignItems: 'center',
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
      fontFamily: myFonts.bold,
      fontSize: 17,
      color: myColors.textWhile
   }
})