import React from 'react';
    import { TextInput, StyleSheet } from 'react-native';
    import { colors } from '../styles/colors';

    const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    );

    const styles = StyleSheet.create({
      input: {
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
        color: colors.text,
      },
    });

    export default Input;