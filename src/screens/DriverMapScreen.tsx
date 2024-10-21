import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

    const DriverMapScreen = () => {
      const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      useEffect(() => {
        Geolocation.getCurrentPosition(
          (position) => {
            setRegion({
              ...region,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => console.log(error),
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }, []);

      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={region}
            onRegionChangeComplete={setRegion}
          >
            <Marker coordinate={region} />
          </MapView>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    });

    export default DriverMapScreen;