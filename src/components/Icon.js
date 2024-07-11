import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome6Pro from 'react-native-vector-icons/FontAwesome6Pro'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import RNIMigration from 'react-native-vector-icons/RNIMigration'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import { TouchableOpacity } from 'react-native'

export const Icons = {
   AntDesign,
   Entypo,
   EvilIcons,
   Feather,
   FontAwesome5,
   FontAwesome5Pro,
   FontAwesome6,
   FontAwesome6Pro,
   Fontisto,
   Foundation,
   MaterialCommunityIcons,
   MaterialIcons,
   Octicons,
   RNIMigration,
   SimpleLineIcons,
   Zocial,
   Ionicons
}

const Icon = ({
   type,
   name,
   size = 30,
   color,
   onPress,
   ...props
}) => {
   const MyIcon = type
   return (
      <TouchableOpacity
         {...props}
         onPress={onPress}>
         <MyIcon name={name} size={size} color={color} />
      </TouchableOpacity>
   )
}

export default Icon