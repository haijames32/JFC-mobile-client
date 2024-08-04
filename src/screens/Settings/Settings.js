import { StyleSheet, View } from "react-native"
import { Button, Header } from "../../components"
import ItemSettings from "./components/ItemSettings"
import { useNavigation } from "@react-navigation/native"
import { myColors, WINDOW_WIDTH } from "../../utils"

const Settings = () => {
   const navigation = useNavigation()
   return (
      <View style={styles.container}>
         <Header title="Cài đặt" />
         <View>
            <ItemSettings
               title="Đổi mật khẩu"
               onPress={() => navigation.navigate('ChangePassword')} />
            <ItemSettings
               title="Thay đổi ngôn ngữ" />
            <ItemSettings
               title="Chế độ tối" />
         </View>

         <Button
            style={styles.btnLogout}
            title="ĐĂNG XUẤT"
            textColor={myColors.primary} />
      </View>
   )
}

export default Settings

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: myColors.textWhile
   },
   btnLogout: {
      marginTop: 30,
      width: WINDOW_WIDTH * 0.8,
      borderWidth: 2,
      borderColor: myColors.primary,
      borderRadius: 10,
      backgroundColor: myColors.textWhile,
   },
})