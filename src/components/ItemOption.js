import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../utils"
import { Icon, Icons } from "./index"

const ItemOption = ({
   title = '',
   onPress,
   iconType = Icons.Ionicons,
   iconName = '',
   ...props }) => {
   return (
      <TouchableOpacity
         {...props}
         onPress={onPress}
         style={styles.container}>
         <Icon
            type={iconType}
            name={iconName}
            color={myColors.primary}
            size={20} />
         <Text style={styles.title}>{title}</Text>
         <Icon
            name="chevron-forward-outline"
            size={20} />
      </TouchableOpacity>
   )
}

export default ItemOption

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH,
      paddingVertical: 20,
      backgroundColor: myColors.textWhile,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 25,
      borderBottomWidth: 0.3,
      borderBottomColor: myColors.blackHint
   },
   title: {
      fontFamily: myFonts.medium,
      fontSize: 16,
      color: myColors.blackHint,
      paddingHorizontal: 25,
      width: WINDOW_WIDTH * 0.8
   },
})