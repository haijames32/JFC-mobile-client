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
      message = '',
      onPress = useNavigation().goBack(),
      title = 'Message'
   ) => {
      useNavigation().navigate('Message', { title, message, msgType: 'error', onOk: onPress })
   },
   showMsgSuccess: (
      message,
      onPress = useNavigation().goBack(),
      title = 'Message'
   ) => {
      useNavigation().navigate('Message', { title, message, msgType: 'success', onOk: onPress })
   },
   showMsgConfirm: (
      message,
      onOk,
      onCancel = useNavigation().goBack(),
      title = 'Message',
   ) => {
      useNavigation().navigate('Confirm', { title, message, onCancel, onOk })
   },
}