import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
   Login,
   Category,
   DetailsCategory,
   EditProfile,
   Profile,
   Register,
   Home
} from '../screens/index'


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="DetailsCategory" component={DetailsCategory} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default StackNavigation