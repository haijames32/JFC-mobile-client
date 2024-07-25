import React, { StyleSheet, Text, TouchableOpacity } from "react-native"
import { myColors, WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils"

const Button = ({
   text,
   onPress,
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
         <Text style={[styles.title]}>{text}</Text>
      </TouchableOpacity>
   )
}

export default Button

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH * 0.5,
      height: 45,
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
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white'
   }
})