import React from 'react';
    import { View, Text, StyleSheet, Switch } from 'react-native';
    import { colors } from '../styles/colors';

    const SettingsScreen = () => {
      const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);
      const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Enable Notifications</Text>
            <Switch
              trackColor={{ false: colors.border, true: colors.accent }}
              thumbColor={isNotificationsEnabled ? colors.primary : colors.secondary}
              onValueChange={() => setIsNotificationsEnabled(previousState => !previousState)}
              value={isNotificationsEnabled}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch
              trackColor={{ false: colors.border, true: colors.accent }}
              thumbColor={isDarkModeEnabled ? colors.primary : colors.secondary}
              onValueChange={() => setIsDarkModeEnabled(previousState => !previousState)}
              value={isDarkModeEnabled}
            />
          </View>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.background,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: colors.primary,
      },
      settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      },
      settingLabel: {
        fontSize: 18,
        color: colors.text,
      },
    });

    export default SettingsScreen;