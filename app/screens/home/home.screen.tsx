import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  ActivityIndicator,
  Button,
  Card,
  FAB,
  IconButton,
  List,
  Title,
} from 'react-native-paper';
import {homeStyle} from './home.style';

export const HomeScreen = () => {
  const state: number = 3;

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        //provider={PROVIDER_GOOGLE}
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

      {state === 2 ? (
        <Card>
          <Card.Content>
            <List.Item
              title="$ 15,00"
              description="Preço total da entrega"
              left={() => (
                <IconButton
                  icon="bike"
                  size={30}
                  style={homeStyle.icon}
                  color={homeStyle.icon.color}
                />
              )}
              right={() => (
                <View>
                  <Button style={homeStyle.cancelButton}>Cancelar</Button>
                  <Button mode="contained">Confirmar</Button>
                </View>
              )}
            />
          </Card.Content>
        </Card>
      ) : null}

      {state === 3 ? (
        <View style={homeStyle.flexCenterColumn}>
          <ActivityIndicator animating={true} color={homeStyle.icon.color} />
          <Title style={homeStyle.title}>Procurando por um entregador...</Title>
          <Button style={homeStyle.cancelDeliveryButton} mode="contained">
            Cancelar
          </Button>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
