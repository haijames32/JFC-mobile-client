import { SafeAreaView, Text, View, TextInput } from 'react-native'
import { Icon, Header, Input, Button, ListEmpty } from '../../components'
import { myFonts } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/reducers/userSlice'

const Login = () => {
   const { value } = useSelector(state => state.user)
   const dispatch = useDispatch()

   return (
      <SafeAreaView style={{ flex: 1 }}>

      </SafeAreaView>
   )
}

export default Login