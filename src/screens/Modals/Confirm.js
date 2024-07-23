import { useRoute } from "@react-navigation/native"
import { Modal } from "react-native"


const Confirm = () => {
   const {
      title,
      message,
      onCancel,
      onOK
   } = useRoute().params
   return (
      <>
      </>
   )
}

export default Confirm