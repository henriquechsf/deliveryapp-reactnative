import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {HeaderComponent} from '../../components/header/header.components';
import {addressStyle} from './address.style';

export const AddressScreen = () => {
  const destinations: number[] = [1, 2];

  return (
    <SafeAreaView>
      <HeaderComponent title="Endereço" hasBackButton={true} />
      <View style={addressStyle.marginHorizontal}>
        <TextInput label="Origem" />
        {destinations.map((destination: number, index: num) => (
          <TextInput
            key={`destination${index}`}
            label="Destino"
            right={
              destinations.length > 1 ? (
                <TextInput.Icon
                  name="close"
                  color={addressStyle.buttonIconRemove.color}
                  style={addressStyle.buttonIconRemove}
                />
              ) : null
            }
          />
        ))}
      </View>
      <View>
        <Button
          style={addressStyle.buttonIconAdd}
          icon="plus"
          labelStyle={addressStyle.buttonIconAddLabelStyle}
        />
      </View>
      <Button
        style={addressStyle.readyButtonStyle}
        mode="contained"
        uppercase={false}
        labelStyle={addressStyle.readyButtonLabelStyle}>
        Confirmar
      </Button>
    </SafeAreaView>
  );
};
