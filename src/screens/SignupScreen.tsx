import React, { useState } from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import auth from '@react-native-firebase/auth';
    import { colors } from '../styles/colors';
    import Button from '../components/Button';
    import Input from '../components/Input';

    const SignupScreen = ({ navigation }) => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [name, setName] = useState('');

      const handleSignup = async () => {
        try {
          await auth().createUserWithEmailAndPassword(email, password);
          await auth().currentUser.updateProfile({ displayName: name });
          navigation.navigate('Home');
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Create an Account</Text>
          <Input
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
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
          <Button title="Sign Up" onPress={handleSignup} />
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
              Log in
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
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: colors.primary,
      },
      loginText: {
        marginTop: 16,
        textAlign: 'center',
        color: colors.text,
      },
      loginLink: {
        color: colors.accent,
        fontWeight: 'bold',
      },
    });

    export default SignupScreen;