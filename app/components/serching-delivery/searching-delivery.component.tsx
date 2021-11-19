import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Button, Title} from 'react-native-paper';
import {searchingDeliveryStyle} from './searching-delivery.style';

export const SearchingDeliveryComponent = () => {
  return (
    <View style={searchingDeliveryStyle.flexCenterColumn}>
      <ActivityIndicator
        animating={true}
        color={searchingDeliveryStyle.icon.color}
      />
      <Title style={searchingDeliveryStyle.title}>
        Procurando por um entregador...
      </Title>
      <Button
        style={searchingDeliveryStyle.cancelDeliveryButton}
        mode="contained">
        Cancelar
      </Button>
    </View>
  );
};
