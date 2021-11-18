import React from 'react';
import {SafeAreaView} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {FAB} from 'react-native-paper';
import {homeStyle} from './home.style';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={homeStyle.flex}
        initialRegion={{
          latitude: -3.722,
          longitude: -38.515,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        <Marker
          description="Delivery person 1"
          coordinate={{latitude: -3.723, longitude: -38.515}}
        />
      </MapView>
      <FAB icon="plus" style={homeStyle.fab} />
    </SafeAreaView>
  );
};
