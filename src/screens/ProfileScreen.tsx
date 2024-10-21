import React, { useState, useEffect } from 'react';
    import { View, Text, StyleSheet, Image } from 'react-native';
    import auth from '@react-native-firebase/auth';
    import { colors } from '../styles/colors';
    import Button from '../components/Button';

    const ProfileScreen = ({ navigation }) => {
      const [user, setUser] = useState(null);

      useEffect(() => {
        const currentUser = auth().currentUser;
        setUser(currentUser);
      }, []);

      const handleLogout = async () => {
        try {
          await auth().signOut();
          navigation.navigate('Login');
        } catch (error) {
          console.error(error);
        }
      };

      if (!user) {
        return <Text>Loading...</Text>;
      }

      return (
        <View style={styles.container}>
          <Image
            source={{ uri: user.photoURL || 'https://via.placeholder.com/150' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{user.displayName}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Button title="Edit Profile" onPress={() => {}} style={styles.button} />
          <Button title="My Rides" onPress={() => {}} style={styles.button} />
          <Button title="Logout" onPress={handleLogout} style={styles.logoutButton} />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.background,
      },
      profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 16,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: colors.primary,
      },
      email: {
        fontSize: 16,
        marginBottom: 24,
        color: colors.text,
      },
      button: {
        marginBottom: 16,
        width: '100%',
      },
      logoutButton: {
        backgroundColor: colors.accent,
        marginTop: 24,
        width: '100%',
      },
    });

    export default ProfileScreen;