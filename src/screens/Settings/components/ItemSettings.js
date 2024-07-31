import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../../utils/index"
import { Icon } from "../../../components/index"

const ItemSettings = ({
   title = '',
   onPress,
   ...props }) => {
   return (
      <TouchableOpacity
         {...props}
         onPress={onPress}
         style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <Icon
            name="chevron-forward-outline"
            size={20} />
      </TouchableOpacity>
   )
}

export default ItemSettings

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH,
      paddingVertical: 20,
      backgroundColor: myColors.textWhile,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 10,
      borderBottomWidth: 0.3,
      borderBottomColor: myColors.textBlackHint
   },
   title: {
      fontFamily: myFonts.medium,
      fontSize: 16,
      color: myColors.textBlackHint,
      paddingHorizontal: 20,
      width: WINDOW_WIDTH * 0.88
   },
})