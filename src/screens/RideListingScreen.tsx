import React from 'react';
    import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
    import { colors } from '../styles/colors';

    const dummyRides = [
      { id: '1', from: 'New York', to: 'Boston', date: '2023-07-15', time: '10:00 AM', seats: 3, price: 50 },
      { id: '2', from: 'Los Angeles', to: 'San Francisco', date: '2023-07-16', time: '2:00 PM', seats: 2, price: 60 },
      { id: '3', from: 'Chicago', to: 'Detroit', date: '2023-07-17', time: '9:00 AM', seats: 4, price: 45 },
    ];

    const RideItem = ({ ride }) => (
      <TouchableOpacity style={styles.rideItem}>
        <Text style={styles.route}>{ride.from} to {ride.to}</Text>
        <Text style={styles.dateTime}>{ride.date} at {ride.time}</Text>
        <Text style={styles.seats}>Available Seats: {ride.seats}</Text>
        <Text style={styles.price}>${ride.price} per seat</Text>
      </TouchableOpacity>
    );

    const RideListingScreen = () => {
      return (
        <View style={styles.container}>
          <FlatList
            data={dummyRides}
            renderItem={({ item }) => <RideItem ride={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.background,
      },
      rideItem: {
        backgroundColor: colors.secondary,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
      },
      route: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 4,
      },
      dateTime: {
        fontSize: 16,
        color: colors.text,
        marginBottom: 4,
      },
      seats: {
        fontSize: 14,
        color: colors.text,
        marginBottom: 4,
      },
      price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.accent,
      },
    });

    export default RideListingScreen;