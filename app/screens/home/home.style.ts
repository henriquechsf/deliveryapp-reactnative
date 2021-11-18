import {StyleSheet} from 'react-native';
import {theme} from '../../../App.style';

export const homeStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16,
  },
  icon: {
    color: theme.colors.primary,
    marginTop: 20,
  },
  cancelButton: {
    marginBottom: 10,
  },
});
