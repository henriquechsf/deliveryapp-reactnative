import React from 'react';
import {SafeAreaView, View} from 'react-native';
import MapView from 'react-native-maps';
import {Avatar, Card, List, Text, Title} from 'react-native-paper';
import {HeaderComponent} from '../../components/header/header.components';
import {deliveryStyle} from './delivery.style';

export const DeliveryScreen = () => {
  return (
    <SafeAreaView style={deliveryStyle.flex}>
      <HeaderComponent title="Detalhes da Entrega" hasBackButton={true} />
      <View style={deliveryStyle.flex}>
        <MapView
          style={deliveryStyle.flex}
          initialRegion={{
            latitude: -3.722,
            longitude: -38.515,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        />
      </View>
      <Card>
        <Card.Title
          titleStyle={deliveryStyle.cardTitle}
          title={'99/99/9999'}
          right={() => <Text style={deliveryStyle.price}>R$ 30,00</Text>}
        />
        <Card.Content>
          <List.Item
            title={'Carlos Henrique'}
            description="53 entregas"
            left={() => (
              <Avatar.Image
                size={52}
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/47280581?v=4',
                }}
              />
            )}
          />
          <List.Item
            title="Origem"
            description="Origem Street, 60"
            left={() => <List.Icon icon="flag-outline" />}
          />
          <List.Item
            title="Destino"
            description="Destino Street, 100"
            left={() => <List.Icon icon="flag-checkered" />}
          />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};
