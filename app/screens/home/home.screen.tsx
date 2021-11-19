import React from 'react';
import {Image, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {FAB} from 'react-native-paper';
import {ConfirmDeliveryCardComponent} from '../../components/confirm-delivery-card/confirm-delivery-card.component';
import {HeaderComponent} from '../../components/header/header.components';
import {SearchingDeliveryComponent} from '../../components/serching-delivery/searching-delivery.component';
import {homeStyle} from './home.style';

export const HomeScreen = () => {
  const state: number = 1;

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent title="Delivery App" />
      <MapView
        style={homeStyle.flex}
        initialRegion={{
          latitude: -3.722,
          longitude: -38.515,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        {state === 1 ? (
          <>
            <Marker
              description="Delivery person 1"
              coordinate={{latitude: -3.723, longitude: -38.515}}>
              <Image source={require('../../../assets/bike.png')} />
            </Marker>
            <Marker
              description="Delivery person 2"
              coordinate={{latitude: -3.74, longitude: -38.515}}>
              <Image source={require('../../../assets/bike.png')} />
            </Marker>
            <Marker
              description="Delivery person 3"
              coordinate={{latitude: -3.727, longitude: -38.515}}>
              <Image source={require('../../../assets/bike.png')} />
            </Marker>
          </>
        ) : null}
        {state === 2 ? (
          <>
            <Marker
              description="Origem"
              coordinate={{latitude: -3.74, longitude: -38.515}}
            />
            <Marker
              description="Destino"
              coordinate={{latitude: -3.727, longitude: -38.515}}
            />
          </>
        ) : null}
      </MapView>

      {state === 1 ? <FAB icon="plus" style={homeStyle.fab} /> : null}

      {state === 2 ? <ConfirmDeliveryCardComponent /> : null}

      {state === 3 ? <SearchingDeliveryComponent /> : null}
    </SafeAreaView>
  );
};
