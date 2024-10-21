import React from 'react';
    import { TouchableOpacity, Text, StyleSheet } from 'react-native';
    import { colors } from '../styles/colors';

    const Button = ({ title, onPress, style }) => (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );

    const styles = StyleSheet.create({
      button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
      },
    });

    export default Button;