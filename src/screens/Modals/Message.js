import { useRoute } from "@react-navigation/native"
import { Modal } from "react-native"


const Message = () => {
   const {
      title,
      message,
      onOK,
      msgType
   } = useRoute().params
   return (
      <>
      </>
   )
}

export default Message