import { StyleSheet, Text, View } from "react-native"
import { Icon, Icons } from './index'
import { myColors, myFonts } from '../utils/index'

const ListEmpty = ({ title = '' }) => {
   return (
      <View style={styles.container}>
         <Icon
            disabled
            type={Icons.Ionicons}
            name="warning-outline"
            size={80}
            color={myColors.textHint} />
         <Text style={styles.title}>{title}</Text>
      </View>
   )
}

export default ListEmpty

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      paddingTop: 70
   },
   title: {
      fontSize: 16,
      fontFamily: myFonts.medium,
      color: myColors.textHint
   }
})