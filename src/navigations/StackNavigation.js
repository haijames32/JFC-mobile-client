import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
   Login,
   Category,
   CategoryDetails,
   EditProfile,
   Profile,
   Register,
   Home,
   Cart,
   Confirm,
   Loading,
   Message,
   ChangePassword,
   ProductDetails,
   Splash,
   CreateOrder,
   Order,
   OrderDetails,
   Options,
   Settings,
   Address,
   EditAddress,
} from '../screens/index'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="Options" component={Options} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="EditAddress" component={EditAddress} />
            <Stack.Screen name="CreateOrder" component={CreateOrder} />
            <Stack.Group screenOptions={{ presentation: 'transparentModal', animation: 'flip' }}>
               <Stack.Screen name="Cart" component={Cart} />
            </Stack.Group>
            <Stack.Group
               screenOptions={{ presentation: 'transparentModal', animation: 'fade' }}>
               <Stack.Screen name="Loading" component={Loading} />
               <Stack.Screen name="Message" component={Message} />
               <Stack.Screen name="Confirm" component={Confirm} />
            </Stack.Group>
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default StackNavigation