import React, { useState } from 'react';
    import { View, Text, StyleSheet, ScrollView } from 'react-native';
    import { colors } from '../styles/colors';
    import Button from '../components/Button';
    import Input from '../components/Input';

    const PostRideScreen = ({ navigation }) => {
      const [from, setFrom] = useState('');
      const [to, setTo] = useState('');
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
      const [seats, setSeats] = useState('');
      const [price, setPrice] = useState('');

      const handlePostRide = () => {
        // TODO: Implement ride posting logic
        console.log('Ride posted');
        navigation.goBack();
      };

      return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Post a Ride</Text>
          <Input
            placeholder="From"
            value={from}
            onChangeText={setFrom}
          />
          <Input
            placeholder="To"
            value={to}
            onChangeText={setTo}
          />
          <Input
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
          <Input
            placeholder="Time"
            value={time}
            onChangeText={setTime}
          />
          <Input
            placeholder="Available Seats"
            value={seats}
            onChangeText={setSeats}
            keyboardType="numeric"
          />
          <Input
            placeholder="Price per Seat"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <Button title="Post Ride" onPress={handlePostRide} style={styles.button} />
        </ScrollView>
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
        textAlign: 'center',
      },
      button: {
        marginTop: 16,
      },
    });

    export default PostRideScreen;