import { Modal, StyleSheet, Text, ActivityIndicator, View } from "react-native"
import { WINDOW_WIDTH, myColors, myFonts } from "../../utils"

const Loading = () => {
   return (
      <Modal
         visible
         transparent>
         <View style={styles.centeredView}>
            <View style={styles.modalView}>
               <ActivityIndicator
                  size="large"
                  style={styles.loading}
                  color={myColors.primary} />
               <Text style={styles.message}>Loading...</Text>
            </View>
         </View>
      </Modal>
   )
}

export default Loading

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(0,0,0,0.4)",
   },
   modalView: {
      width: WINDOW_WIDTH * 0.35,
      backgroundColor: myColors.primary2,
      borderRadius: 15,
      paddingVertical: 20,
      paddingHorizontal: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   message: {
      fontSize: 16,
      marginTop: 7,
      fontFamily: myFonts.medium,
      color: myColors.textBlack
   }
})