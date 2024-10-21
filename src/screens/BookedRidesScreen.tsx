import React from 'react';
    import { View, Text, StyleSheet, FlatList } from 'react-native';
    import { colors } from '../styles/colors';

    const dummyBookedRides = [
      { id: '1', from: 'New York', to: 'Boston', date: '2023-07-20', time: '09:00 AM' },
      { id: '2', from: 'San Francisco', to: 'Los Angeles', date: '2023-07-22', time: '02:00 PM' },
    ];

    const BookedRideItem = ({ ride }) => (
      <View style={styles.rideItem}>
        <Text style={styles.route}>{ride.from} to {ride.to}</Text>
        <Text style={styles.dateTime}>{ride.date} at {ride.time}</Text>
      </View>
    );

    const BookedRidesScreen = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Your Booked Rides</Text>
          <FlatList
            data={dummyBookedRides}
            renderItem={({ item }) => <BookedRideItem ride={item} />}
            keyExtractor={item => item.id}
          />
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
        marginBottom: 16,
        color: colors.primary,
      },
      rideItem: {
        backgroundColor: colors.secondary,
        padding: 16,
        marginBottom: 8,
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
      },
    });

    export default BookedRidesScreen;