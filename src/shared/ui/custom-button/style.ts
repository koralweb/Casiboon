import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';
import {FONTS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark_000,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.dark_0076,
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 17,
  },
});
