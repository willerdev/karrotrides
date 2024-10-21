import React, { useState } from 'react';
    import { View, Text, StyleSheet, Image } from 'react-native';
    import auth from '@react-native-firebase/auth';
    import { colors } from '../styles/colors';
    import Button from '../components/Button';
    import Input from '../components/Input';

    const LoginScreen = ({ navigation }) => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = async () => {
        try {
          await auth().signInWithEmailAndPassword(email, password);
          navigation.navigate('Home');
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <View style={styles.container}>
          <Image
            source={require('../assets/karrot-rides-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to Karrot Rides</Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
              Sign up
            </Text>
          </Text>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: colors.background,
      },
      logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 24,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: colors.primary,
      },
      signupText: {
        marginTop: 16,
        textAlign: 'center',
        color: colors.text,
      },
      signupLink: {
        color: colors.accent,
        fontWeight: 'bold',
      },
    });

    export default LoginScreen;