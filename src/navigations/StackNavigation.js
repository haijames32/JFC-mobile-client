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
   Message,
   ChangePasword,
   ProductDetails,
   Splash,
   CreateOrder,
   Order,
   OrderDetails,
   Option,
   Settings,
} from '../screens/index'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Option' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="DetailsCategory" component={DetailsCategory} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="ChangePasword" component={ChangePasword} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="CreateOrder" component={CreateOrder} />
            <Stack.Screen name="Option" component={Option} />
            <Stack.Screen name="Settings" component={Settings} />
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