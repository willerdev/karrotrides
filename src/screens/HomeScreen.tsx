import React from 'react';
    import { View, Text, StyleSheet, Image } from 'react-native';
    import { colors } from '../styles/colors';
    import Button from '../components/Button';

    const HomeScreen = ({ navigation }) => {
      return (
        <View style={styles.container}>
          <Image
            source={require('../assets/karrot-rides-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcome}>Welcome to Karrot Rides</Text>
          <Button
            title="Request a Ride"
            onPress={() => navigation.navigate('RideRequest')}
            style={styles.button}
          />
          <Button
            title="Post a Ride"
            onPress={() => navigation.navigate('PostRide')}
            style={styles.button}
          />
          <Button
            title="Available Rides"
            onPress={() => navigation.navigate('RideListing')}
            style={styles.button}
          />
          <Button
            title="Driver Mode"
            onPress={() => navigation.navigate('DriverMap')}
            style={styles.button}
          />
          <Button
            title="My Profile"
            onPress={() => navigation.navigate('Profile')}
            style={styles.button}
          />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.background,
      },
      logo: {
        width: 120,
        height: 120,
        marginBottom: 24,
      },
      welcome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: colors.primary,
      },
      button: {
        marginBottom: 16,
        width: '100%',
      },
    });

    export default HomeScreen;