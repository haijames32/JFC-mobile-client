import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import { myColors, myFonts, WINDOW_WIDTH } from "../../../utils"
import { Icon, Icons } from "../../../components/index"

const OptionItem = ({
   title = '',
   onPress,
   iconType = Icons.Ionicons,
   iconName = '',
   ...props }) => {
   return (
      <TouchableOpacity
         {...props}
         activeOpacity={0.5}
         onPress={onPress}
         style={styles.container}>
         <View style={styles.boxIcon}>
            <Icon
               type={iconType}
               name={iconName}
               color={myColors.textWhile}
               size={15} />
         </View>
         <Text style={styles.title}>{title}</Text>
         <Icon
            name="chevron-forward-outline"
            size={23} />
      </TouchableOpacity>
   )
}

export default OptionItem

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH,
      paddingVertical: 20,
      backgroundColor: myColors.textWhile,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 25,
      borderBottomWidth: 0.3,
      borderBottomColor: myColors.textBlackHint
   },
   boxIcon: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: myColors.primary
   },
   title: {
      fontFamily: myFonts.medium,
      fontSize: 16,
      color: myColors.textBlackHint,
      paddingHorizontal: 20,
      width: WINDOW_WIDTH * 0.78,
   },
})