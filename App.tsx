import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import Icon from 'react-native-vector-icons/MaterialIcons';
    import LoginScreen from './src/screens/LoginScreen';
    import SignupScreen from './src/screens/SignupScreen';
    import HomeScreen from './src/screens/HomeScreen';
    import RideRequestScreen from './src/screens/RideRequestScreen';
    import DriverMapScreen from './src/screens/DriverMapScreen';
    import ProfileScreen from './src/screens/ProfileScreen';
    import PostRideScreen from './src/screens/PostRideScreen';
    import RideListingScreen from './src/screens/RideListingScreen';
    import BookedRidesScreen from './src/screens/BookedRidesScreen';
    import SettingsScreen from './src/screens/SettingsScreen';
    import { colors } from './src/styles/colors';

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const MainTabs = () => (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = 'home';
            } else if (route.name === 'Rides') {
              iconName = 'directions-car';
            } else if (route.name === 'Booked') {
              iconName = 'event';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          headerShown: false,
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="Rides" component={RideListingScreen} />
        <Tab.Screen name="Booked" component={BookedRidesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );

    const App = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.secondary,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Karrot Rides' }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
            <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
            <Stack.Screen name="RideRequest" component={RideRequestScreen} options={{ title: 'Request a Ride' }} />
            <Stack.Screen name="DriverMap" component={DriverMapScreen} options={{ title: 'Driver Map' }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
            <Stack.Screen name="PostRide" component={PostRideScreen} options={{ title: 'Post a Ride' }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    };

    export default App;