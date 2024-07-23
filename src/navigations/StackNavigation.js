import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
   Login,
   Category,
   DetailsCategory,
   EditProfile,
   Profile,
   Register,
   Home,
   Cart,
   Confirm,
   Loading,
   Message
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
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Group
               screenOptions={{
                  presentation: 'transparentModal',
                  animation: 'fade'
               }}>
               <Stack.Screen name="Loading" component={Loading} />
               <Stack.Screen name="Message" component={Message} />
               <Stack.Screen name="Confirm" component={Confirm} />
            </Stack.Group>
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default StackNavigation