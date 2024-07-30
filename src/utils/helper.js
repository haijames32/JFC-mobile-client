import { useNavigation, useRoute } from "@react-navigation/native"
import { Loading } from "../screens"

export const helper = {
   showLoading: () => {
      useNavigation().navigate('Loading')
   },
   hideLoading: () => {
      if (useRoute().name == 'Loading') useNavigation().goBack()
   },
   showMsgError: (
      message = '',
      onPress = useNavigation().goBack(),
      btnTitle = 'OK',
      title = 'Message'
   ) => {
      useNavigation().navigate('Message', { title, message, msgType: 'error', onOk: onPress, btnTitle })
   },
   showMsgSuccess: (
      message,
      onPress = useNavigation().goBack(),
      btnTitle = 'Continue',
      title = 'Message'
   ) => {
      useNavigation().navigate('Message', { title, message, msgType: 'success', onOk: onPress, btnTitle })
   },
   showMsgConfirm: (
      message,
      onOk,
      titleBtnOk = 'OK',
      onCancel = useNavigation().goBack(),
      title = 'Message',
   ) => {
      useNavigation().navigate('Confirm', { title, message, onCancel, onOk, titleBtnOk })
   },
}