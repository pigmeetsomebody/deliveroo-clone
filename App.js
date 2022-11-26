// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import Restaurant from './screens/Restaurant';
import { Provider } from 'react-redux'
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PrepareOrderScreen from './screens/PrepareOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="BasketScreen" component={BasketScreen} 
            options={{presentation: "modal", headerShown: false}}
          />
          <Stack.Screen name="PrepareOrder" component={PrepareOrderScreen} 
            options={{presentation: "fullScreenModal", headerShown: false}}
          />
          <Stack.Screen name="Delivery" component={DeliveryScreen} 
            options={{presentation: "fullScreenModal", headerShown: false}}
          />
        </Stack.Navigator>
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;