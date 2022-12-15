import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Kotelezo from './Kotelezo'
import Konyvprofil from './Konyvprofil'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function kotelezo_lap({ navigation }) {
  return (
   <Kotelezo navigation={navigation}/>
  );
}

function konyvprofil_lap({ navigation }) {
  return (
   <Konyvprofil />
  );
}
  	
function Root({ navigation }) {
  return (

<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Kotelezo_olvasmanyok" options={{title: 'Kötelező Olvasmányok'}} component={kotelezo_lap} />
        {/*<Drawer.Screen name="Konyv_Profil" options={{title: 'Könyv Profil'}} component={konyvprofil_lap} />*/}
</Drawer.Navigator>

  );
}
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen
  name="Root"
  component={Root}
  options={{ headerShown: false }}
/>
<Stack.Screen name="Konyvprofil" component={Konyvprofil} />
</Stack.Navigator>
</NavigationContainer>
  );
}