import { useNavigation, useRoute } from "@react-navigation/native"
import { Loading } from "../screens"

export const helper = {
   // onLoading: (onVisible) => {
   //    { onVisible ? <Loading /> : null }
   // },
   showLoading: () => {
      useNavigation().navigate('Loading')
   },
   hideLoading: () => {
      if (useRoute().name == 'Loading') useNavigation().goBack()
   },
   showMsgError: (
      title,
      message,
      onPress = useNavigation().goBack()
   ) => {
      useNavigation().navigate('Message', { title, message, msgType: 'error', onOk: onPress })
   },
   showMsgSuccess: (
      title,
      message,
      onPress = useNavigation().goBack()
   ) => {
      useNavigation().navigate('Message', { title, message, msgType: 'success', onOk: onPress })
   },
   showMsgConfirm: (
      title,
      message,
      onCancel = useNavigation().goBack(),
      onOk
   ) => {
      useNavigation().navigate('Confirm', { title, message, onCancel, onOk })
   },
}